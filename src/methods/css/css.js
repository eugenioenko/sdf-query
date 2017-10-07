/**
* Sets the style of each elements in the list or,
* Gets the value of style of the first element if no arguments
*
* @param {string} attr Attribute to be set
* @param  {string} value Optional, the new style value
*
* @return {mixed} Query object for nesting or value if getter
*
* @example
* // reads the style data-date from a clicked button
* sdf.$('button').click(function(){
*   var opacity = sdf.$(this).css('opacity');
*   // to do
*   opacity -= 0.3;
*   sdf.$(this).css('opacity', opacity);
*   sdf.$(this).css({opacity: 1, color: 'red'});
* });
*/
SdfDom.prototype.css = function(style, value){
    var i = 0;
    if(sdf.utils.validateArgTypes(arguments, ["string"])){
        // getter
         return this.nodes[0].style[style];
    } else if(sdf.utils.validateArgTypes(arguments, ["object"])){
        value = style;
        // setter with object param
        for (i = 0; i < this.nodes.length; ++i) {
            for(var key in value){
                if(!value.hasOwnProperty(key)) continue;
                this.nodes[i].style[key] = value[key];
            }
        }
        return this;
    } else if(sdf.utils.validateArgTypes(arguments, ["string", "any"])){
        for (i = 0; i < this.nodes.length; ++i) {
            this.nodes[i].style[style] = value;
        }
    } else {
        throw new Error("'css' takes style{string} and value{string|object} as arguments");
    }

    return this;
};