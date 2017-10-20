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
* s('selector').on('click', function(){
*     //to do
* });
* s('input[type="text"]').on('change', function(){
*     var value = s(this).value();
*     alert(value);
* });
*/
SdfDom.prototype.on = function(event, method){
    if(this.utils.validateArgTypes(arguments, ["string", "function"])){
        // adding event listeners
        for (var i = 0; i < this.nodes.length; ++i) {
            this.nodes[i].addEventListener(event, method);
        }
    } else {
        throw new Error("'on' requires event {string} and method {function}");
    }
    return this;
};