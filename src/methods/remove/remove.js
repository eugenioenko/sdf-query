/**
* Removes each selected element from the page
*
* @return {object} Query object for nesting
*
* @example
* // destroys the body
* s('body').remove();
*/
SdfDom.prototype.remove = function(){
    for (var i = 0; i < this.nodes.length; ++i) {
        this.nodes[i].parentNode.removeChild(this.nodes[i]);
    }
    this.nodes = [];
    this.selector = null;
    this.length = 0;
    return this;
};