/**
 * SDF Query
 * Simple utility for selecting and modifying DOM elements used by SDF CSS Framework.
 * Lightweight alternative to some escentials of jQuery compatible with modern browser and ie11+
 * @package SDF
 * @author  eugenioenko
 * @license http://opensource.org/licenses/MIT  MIT License
 * @tutorial https://eugenioenko.github.io/sdf-query/docs/index.html
 * @link    https://github.com/eugenioenko/sdf-css
 * @version 0.9.7
 */
(function(){
"use strict";

if(typeof window === "undefined" || typeof document === "undefined"){
    throw new Error("sdf-query requires a browser");
}

/**
 * Query Function
 *
 * This function enables you to select html elements from the DOM and return an object which
 * lets you modify their attributes, classes, values, styles and add event handlers.
 *
 * @param  {string|object} selector A string which is gonna be used to query elements or a Node element.
 * If selector starts with '#' getElementsById will be used limiting the result to 1.
 * @param {number|optional}        limit If set to a number, will limit the results of the query
 * to the amount. If set to one, element will be selected by using querySelector instead of querySelectorAll.
 *
 * @return {object} Which contains the methods for dom manipulation.
 *
 * @example
 * // adds an event handler for a button of id #button_id
 * sdf.$('#button_id').on('click', function(){});
 *
 * @example
 * // sets the attribute data-item to all the li with class '.active'
 * sdf.$('li.active').attr('data-item', 'value');
 *
 * @example
 * // removes class .active from all h2 with class '.active' of the page
 * sdf.$('h2.active').removeClass('active');
 * // removes class .active from 3 of h2 of the page
 * sdf.$('h2.active', 3).removeClass('active');
 *
 * @example
 * // Iterates over all the ul of a page and appends an li and prepends li
 * sdf.$('ul').append('<li>appended</li>').prepend('<li>prepended</li>');
 *
 * @example
 *  // Custom iterator
 *  sdf.$('span').each(function(){
 *      sdf.$(this).attr('data-active', 'false');
 *  });
 *  // Chaining
 *  sdf.$('span[data-attr="value"]').prepend('<br>').append('!');
 *
 */
function SdfSelect(selector, limit, parent){
    parent = (typeof parent === "undefined" ) ? document : parent;
    limit = (typeof limit === "undefined") ? -1 : limit;
    var elements =  [];
    var element = {};
    var method = '';

    var isNodeListEmpty = function(nodeList){
        return nodeList.length == 0;
    };

    var parseAndQueryItemById = function(){
        method = 'getElementById';
        element = parent.getElementById(selector.substring(1));
        if(element){
            elements.push(element);
        }
    };

    var parseAndQuerySingleItem = function(){
        method = "querySelector";
        element = parent.querySelector(selector);
        if(element){
            elements.push(element);
        }
    };

    var parseAndQueryAll = function(){
        method = "querySelectorAll";
        var nodes = parent.querySelectorAll(selector);
        if(limit == -1){
            limit = nodes.length;
        } else {
            limit = limit > nodes.length ? nodes.length : limit;
        }
        for(var i = 0; i < limit; ++i){
            elements.push(nodes[i]);
        }
    };

    var parseStringSelector = function(){
        selector = selector.trim();
        if(selector.charAt(0) == '#'){
            parseAndQueryItemById();
        } else if(limit == 1){
            parseAndQuerySingleItem();
        } else {
            parseAndQueryAll();
        }
    };

    var parseNodeSelector = function(){
        method = "element";
        elements.push(selector);
        selector = false;
    };

    var parseErrorMessage = function(){
        method = "error";
        // selector is not a string nor a dom Node Object
        console.error(selector + " is not a string, 'query' requires a string as selector");
        selector = false;
    };

    if (arguments.length) {
        if (typeof selector === "string"){
           parseStringSelector();
        } else if(typeof selector === "object" && selector instanceof Node){
            parseNodeSelector();
        }else {
           parseErrorMessage();
        }
    } else {
        method = null;
        // null selector used for create
        selector = false;
    }
    if(isNodeListEmpty(elements) && method != null) {
        console.warn('sdf-query: No elements with selector "' + selector + '"');
        return new SdfDom(selector, null, 0, method);
    }
    return new SdfDom(selector, elements, elements.length, method);
}


if(typeof window.sdf === "undefined"){
    window.sdf = {};
}
window.sdf.$ =  SdfSelect;
function SdfUtils(){

}
SdfUtils.prototype.validateArgTypes = function(args, types){
    // the number of arguments passed should be the same as required ones
    if(args.length != (types.length)){
        return false;
    }
    for(var i = 0; i < args.length; ++i){
         if(types[i] === "any"){
             args[i] = (args[i]).toString();
         } else {
             if(typeof args[i] !== types[i]){
                 return false;
             }
         }
    }
    return true;
};

SdfUtils.prototype.createClassList = function(classList){
    var classes = classList.split(' ');
    for (var i = 0; i < classes.length; ++i){
        classes[i] = classes[i].replace(' ', '');
    }
    return classes;
};

if(typeof window.sdf === "undefined"){
    window.sdf = {};
}
window.sdf.utils =  new SdfUtils();
function SdfDom(selector, nodes, length, method){
    this.selector = selector;
    this.nodes = nodes;
    this.length = length;
    this.method = method;
    this.utils = new SdfUtils();
}
/**
* Adds classnames to the elements in the node list
*
* @param  {string} classList List of classes separated by space or a signle classname
*
* @return {object} Query object for nesting
*
* @example
* // adds classes through custom iterator
* sdf.$('li').each(function(){
*   sdf.$(this).addClass('class-1 class-2 class-3');
* });
*
* @example
* // adds classes through method
* sdf.$('li').addClass('class-1 class-2 class-3')
*/
SdfDom.prototype.addClass = function(classList){
    if(!sdf.utils.validateArgTypes(arguments, ["string"])){
        throw new Error("'addClass' takes classList{string} as argument");
    }

    var classes = sdf.utils.createClassList(classList);
    for (var i = 0; i < this.nodes.length; ++i) {
        for(var j = 0; j < classes.length; ++j){
            if(classes[j] != ''){
                this.nodes[i].classList.add(classes[j]);
            }
        }
    }
    return this;
};
/**
* Inserts content after each element of the list.
* If content is a string parses the specified text as HTML
* and inserts the resulting nodes.
*
* @param  {string|node} value String or Node to be inserted
*
* @example
* cheat sheet
* <!-- before -->
* <element>
*   <!-- prepend -->
*   {{ elements content }}
*   <!-- append -->
* </element>
* <!-- after -->
*
* @example
* // after a div in the div#first
* sdf.$('li#first').after('<li id="second"></li>');
*
* @return {object} Query object for nesting
*/
SdfDom.prototype.after = function(content){
    this.insert('afterend', content);
    return this;
};
/**
* Sets the attribute of each elements in the list or,
* Gets the value of attribute of the first element if no arguments
*
* @param {string} attr Attribute to be set
* @param  {string} value Optional, the new attribute value
*
* @return {mixed} Query object for nesting or value if getter
*
* @example
* // reads the attribute data-date from a clicked button
* sdf.$('button').click(function(){
*   var date = sdf.$(this).attr('data-date');
*   // to do
*   sdf.$(this).attr('data-date', date);
* });
*/
SdfDom.prototype.attr = function(attr, value){
    if(sdf.utils.validateArgTypes(arguments, ["string"])){
        return this.nodes[0].getAttribute(attr);
    } else if(sdf.utils.validateArgTypes(arguments, ["string", "any"])){
        for (var i = 0; i < this.nodes.length; ++i) {
            this.nodes[i].setAttribute(attr, value);
        }
    } else {
        console.error("'attr' requires attr{string} for getter and value{any} as setter");
    }
    return this;
};
/**
* Appends content to each element of the list.
* If content is a string parses the specified text as HTML
* and inserts the resulting nodes.
*
* @param  {string|node} value String or Node to be inserted
*
* @example
* cheat sheet
* <!-- before -->
* <element>
*   <!-- prepend -->
*   {{ elements content }}
*   <!-- append -->
* </element>
* <!-- after -->
*
* @example
* // appends a div in the div#first
* sdf.$('div#first_element').append('<div></div>');
*
* @return {object} Query object for nesting
*/
SdfDom.prototype.append = function(content){
    this.insert('beforeend', content);
    return this;
};
/**
* Inserts content before each element of the list.
* If content is a string, 'prepend' parses the specified text as HTML
* and inserts the resulting nodes.
*
* @param  {string|node} value String or Node to be inserted
*
* @example
* cheat sheet
* <!-- before -->
* <element>
*   <!-- prepend -->
*   {{ elements content }}
*   <!-- append -->
* </element>
* <!-- after -->
*
* @example
* // inserts a div before the div#first
* sdf.$('div#first').before('<div id="before_first"></div>');
*
* @return {object} Query object for nesting
*/
SdfDom.prototype.before = function(content){
    this.insert('beforebegin', content);
    return this;
};
/**
* Creates an html element to be later appended with append
*
* @param  {string} type The type of element: div,li, button, a...
* @param  {string} html Inner html of the element
*
* @return {object}      Node element of DOM
*
* @example
* // creates a node and appends it
* sdf.$('ul').append(sdf.$().create('li', 'list item A'));
*/
SdfDom.prototype.create = function(tag, html){
	if(typeof tag === "string"){
		var element = document.createElement(tag);
		if(typeof html !== "undefined"){
			element.innerHTML = html;
		}
		return element;
	} else {
		console.warn("'create' takes tag{string} and html{string|optional} as argument");
		return this;
	}

};
/**
* Sets the style of each elements in the list or,
* Gets the value of style of the first element if no arguments
*
* @param {string} attr Attribute to be set
* @param  {string} value Optional, the new style value
*
* @return {mixed} Query object for nesting or value if getter
*
* @example
* // reads the style data-date from a clicked button
* sdf.$('button').click(function(){
*   var opacity = sdf.$(this).css('opacity');
*   // to do
*   opacity -= 0.3;
*   sdf.$(this).css('opacity', opacity);
*   sdf.$(this).css({opacity: 1, color: 'red'});
* });
*/
SdfDom.prototype.css = function(style, value){
    var i = 0;
    if(sdf.utils.validateArgTypes(arguments, ["string"])){
        // getter
         return this.nodes[0].style[style];
    } else if(sdf.utils.validateArgTypes(arguments, ["object"])){
        value = style;
        // setter with object param
        for (i = 0; i < this.nodes.length; ++i) {
            for(var key in value){
                if(!value.hasOwnProperty(key)) continue;
                this.nodes[i].style[key] = value[key];
            }
        }
        return this;
    } else if(sdf.utils.validateArgTypes(arguments, ["string", "any"])){
        for (i = 0; i < this.nodes.length; ++i) {
            this.nodes[i].style[style] = value;
        }
    } else {
        throw new Error("'css' takes style{string} and value{string|object} as arguments");
    }

    return this;
};
/**
* Iterates over every item from the selected element list.
* Sets "this" to the currently iterated element.
*
* @param  {function} method A function to execute for each node
* @this Currently iterated element
*
* @return {object} Query object for nesting
*
* @example
* // Iterates over buttons with class active, gets the attribute data-state,
* does something and finally sets data-state to false
* sdf.$('button.active').each(function(){
*   var state = sdf.$(this).attr('data-state');
*   // to do
*   sdf.$(this).attr('data-state', 'false');
* });
*/
SdfDom.prototype.each = function(method){
    if(sdf.utils.validateArgTypes(arguments, ["function"])){
        for (var i = 0; i < this.nodes.length; ++i) {
            method.call(this.nodes[i]);
        }
    } else {
        throw new Error(method + " is not a function, 'each' requires a function as argument");
    }
    return this;
};
/**
* Gets the first element in the selected list of nodes
*
* @return {object} First element in the list
*
* @example
* var element = sdf.$('div.class-name').element();
* element.style.display = 'block';
* sdf.$(element).css({display: 'block', opacity: '0.5'});
*/

SdfDom.prototype.element = function(){
    return this.nodes[0];
};

/**
* Returns the first element in the list
* Alias to element()
* @return {object} Element
*/
SdfDom.prototype.first = function(){
    return this.element();
};
/**
* Returns a list of decendent elements from the selected element.
* @param  {string} selector
*
* @return Query object for nesting and dom modification
*
*/
SdfDom.prototype.find = function(selector){
    if(!sdf.utils.validateArgTypes(arguments, ["string"])){
        console.error("'find' takes selector{string} as argument");
        return this;
    }
    return sdf.$(selector, -1, this.nodes[0]);
};
/**
* Returns true if a class is present in the first element class list
*
* @param  {string} className Name of the class without "."
*
* @return {bool} If the classname is present in the list
*
* @example
* if(sdf.$('#element').hasClass('class-name')){
*     // to do
* }
*
* @example
* // checks if element is active on click, does stuff, removes class active.
* sdf.$('#element_id').on('click', function(){
*     if(sdf.$(this).hasClass('active')){
*         // to do
*         sdf.$(this).removeClass('active');
*     }
* });
*/
SdfDom.prototype.hasClass = function(className){
    if(!sdf.utils.validateArgTypes(arguments, ["string"])){
        throw new Error("'hasClass' takes className{string} as argument");
    }
    className = className.trim();
    return this.nodes[0].classList.contains(className);
};
/**
* Sets the innerHTML of each element in the list or,
* Gets the innerHTML of the first element on the list
*
* @param  {string} value Optional, the new innerHTML value
*
* @return {object|string} Query object for nesting or value if getter
*
* @example
* // sets inner conent of body
* sdf.$('body', 1).html('<h1>Hello, World!</h1>');
* // gets the html of the body
* var body = sdf.$('body', 1).html();
*/
SdfDom.prototype.html = function(value){
	if(arguments.length == 0){
	    return this.nodes[0].innerHTML;
	}
    if(!sdf.utils.validateArgTypes(arguments, ["any"])){
        throw new Error("'html' takes value {any} as argument or no arguments.");
    }
    for (var i = 0; i < this.nodes.length; ++i) {
        this.nodes[i].innerHTML = value;
    }
    return this;
};
/**
* Inserts content to each element of the list.
* If content is a string, parses the specified text as HTML
* and inserts the resulting nodes.
*
* @param  {string} position  Location relative to the element where to be inserted
* @param  {string|node} value String or Node to be inserted
*
* @example
* cheat sheet
* <!-- beforebegin -->
* <element>
*   <!-- afterbegin -->
*   {{ elements content }}
*   <!-- beforeend -->
* </element>
* <!-- afterend -->
*
* @example
* // inserts a div before the div#first
* sdf.$('div#first').insert('<div id="before_first"></div>', 'beforebegin');
*
* @return {object} Query object for nesting
*/
SdfDom.prototype.insert = function(position, content){
    var insertMethod = "";
    if(sdf.utils.validateArgTypes(arguments, ["string", "string"])){
        insertMethod = "insertAdjacentHTML";
    }
    if(sdf.utils.validateArgTypes(arguments, ["string", "object"]) &&
        content instanceof Node ){
        insertMethod = "insertAdjacentElement";
    }
    if(!insertMethod.length){
        throw new Error("'insert' takes position{string} and content{string|Node} as argument");
    }
    for(var i = 0; i < this.nodes.length; ++i) {
        this.nodes[i][insertMethod](position, content);
    }
    return this;
};
/**
* Adds event listener to the selected elements.
* Sets "this" to the currently iterated element.
*
* @param  {string}   event  Type of the event to listen to
* @param  {function} method Method to execute on the event
* @this points to the currently iterated element
*
* @return {object} Query object for nesting
*
* @example
* sdf.$('selector').on('click', function(){
*     //to do
* });
* sdf.$('input[type="text"]').on('change', function(){
*     var value = sdf.$(this).value();
*     alert(value);
* });
*/
SdfDom.prototype.on = function(event, method){
    if(sdf.utils.validateArgTypes(arguments, ["string", "function"])){
        // adding event listeners
        for (var i = 0; i < this.nodes.length; ++i) {
            this.nodes[i].addEventListener(event, method);
        }
    } else {
        throw new Error("'on' requires event {string} and method {function}");
    }
    return this;
};
/**
* Prepends content to each element of the list.
* If content is a string parses the specified text as HTML
* and inserts the resulting nodes.
*
* @param  {string|node} value String or Node to be inserted
*
* @example
* cheat sheet
* <!-- before -->
* <element>
*   <!-- prepend -->
*   {{ elements content }}
*   <!-- append -->
* </element>
* <!-- after -->
*
* @example
* // prepends a div in the div#first
* sdf.$('div#first').prepend('<div id="start_of_first"></div>');
*
* @return {object} Query object for nesting
*/
SdfDom.prototype.prepend = function(content){
    this.insert('afterbegin', content);
    return this;
};
/**
* Removes each selected element from the page
*
* @return {object} Query object for nesting
*
* @example
* // destroys the body
* sdf.$('body', 1).remove();
*/
SdfDom.prototype.remove = function(){
    for (var i = 0; i < this.nodes.length; ++i) {
        this.nodes[i].parentNode.removeChild(this.nodes[i]);
    }
    this.nodes = [];
    this.selector = null;
    this.length = 0;
    return this;
};
/**
* Removes an attribute from each element in the list
*
* @param  {string} attr Name of the attribute to be removed from the element
*
* @return {object} Query object for nesting
*
* @example
* // removes the attribute 'data-active' from all the div with data-active="false"
* sdf.$('div[data-active="false"]').removeAttr('data-active');
*/
SdfDom.prototype.removeAttr = function(attrName){
    if(!sdf.utils.validateArgTypes(arguments, ["any"])){
        console.error("'append' takes string{any} as argument");
        return this;
    }
    for (var i = 0; i < this.nodes.length; ++i) {
        this.nodes[i].removeAttribute(attrName);
    }
    return this;
};
/**
* Removes classes from  elements in the list
*
* @param  {string} classList List of classes separated by space
*
* @return {object} Query object for nesting
*
* @example
*  // removes the classes ".class-1, .class-2" from the first 10 elements with class .class-0
*  sdf.$('.class-0').removeclass('class-1 class-2');
*/
SdfDom.prototype.removeClass = function(classList){
    if(!sdf.utils.validateArgTypes(arguments, ["string"])){
        console.error("'removeClass' takes classList{string} as argument");
        return this;
    }
    var classes = sdf.utils.createClassList(classList);
    for (var i = 0; i < this.nodes.length; ++i) {
        for(var j = 0; j < classes.length; ++j){
            if(classes[j] != ''){
                this.nodes[i].classList.remove(classes[j]);
            }
        }
    }
    return this;
};
/**
 * Sets the textContent of each elements in the list or
 * Gets the value of textContent of the first element if no arguments
 *
 * @param  {string} value Optional, the new textContent value
 *
 * @return {mixed} Query object for nesting or value if getter
 *
 * @example
 * // gets the textContent of the element with id #element
 * var text = sdf.$('#element').text();
 * // sets the textContent of all the first 3 li of ul#list
 * sdf.$('ul#list>li', 3).text('Hello, World!');
 */
SdfDom.prototype.text = function(value){
    if(arguments.length == 0){
        return this.nodes[0].textContent;
    }
    if(sdf.utils.validateArgTypes(arguments, ["any"])){
        for (var i = 0; i < this.nodes.length; ++i) {
            this.nodes[i].textContent = value;
        }
    } else {
        console.error("'text' takes value {any} as argument or no arguments.");
    }
    return this;
};
/**
* Sets the value of each elements in the list or
* Gets the value of the first element if no arguments
*
* @param  {string} val Optional, the new value value
*
* @return {object} Query object for nesting
*
* @example
* // gets the value of the input with id #input_1
* var val = sdf.$('input#input_1').value();
*/
SdfDom.prototype.value = function(val){
    if(arguments.length == 0){
        return this.nodes[0].value;
    }
    if(sdf.utils.validateArgTypes(arguments, ["any"])){
        for (var i = 0; i < this.nodes.length; ++i) {
            this.nodes[i].value = val;
        }
    } else {
        console.error("'value' takes value {string} as argument or no arguments.");
    }
    return this;
};
})();
 /**
 * @license
 * This content is released under the MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */