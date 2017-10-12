/**
* Inserts content to each element of the list.
* If content is a string, parses the specified text as HTML
* and inserts the resulting nodes.
*
* @param  {string} position  Location relative to the element where to be inserted
* @param  {string|node} value String or Node to be inserted
*
* @example
* cheat sheet
* <!-- beforebegin -->
* <element>
*   <!-- afterbegin -->
*   {{element's content}}
*   <!-- beforeend -->
* </element>
* <!-- afterend -->
*
* @example
* // inserts a div before the div#first
* sdf.$('div#first').insert('<div id="before_first"></div>', 'beforebegin');
*
* @return {object} Query object for nesting
*/
SdfDom.prototype.insert = function(position, content){
    var insertMethod = "";
    if(sdf.utils.validateArgTypes(arguments, ["string", "string"])){
        insertMethod = "insertAdjacentHTML";
    }
    if(sdf.utils.validateArgTypes(arguments, ["string", "object"]) &&
        content instanceof Node ){
        insertMethod = "insertAdjacentElement";
    }
    if(!insertMethod.length){
        throw new Error("'insert' takes position{string} and content{string|Node} as argument");
    }
    for(var i = 0; i < this.nodes.length; ++i) {
        this.nodes[i][insertMethod](position, content);
    }
    return this;
};