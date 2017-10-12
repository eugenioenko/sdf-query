/**
* Prepends content to each element of the list.
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
* // prepends a div in the div#first
* sdf.$('div#first').prepend('<div id="start_of_first"></div>');
*
* @return {object} Query object for nesting
*/
SdfDom.prototype.prepend = function(content){
    this.insert('afterbegin', content);
    return this;
};