/**
* Removes classes from  elements in the list
*
* @param  {string} classList List of classes separated by space
*
* @return {object} Query object for nesting
*
* @example
*  // removes the classes ".class-1, .class-2" from the first 10 elements with class .class-0
*  s('.class-0').removeclass('class-1 class-2');
*/
SdfDom.prototype.removeClass = function(classList){
    if(!this.utils.validateArgTypes(arguments, ["string"])){
        console.error("'removeClass' takes classList{string} as argument");
        return this;
    }
    var classes = this.utils.createClassList(classList);
    for (var i = 0; i < this.nodes.length; ++i) {
        for(var j = 0; j < classes.length; ++j){
            if(classes[j] != ''){
                this.nodes[i].classList.remove(classes[j]);
            }
        }
    }
    return this;
};