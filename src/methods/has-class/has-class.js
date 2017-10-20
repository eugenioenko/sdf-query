/**
* Returns true if a class is present in the first element class list
*
* @param  {string} className Name of the class without "."
*
* @return {bool} If the classname is present in the list
*
* @example
* if(s('#element').hasClass('class-name')){
*     // to do
* }
*
* @example
* // checks if element is active on click, does stuff, removes class active.
* s('#element_id').on('click', function(){
*     if(s(this).hasClass('active')){
*         // to do
*         s(this).removeClass('active');
*     }
* });
*/
SdfDom.prototype.hasClass = function(className){
    if(!this.utils.validateArgTypes(arguments, ["string"])){
        throw new Error("'hasClass' takes className{string} as argument");
    }
    className = className.trim();
    return this.nodes[0].classList.contains(className);
};