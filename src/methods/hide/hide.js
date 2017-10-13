/**
* Hides an element.
* (Sets display property to none)
*
* @return {object} Query object for nesting
*
* @example
* // hides the element
* sdf.$('selector').hide();
*/
SdfDom.prototype.hide = function(){
    for (var i = 0; i < this.nodes.length; ++i) {
        this.nodes[i].style.display = "none";
    }
    return this;
};