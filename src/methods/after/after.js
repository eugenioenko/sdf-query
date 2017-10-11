/**
* Inserts content after each element of the list.
* If content is a string parses the specified text as HTML
* and inserts the resulting nodes.
*
* @param  {string|node} value String or Node to be inserted
*
* @example
* cheat sheet
* <!-- before -->
* <element>
*   <!-- prepend -->
*   {{element's content}}
*   <!-- append -->
* </element>
* <!-- after -->
*
* @example
* // after a div in the div#first
* sdf.$('li#first').after('<li id="second"></li>');
*
* @return {object} Query object for nesting
*/
SdfDom.prototype.after = function(content){
    this.insert('afterend', content);
    return this;
};