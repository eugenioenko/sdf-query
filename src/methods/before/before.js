/**
* Inserts content before each element of the list.
* If content is a string, 'prepend' parses the specified text as HTML
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
* // inserts a div before the div#first
* sdf.$('div#first').before('<div id="before_first"></div>');
*
* @return {object} Query object for nesting
*/
SdfDom.prototype.before = function(content){
    this.insert('beforebegin', content);
    return this;
};