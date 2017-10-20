/**
* Appends content to each element of the list.
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
*   {{elements content}}
*   <!-- append -->
* </element>
* <!-- after -->
*
* @example
* // appends a div in the div#first
* s('div#first_element').append('<div></div>');
*
* @return {object} Query object for nesting
*/
SdfDom.prototype.append = function(content){
    this.insert('beforeend', content);
    return this;
};