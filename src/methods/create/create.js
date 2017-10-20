/**
* Creates an html element to be later appended with append
*
* @param  {string} type The type of element: div,li, button, a...
* @param  {string} html Inner html of the element
*
* @return {object}      Node element of DOM
*
* @example
* // creates a node and appends it
* s('ul').append(s().create('li', 'list item A'));
*/
SdfDom.prototype.create = function(tag, html){
	if(typeof tag === "string"){
		var element = document.createElement(tag);
		if(typeof html !== "undefined"){
			element.innerHTML = html;
		}
		return element;
	} else {
		console.warn("'create' takes tag{string} and html{string|optional} as argument");
		return this;
	}

};