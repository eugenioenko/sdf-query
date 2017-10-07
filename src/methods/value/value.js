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
