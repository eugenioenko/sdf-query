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
* sdf.$('body', 1).html('<h1>Hello, World!</h1>');
* // gets the html of the body
* var body = sdf.$('body', 1).html();
*/
SdfDom.prototype.html = function(value){
	if(arguments.length == 0){
	    return this.nodes[0].innerHTML;
	}
    if(sdf.utils.validateArgTypes(arguments, ["any"])){
        for (var i = 0; i < this.nodes.length; ++i) {
            this.nodes[i].innerHTML = value;
        }
    } else {
        console.error("'html' takes value {any} as argument or no arguments.");
    }
    return this;
};