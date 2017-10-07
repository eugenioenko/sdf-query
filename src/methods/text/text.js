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