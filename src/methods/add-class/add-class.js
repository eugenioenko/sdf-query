/**
* Adds classnames to the elements in the node list
*
* @param  {string} classList List of classes separated by space or a signle classname
*
* @return {object} Query object for nesting
*
* @example
* // adds classes through custom iterator
* s('li').each(function(){
*   s(this).addClass('class-1 class-2 class-3');
* });
*
* @example
* // adds classes through method
* s('li').addClass('class-1 class-2 class-3')
*/
SdfDom.prototype.addClass = function(classList){
    if(!this.utils.validateArgTypes(arguments, ["string"])){
        throw new Error("'addClass' takes classList{string} as argument");
    }

    var classes = this.utils.createClassList(classList);
    for (var i = 0; i < this.nodes.length; ++i) {
        for(var j = 0; j < classes.length; ++j){
            if(classes[j] != ''){
                this.nodes[i].classList.add(classes[j]);
            }
        }
    }
    return this;
};