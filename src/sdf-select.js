/**
 * SDF Query
 * Simple utility for selecting and modifying DOM elements used by SDF CSS Framework.
 * Lightweight alternative to some escentials of jQuery compatible with modern browser and ie11+
 * @package SDF
 * @author  eugenioenko
 * @license http://opensource.org/licenses/MIT  MIT License
 * @tutorial https://eugenioenko.github.io/sdf-query/docs/index.html
 * @link    https://github.com/eugenioenko/sdf-css
 * @version 0.9.9
 */

//"use strict";

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
 * s('#button_id').on('click', function(){});
 *
 * @example
 * // Iterates over all the ul of a page and appends an li and prepends li
 * s('ul').append('<li>appended</li>').prepend('<li>prepended</li>');
 *
 * @example
 *  // Custom iterator
 *  s('span').each(function(){
 *      s(this).attr('data-active', 'false');
 *  });
 *  // Chaining
 *  s('span[data-attr="value"]').prepend('<br>').append('!');
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
            elements = nodes;
            return;
        }
        limit = limit > nodes.length ? nodes.length : limit;
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
    var utils = {
        validateArgTypes: function(args, types){
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
        },
        createClassList: function(classList){
            var classes = classList.split(' ');
            for (var i = 0; i < classes.length; ++i){
                classes[i] = classes[i].replace(' ', '');
            }
            return classes;
        }
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
    return new SdfDom(selector, elements, elements.length, method, utils);
}

window.s =  SdfSelect;
