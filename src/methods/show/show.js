/**
* Shows an element on the screen.
* (Restores original display property value)
*
* @return {object} Query object for nesting
*
* @example
* // shows the element
* sdf.$('selector').show();
*/
SdfDom.prototype.show = function(){
    for (var i = 0; i < this.nodes.length; ++i) {
        this.nodes[i].style.removeProperty("display");
    }
    return this;
};