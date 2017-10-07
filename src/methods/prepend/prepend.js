/**
* Prepends a string to each element in the list
*
* @param  {string} value String to be prepended
*
* @return {object} Query object for nesting
*/
SdfDom.prototype.prepend = function(value){
    if(sdf.utils.validateArgTypes(arguments, ["string"])){
        for (var i = 0; i < this.nodes.length; ++i) {
            this.nodes[i].innerHTML = value + this.nodes[i].innerHTML;
        }
    } else {
        console.error("'prepend' takes string{string} as argument");
    }
    return this;
};