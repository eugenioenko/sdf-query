/**
* Sets the innerHTML of each element in the list or,
* Gets the innerHTML of the first element on the list
*
* @param  {string} value Optional, the new innerHTML value
*
* @return {object|string} Query object for nesting or value if getter
*
* @example
* // sets inner conent of body
* s('body').html('<h1>Hello, World!</h1>');
* // gets the html of the body
* var body = s('body').html();
*/
SdfDom.prototype.html = function(value){
	if(arguments.length == 0){
	    return this.nodes[0].innerHTML;
	}
    if(!this.utils.validateArgTypes(arguments, ["any"])){
        throw new Error("'html' takes value {any} as argument or no arguments.");
    }
    for (var i = 0; i < this.nodes.length; ++i) {
        this.nodes[i].innerHTML = value;
    }
    return this;
};