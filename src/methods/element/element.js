/**
* Gets the first element in the selected list of nodes
*
* @return {object} First element in the list
*
* @example
* var element = s('div.class-name').element();
* element.style.display = 'block';
* s(element).css({display: 'block', opacity: '0.5'});
*/

SdfDom.prototype.element = function(){
    return this.nodes[0];
};

/**
* Returns the first element in the list
* Alias to element()
* @return {object} Element
*/
SdfDom.prototype.first = function(){
    return this.element();
};