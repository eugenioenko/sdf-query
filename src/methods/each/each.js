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
* s('button.active').each(function(){
*   var state = s(this).attr('data-state');
*   // to do
*   s(this).attr('data-state', 'false');
* });
*/
SdfDom.prototype.each = function(method){
    if(this.utils.validateArgTypes(arguments, ["function"])){
        for (var i = 0; i < this.nodes.length; ++i) {
            method.call(this.nodes[i]);
        }
    } else {
        throw new Error(method + " is not a function, 'each' requires a function as argument");
    }
    return this;
};