/**
* Appends a string or Node to an element.
* If a string representing an html element is passed as argument, apend() will iterate over
* every element of the list and add to theirs innerHTML.
* If a Node is used as argument, it will append the node only to the first element of the list with appendChild.
* Use 'each' if you want to iterate over every element and append a dom object.
*
* @param  {string|object} value String or Node to be appended
*
* @return {object} Query object for nesting
*
* @example
* // adds a '<i>!</i>' to every link
* sdf.$('a').append('<i>!</i>');
* // adds a '<span><i>!</i><i>!</i><i>!</i></span>' to the first link
* sdf.$('a').append(sdf.$().create('span', '<i>!</i><i>!</i><i>!</i>'));
* // same as above but for each element. Works the fastest most of the time;
* sdf.$('a').each(function(){
*   sdf.$(this).append(sdf.$().create('span', '<i>!</i><i>!</i><i>!</i>'));
* });
*/
SdfDom.prototype.append = function(value){
    if(sdf.utils.validateArgTypes(arguments, ["string"])){
        for (var i = 0; i < this.nodes.length; ++i) {
            this.nodes[i].innerHTML += value;
        }
    } else if(sdf.utils.validateArgTypes(arguments, ["object"]) && value instanceof Node){
        this.nodes[0].appendChild(value);
    } else {
        console.error("'append' takes value{string|node} as argument");
    }
    return this;
};