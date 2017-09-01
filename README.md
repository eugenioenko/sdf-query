# [sdf-query](https://github.com/eugenioenko/sdf-query#readme) *1.0.0*

> Simple utility for selecting and modifying DOM elements used by SDF CSS Framework


### js/sdf-query.js


#### sdf.$(selector, single)

Query Function

This function enables you to select html elements from the DOM and return an object which
lets you modify their attributes, classes, values, styles and  add event handlers.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| selector | `string` `object`  | A string which is gonna be used to query elements or a Node element | &nbsp; |
| single | `boolean` `optional`  | If set to True, will limit the result of the query to a single element by using querySelector instead of querySelectorAll. | &nbsp; |




##### Examples

```javascript
// adds an event handler for a button of id #button_id
sdf.$('#button_id', true).on('click', function(){});
```
```javascript
// sets the attribute data-item to all the li of a page
sdf.$('li').attr('data-item', 'value');
```
```javascript
// removes class .active from all h2 of the page
sdf.$('h2.active').removeClass('active');
```
```javascript
// Iterates over all the ul of a page and appends an li and prepends li
sdf.$('ul').append('<li>appended</li>').prepend('<li>prepended</li>');
```
```javascript
 // Custom iterator
 sdf.$('span').each(function(){ sdf.$(this).attr('data-active', 'false')});
 // Chaining
 sdf.$('span[data-attr="value"]').prepend('<br>').append('!');
```


##### Returns


- `object`  Which contains the methods for dom manipulation.



#### sdf.$('selector').on(event, method)

Adds event listener to the selected elements
this points to the current iterated element




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| event | `string`  | Type of the event to listen to | &nbsp; |
| method | `function`  | Method to execute on the event | &nbsp; |




##### Examples

```javascript
sdf.$('selector').on('click', function(){ //to do });
```


##### Returns


- `object`  Query object for nesting



#### sdf.$('selector').each(method)

Iterates over the list of  nodes and passes the iterated element
as this to the function set in the argument




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| method | `function`  | A function to execute for each node,   "this" is gonna be set to the current iterated element | &nbsp; |




##### Examples

```javascript
// Iterates over buttons with class active
sdf.$('button.active').each(function(){
  sdf.$(this).attr('data-active', false);
});
```


##### Returns


- `object`  Query object for nesting



#### sdf.$('selector').sdf.$('selector').sdf.$('selector').sdf.$('selector').sdf.$('selector').html(value)

Sets the innerHTML of each elements in the list or
Gets the value of innerHTML of the first element if no arguments




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| value | `string`  | Optional, the new innerHTML value | &nbsp; |




##### Examples

```javascript
// sets inner conent of body
sdf.$('body', true).html('<h1>Hello, World!</h1>');
```


##### Returns


- `object` `string`  Query object for nesting or value if getter



#### sdf.$('selector').sdf.$('selector').sdf.$('selector').sdf.$('selector').text(value)

Sets the textContent of each elements in the list or
Gets the value of textContent of the first element if no arguments




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| value | `string`  | Optional, the new textContent value | &nbsp; |




##### Returns


- `mixed`  Query object for nesting or value if getter



#### sdf.$('selector').sdf.$('selector').sdf.$('selector').attr(attr, value)

Sets the attribute of each elements in the list or
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



#### sdf.$('selector').sdf.$('selector').removeAttr(attr)

Removes an attribute from each element in the list




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| attr | `string`  | Name of the attribute to be removed from the element | &nbsp; |




##### Returns


- `object`  Query object for nesting



#### sdf.$('selector').value(val)

Sets the value of each elements in the list or
Gets the value of value of the first element if no arguments




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `string`  | Optional, the new value value | &nbsp; |




##### Returns


- `object`  Query object for nesting



#### sdf.$('selector').sdf.$('selector').sdf.$('selector').create(type, html)

Creates a html element to be later appended with append




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



#### sdf.$('selector').sdf.$('selector').append(value)

Appends a string or Node to an element
If a string representing an html element is used, the function will iterate over
every element of the list from the selector. The append is gonna be done with innerHTML.
if a Node is used as argument, it will append it only to the first element of the list
with appendChild. Use 'each' if you want to iterate over every element




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



#### sdf.$('selector').prepend(value)

Prepends a string to each element in the list




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| value | `string`  | String to be prepended | &nbsp; |




##### Returns


- `object`  Query object for nesting



#### sdf.$('selector').sdf.$('selector').addClass(classList)

Adds class to elements in the list




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| classList | `string`  | List of classes separated by space | &nbsp; |




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



#### sdf.$('selector').removeClass(classList)

Removes classes from  elements in the list




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| classList | `string`  | List of classes separated by space | &nbsp; |




##### Returns


- `object`  Query object for nesting



#### remove()

Removes each element from the page






##### Examples

```javascript
// destroys the body
sdf.$('body', true).remove();
```
