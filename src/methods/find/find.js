/**
* Returns a list of decendent elements from the selected element.
* @param  {string} selector
*
* @return Query object for nesting and dom modification
*
*/
SdfDom.prototype.find = function(selector){
    if(!this.utils.validateArgTypes(arguments, ["string"])){
        console.error("'find' takes selector{string} as argument");
        return this;
    }
    return s(selector, -1, this.nodes[0]);
};