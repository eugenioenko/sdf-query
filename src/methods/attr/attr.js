/**
* Sets the attribute of each elements in the list or,
* Gets the value of attribute of the first element if no arguments
*
* @param {string} attr Attribute to be set
* @param  {string} value Optional, the new attribute value
*
* @return {mixed} Query object for nesting or value if getter
*
* @example
* // reads the attribute data-date from a clicked button
* sdf.$('button').click(function(){
*   var date = sdf.$(this).attr('data-date');
*   // to do
*   sdf.$(this).attr('data-date', date);
* });
*/
SdfDom.prototype.attr = function(attr, value){
    if(sdf.utils.validateArgTypes(arguments, ["string"])){
        return this.nodes[0].getAttribute(attr);
    } else if(sdf.utils.validateArgTypes(arguments, ["string", "any"])){
        for (var i = 0; i < this.nodes.length; ++i) {
            this.nodes[i].setAttribute(attr, value);
        }
    } else { 
        console.error("'attr' requires attr{string} for getter and value{any} as setter");
    }
    return this;
};