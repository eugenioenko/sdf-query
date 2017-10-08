/**
* Returns true if a class is present in the first element class list
*
* @param  {string} className Name of the class without "."
*
* @return {bool} If the classname is present in the list
*
* @example
* if(sdf.$('#element').hasClass('class-name')){
*     // to do
* }
*
* @example
* // checks if element is active on click, does stuff, removes class active.
* sdf.$('#element_id').on('click', function(){
*     if(sdf.$(this).hasClass('active')){
*         // to do
*         sdf.$(this).removeClass('active');
*     }
* });
*/
SdfDom.prototype.hasClass = function(className){
    if(!sdf.utils.validateArgTypes(arguments, ["string"])){
        throw new Error("'hasClass' takes className{string} as argument");
    }
    className = className.trim();
    return this.nodes[0].classList.contains(className);
};