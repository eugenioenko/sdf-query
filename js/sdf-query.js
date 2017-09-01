/**
 * SDF Query
 * Simple utility for selecting and modifying DOM elements user by
 * SDF CSS Framework
 *
 * An open source application development framework for PHP
 *
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
 *
 * @package	SDF
 * @author	eugenioenko
 * @license	http://opensource.org/licenses/MIT	MIT License
 * @link	https://github.com/eugenioenko/sdf-query
 * @since	Version 1.0.0
 */
(function(){

/**
 * Query Function
 *
 * This function enables you to select elements from the DOM and modify their
 * attributes, classes, values and styles. And  add event handlers.
 *
 * @param  {string|object} selector A string which is gonna be used to query elements or a Node element
 * @param {boolean}        single If set to True, will limit the result of the query
 * to a single element by using querySelector instead of querySelectorAll.
 * @return {object} Will return an object with a list of elements and the methods
 * for modifying them. The result could be chained and subsequent calls could be
 * performed
 */
	var query = function (selector, single){

		var emptyNodeList = function(nodeList){
			return nodeList.length == 0;
		};
		var validArguments = function(args){
			if(args.length  != (arguments.length-1)){
				return false;
			}
			for(var i = 0; i < args.length; ++i){
				if(arguments[i+1] === "string"){
					// cast to string
					args[i] = (args[i]).toString();
				}
				if(typeof args[i] !== arguments[i+1]) return false;
			}
			return true;
		};
		var emptyArguments = function(args){
			return args.length == 0;
		};

		var single = (typeof single === "boolean") ? single : false;
		var elements =  [];

		if (typeof selector === "string"){
			if(single){
				elements.push(document.querySelector(selector));
			} else {
				elements = document.querySelectorAll(selector)
			}
		} else if(typeof selector === "object" && selector instanceof Node){
			elements.push(selector);
			selector = false;
		} else {
			// selector is not a string nor a dom Node
			console.error(selector + " is not a string, 'query' requires a string as selector");
			selector = null;
		}

		return {
			selector: selector,
			nodes: elements,
			length: elements.length,

		/**
		 * Adds event listener to the elements in the query list
		 * @param  {string}   event  Type of the event to listen to
		 * @param  {function} method Method to execute on the event
		 * @return {object}   Query object for nesting
		 */
			on: function(event, method){
				if(emptyNodeList(this.nodes)) {
					console.error("No elements with selector: " + this.selector + ' for on method');
					return this;
				}
				if(!validArguments(arguments, "string", "function")){
					console.error("'on' requires event{string} and method{function}");
					return this;
				}
				// adding event listeners
				for (var i = 0; i < this.nodes.length; i++) {
					this.nodes[i].addEventListener(event, method);
				}
				return this;
			},
			/**
			 * Iterates over the list of dom nodes
			 * @param  {function} method A function to execute for each node,
			 *   "this" is gonna be set to the current iterated element
			 * @return {object}        Query object for nesting
			 */
			each: function(method){
				if(emptyNodeList(this.nodes)) {
					console.error("No elements with selector: " + this.selector + ' for each');
					return this;
				}
				if(!validArguments(arguments, "function")){
					console.error(method + " is not a function, 'each' requires a function as argument");
					return this;
				}
				for (var i = 0; i < this.nodes.length; i++) {
					method.call(this.nodes[i]);
				}
				return this;
			},
			/**
			 * Sets the innerHTML of each elements in the list or
			 * Gets the value of innerHTML of the first element if no arguments
			 * @param  {string} value Optional, the new innerHTML value
			 * @return {mixed}        Query object for nesting or value if getter
			 */
			html: function(value){
				if(emptyNodeList(this.nodes)) {
					console.error("No elements with selector: " + this.selector + ' for html');
					return this;
				}
				if(emptyArguments(arguments)){
					return this.nodes[0].innerHTML;
				}
				if(!validArguments(arguments, "string")){
					console.error("'html' takes value{string} as argument or no arguments.");
					return this;
				}
				for (var i = 0; i < this.nodes.length; i++) {
					this.nodes[i].innerHTML = value;
				}
				return this;
			},
			/**
			 * Sets the textContent of each elements in the list or
			 * Gets the value of textContent of the first element if no arguments
			 * @param  {string} value Optional, the new textContent value
			 * @return {mixed}        Query object for nesting or value if getter
			 */
			text: function(value){
				if(emptyNodeList(this.nodes)) {
					console.error("No elements with selector: " + this.selector + ' for text');
					return this;
				}
				if(emptyArguments(arguments)){
					return this.nodes[0].textContent;
				}
				if(!validArguments(arguments, "string")){
					console.error("'text' takes value{string} as argument or no arguments.");
					return this;
				}
				for (var i = 0; i < this.nodes.length; i++) {
					this.nodes[i].textContent = value;
				}
				return this;
			},
			/**
			 * Sets the attribute of each elements in the list or
			 * Gets the value of attribute of the first element if no arguments
			 * @param {string} attr Attribute to be set
			 * @param  {string} value Optional, the new attribute value
			 * @return {mixed}        Query object for nesting or value if getter
			 */
			attr: function(attr, value){
				if(emptyNodeList(this.nodes)) {
					console.error("No elements with selector: " + this.selector + ' for text');
					return this;
				}
				if(emptyArguments(arguments)){
					console.error("'attr' requires at least one argument as attribute{string}");
					return this;
				}
				if(arguments.length == 1){
					if(!validArguments(arguments, "string")){
						console.error("'attr' takes attribute{string} as argument for getter");
						return this;
					}
					return this.nodes[0].getAttribute(attr);
				}

				if(!validArguments(arguments, "string", "string")){
					console.error("'attr' takes two attribute{string}, value{string} as setter");
					return this;
				}
				for (var i = 0; i < this.nodes.length; i++) {
					this.nodes[i].setAttribute(attr, value);
				}
				return this;
			},
			/**
			 * Sets the value of each elements in the list or
			 * Gets the value of value of the first element if no arguments
			 * @param  {string} val Optional, the new value value
			 * @return {object}        Query object for nesting
			 */
			value: function(val){
				if(emptyNodeList(this.nodes)) {
					console.error("No inputs with selector: " + this.selector + ' for value');
					return this;
				}
				if(emptyArguments(arguments)){
					return this.nodes[0].value;
				}
				if(!validArguments(arguments, "string")){
					console.error("'value' takes value{string} as argument or no arguments.");
					return this;
				}
				for (var i = 0; i < this.nodes.length; i++) {
					this.nodes[i].value = val;
				}
				return this;
			},
			/**
			 * Appends a string to each element in the list
			 * @param  {string} value String to be apended
			 * @return {object}        Query object for nesting
			 */
			append: function(value){
				if(emptyNodeList(this.nodes)) {
					console.error("No elements with selector: " + this.selector + ' for append');
					return this;
				}
				if(!validArguments(arguments, "string")){
					console.error("'append' takes string{string} as argument");
					return this;
				}
				for (var i = 0; i < this.nodes.length; i++) {
					this.nodes[i].innerHTML += value;
				}
				return this;
			},
			/**
			 * Prepends a string to each element in the list
			 * @param  {string} value String to be apended
			 * @return {object}        Query object for nesting
			 */
			prepend: function(value){
				if(emptyNodeList(this.nodes)) {
					console.error("No elements with selector: " + this.selector + ' for prepend');
					return this;
				}
				if(!validArguments(arguments, "string")){
					console.error("'prepend' takes string{string} as argument");
					return this;
				}
				for (var i = 0; i < this.nodes.length; i++) {
					this.nodes[i].innerHTML = value + this.nodes[i].innerHTML;
				}
				return this;
			},
			/**
			 * Removes each element from the list of dom and itself
			 * @return {object}        Query object for nesting
			 */
			remove: function(){
				for (var i = 0; i < this.nodes.length; i++) {
					this.nodes[i].parentNode.removeChild(this.nodes[i]);
				}
				this.nodes = [];
				this.selector = null;
				this.length = 0;
				return this;
			}
		}
	}

	if(typeof window["sdf"] === "undefined"){
		window["sdf"] = {
			$: query
		}
	}

})();