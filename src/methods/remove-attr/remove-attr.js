/**
* Removes an attribute from each element in the list
*
* @param  {string} attr Name of the attribute to be removed from the element
*
* @return {object} Query object for nesting
*
* @example
* // removes the attribute 'data-active' from all the div with data-active="false"
* s('div[data-active="false"]').removeAttr('data-active');
*/
SdfDom.prototype.removeAttr = function(attrName){
    if(!this.utils.validateArgTypes(arguments, ["any"])){
        console.error("'append' takes string{any} as argument");
        return this;
    }
    for (var i = 0; i < this.nodes.length; ++i) {
        this.nodes[i].removeAttribute(attrName);
    }
    return this;
};