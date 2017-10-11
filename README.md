# [sdf-query](https://github.com/eugenioenko/sdf-query#readme) *0.9.6*

[![Build Status](https://travis-ci.org/eugenioenko/sdf-query.svg?branch=master)](https://travis-ci.org/eugenioenko/sdf-query)

> Simple utility for selecting and modifying DOM elements used by SDF CSS Framework. Lightweight alternative to some escentials of jQuery compatible with modern browser and ie11+

### Live documentation and examples
[Live docs and examples](https://eugenioenko.github.io/sdf-query/docs/index.html)

### Instalation
> npm install sdf-query

Include the script
```
<script src="path_to_js/js/sdf-query.min.js"></script>
```

### js/sdf-query.js


#### sdf.$(selector, limit)

Query Function

This function enables you to select html elements from the DOM and return an object which
lets you modify their attributes, classes, values, styles and add event handlers.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| selector | `string` `object`  | A string which is gonna be used to query elements or a Node element. If selector starts with '#' getElementsById will be used limiting the result to 1. | &nbsp; |
| limit | `number` `optional`  | If set to a number, will limit the results of the query to the amount. If set to one, element will be selected by using querySelector instead of querySelectorAll. | &nbsp; |




##### Examples

```javascript
// adds an event handler for a button of id #button_id
sdf.$('#button_id').on('click', function(){});
```
```javascript
// sets the attribute data-item to all the li with class '.active'
sdf.$('li.active').attr('data-item', 'value');
```
```javascript
// removes class .active from all h2 with class '.active' of the page
sdf.$('h2.active').removeClass('active');
// removes class .active from 3 of h2 of the page
sdf.$('h2.active', 3).removeClass('active');
```
```javascript
// Iterates over all the ul of a page and appends an li and prepends li
sdf.$('ul').append('<li>appended</li>').prepend('<li>prepended</li>');
```
```javascript
 // Custom iterator
 sdf.$('span').each(function(){
     sdf.$(this).attr('data-active', 'false');
 });
 // Chaining
 sdf.$('span[data-attr="value"]').prepend('<br>').append('!');
```


##### Returns


- `object`  Which contains the methods for dom manipulation.



#### sdf.$(selector, limit).append(value)

Appends a string or Node to an element.
If a string representing an html element is passed as argument, apend() will iterate over
every element of the list and add to theirs innerHTML.
If a Node is used as argument, it will append the node only to the first element of the list with appendChild.
Use 'each' if you want to iterate over every element and append a dom object.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| value | `string` `object`  | String or Node to be appended | &nbsp; |




##### Examples

```javascript
// adds a '<i>!</i>' to every link
sdf.$('a').append('<i>!</i>');
// adds a '<span><i>!</i><i>!</i><i>!</i></span>' to the first link
sdf.$('a').append(sdf.$().create('span', '<i>!</i><i>!</i><i>!</i>'));
// same as above but for each element. Works the fastest most of the time;
sdf.$('a').each(function(){
  sdf.$(this).append(sdf.$().create('span', '<i>!</i><i>!</i><i>!</i>'));
});
```


##### Returns


- `object`  Query object for nesting



#### sdf.$(selector, limit).attr(attr, value)

Sets the attribute of each elements in the list or,
Gets the value of attribute of the first element if no arguments




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| attr | `string`  | Attribute to be set | &nbsp; |
| value | `string`  | Optional, the new attribute value | &nbsp; |




##### Examples

```javascript
// reads the attribute data-date from a clicked button
sdf.$('button').click(function(){
  var date = sdf.$(this).attr('data-date');
  // to do
  sdf.$(this).attr('data-date', date);
});
```


##### Returns


- `mixed`  Query object for nesting or value if getter



#### sdf.$(selector, limit).addClass(classList)

Adds classnames to the elements in the node list




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| classList | `string`  | List of classes separated by space or a signle classname | &nbsp; |




##### Examples

```javascript
// adds classes through custom iterator
sdf.$('li').each(function(){
  sdf.$(this).addClass('class-1 class-2 class-3');
});
```
```javascript
// adds classes through method
sdf.$('li').addClass('class-1 class-2 class-3')
```


##### Returns


- `object`  Query object for nesting



#### sdf.$().create(type, html)

Creates an html element to be later appended with append




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| type | `string`  | The type of element: div,li, button, a... | &nbsp; |
| html | `string`  | Inner html of the element | &nbsp; |




##### Examples

```javascript
// creates a node and appends it
sdf.$('ul').append(sdf.$().create('li', 'list item A'));
```


##### Returns


- `object`  Node element of DOM



#### sdf.$(selector, limit).css(attr, value)

Sets the style of each elements in the list or,
Gets the value of style of the first element if no arguments




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| attr | `string`  | Attribute to be set | &nbsp; |
| value | `string`  | Optional, the new style value | &nbsp; |




##### Examples

```javascript
// reads the style data-date from a clicked button
sdf.$('button').click(function(){
  var opacity = sdf.$(this).css('opacity');
  // to do
  opacity -= 0.3;
  sdf.$(this).css('opacity', opacity);
  sdf.$(this).css({opacity: 1, color: 'red'});
});
```


##### Returns


- `mixed`  Query object for nesting or value if getter



#### sdf.$(selector, limit).each(method)

Iterates over every item from the selected element list.
Sets "this" to the currently iterated element.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| method | `function`  | A function to execute for each node | &nbsp; |




##### Examples

```javascript
// Iterates over buttons with class active, gets the attribute data-state,
does something and finally sets data-state to false
sdf.$('button.active').each(function(){
  var state = sdf.$(this).attr('data-state');
  // to do
  sdf.$(this).attr('data-state', 'false');
});
```


##### Returns


- `object`  Query object for nesting



#### sdf.$(selector, limit).element()

Gets the first element in the selected list of nodes






##### Examples

```javascript
var element = sdf.$('div.class-name').element();
element.style.display = 'block';
sdf.$(element).css({display: 'block', opacity: '0.5'});
```


##### Returns


- `object`  First element in the list



#### sdf.$(selector, limit).first()

Returns the first element in the list
Alias to element()






##### Returns


- `object`  Element



#### sdf.$(selector, limit).find(selector)

Returns a list of decendent elements from the selected element.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| selector | `string`  |  | &nbsp; |




##### Returns


-  Query object for nesting and dom modification



#### sdf.$(selector, limit).hasClass(className)

Returns true if a class is present in the first element class list




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| className | `string`  | Name of the class without "." | &nbsp; |




##### Examples

```javascript
if(sdf.$('#element').hasClass('class-name')){
    // to do
}
```
```javascript
// checks if element is active on click, does stuff, removes class active.
sdf.$('#element_id').on('click', function(){
    if(sdf.$(this).hasClass('active')){
        // to do
        sdf.$(this).removeClass('active');
    }
});
```


##### Returns


- `bool`  If the classname is present in the list



#### sdf.$(selector, limit).html(value)

Sets the innerHTML of each element in the list or,
Gets the innerHTML of the first element on the list




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| value | `string`  | Optional, the new innerHTML value | &nbsp; |




##### Examples

```javascript
// sets inner conent of body
sdf.$('body', 1).html('<h1>Hello, World!</h1>');
// gets the html of the body
var body = sdf.$('body', 1).html();
```


##### Returns


- `object` `string`  Query object for nesting or value if getter



#### sdf.$(selector, limit).on(event, method)

Adds event listener to the selected elements.
Sets "this" to the currently iterated element.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| event | `string`  | Type of the event to listen to | &nbsp; |
| method | `function`  | Method to execute on the event | &nbsp; |




##### Examples

```javascript
sdf.$('selector').on('click', function(){
    //to do
});
sdf.$('input[type="text"]').on('change', function(){
    var value = sdf.$(this).value();
    alert(value);
});
```


##### Returns


- `object`  Query object for nesting



#### sdf.$(selector, limit).prepend(value)

Prepends a string to each element in the list




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| value | `string`  | String to be prepended | &nbsp; |




##### Returns


- `object`  Query object for nesting



#### sdf.$(selector, limit).remove()

Removes each selected element from the page






##### Examples

```javascript
// destroys the body
sdf.$('body', 1).remove();
```


##### Returns


- `object`  Query object for nesting



#### sdf.$(selector, limit).removeAttr(attr)

Removes an attribute from each element in the list




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| attr | `string`  | Name of the attribute to be removed from the element | &nbsp; |




##### Examples

```javascript
// removes the attribute 'data-active' from all the div with data-active="false"
sdf.$('div[data-active="false"]').removeAttr('data-active');
```


##### Returns


- `object`  Query object for nesting



#### sdf.$(selector, limit).removeClass(classList)

Removes classes from  elements in the list




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| classList | `string`  | List of classes separated by space | &nbsp; |




##### Examples

```javascript
 // removes the classes ".class-1, .class-2" from the first 10 elements with class .class-0
 sdf.$('.class-0').removeclass('class-1 class-2');
```


##### Returns


- `object`  Query object for nesting



#### sdf.$(selector, limit).value(val)

Sets the value of each elements in the list or
Gets the value of the first element if no arguments




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `string`  | Optional, the new value value | &nbsp; |




##### Examples

```javascript
// gets the value of the input with id #input_1
var val = sdf.$('input#input_1').value();
```


##### Returns


- `object`  Query object for nesting



#### sdf.$(selector, limit).text(value)

Sets the textContent of each elements in the list or
Gets the value of textContent of the first element if no arguments




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| value | `string`  | Optional, the new textContent value | &nbsp; |




##### Examples

```javascript
// gets the textContent of the element with id #element
var text = sdf.$('#element').text();
// sets the textContent of all the first 3 li of ul#list
sdf.$('ul#list>li', 3).text('Hello, World!');
```


##### Returns


- `mixed`  Query object for nesting or value if getter




*Documentation generated with [doxdox](https://github.com/neogeek/doxdox).*
