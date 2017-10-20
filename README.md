# [sdf-query](https://github.com/eugenioenko/sdf-query#readme) *0.9.8*

[![Build Status](https://travis-ci.org/eugenioenko/sdf-query.svg?branch=master)](https://travis-ci.org/eugenioenko/sdf-query)

> Simple utility for selecting and modifying DOM elements used by SDF CSS Framework. Lightweight alternative to some escentials of jQuery compatible with modern browser and ie11+

### Live documentation and examples
[Live docs and examples](https://eugenioenko.github.io/sdf-query/docs/index.html)

## Instalation
> npm install sdf-query

Include the script
```
<script src="path_to_js/js/sdf-query.min.js"></script>
```

### js/sdf-query.js


#### s(selector, limit)

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
s('#button_id').on('click', function(){});
```
```javascript
// sets the attribute data-item to all the li with class '.active'
s('li.active').attr('data-item', 'value');
```
```javascript
// removes class .active from all h2 with class '.active' of the page
s('h2.active').removeClass('active');
// removes class .active from 3 of h2 of the page
s('h2.active', 3).removeClass('active');
```
```javascript
// Iterates over all the ul of a page and appends an li and prepends li
s('ul').append('<li>appended</li>').prepend('<li>prepended</li>');
```
```javascript
 // Custom iterator
 s('span').each(function(){
     s(this).attr('data-active', 'false');
 });
 // Chaining
 s('span[data-attr="value"]').prepend('<br>').append('!');
```


##### Returns


- `object`  Which contains the methods for dom manipulation.



#### s(selector).addClass(classList)

Adds classnames to the elements in the node list




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| classList | `string`  | List of classes separated by space or a signle classname | &nbsp; |




##### Examples

```javascript
// adds classes through custom iterator
s('li').each(function(){
  s(this).addClass('class-1 class-2 class-3');
});
```
```javascript
// adds classes through method
s('li').addClass('class-1 class-2 class-3')
```


##### Returns


- `object`  Query object for nesting



#### s(selector).after(value)

Inserts content after each element of the list.
If content is a string parses the specified text as HTML
and inserts the resulting nodes.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| value | `string` `node`  | String or Node to be inserted | &nbsp; |




##### Examples

```javascript
cheat sheet
<!-- before -->
<element>
  <!-- prepend -->
  {{elements content}}
  <!-- append -->
</element>
<!-- after -->
```
```javascript
// after a div in the div#first
s('li#first').after('<li id="second"></li>');
```


##### Returns


- `object`  Query object for nesting



#### s(selector).append(value)

Appends content to each element of the list.
If content is a string parses the specified text as HTML
and inserts the resulting nodes.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| value | `string` `node`  | String or Node to be inserted | &nbsp; |




##### Examples

```javascript
cheat sheet
<!-- before -->
<element>
  <!-- prepend -->
  {{elements content}}
  <!-- append -->
</element>
<!-- after -->
```
```javascript
// appends a div in the div#first
s('div#first_element').append('<div></div>');
```


##### Returns


- `object`  Query object for nesting



#### s(selector).attr(attr, value)

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
s('button').click(function(){
  var date = s(this).attr('data-date');
  // to do
  s(this).attr('data-date', date);
});
```


##### Returns


- `mixed`  Query object for nesting or value if getter



#### s(selector).before(value)

Inserts content before each element of the list.
If content is a string, 'prepend' parses the specified text as HTML
and inserts the resulting nodes.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| value | `string` `node`  | String or Node to be inserted | &nbsp; |




##### Examples

```javascript
cheat sheet
<!-- before -->
<element>
  <!-- prepend -->
  {{elements content}}
  <!-- append -->
</element>
<!-- after -->
```
```javascript
// inserts a div before the div#first
s('div#first').before('<div id="before_first"></div>');
```


##### Returns


- `object`  Query object for nesting



#### s().create(type, html)

Creates an html element to be later appended with append




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| type | `string`  | The type of element: div,li, button, a... | &nbsp; |
| html | `string`  | Inner html of the element | &nbsp; |




##### Examples

```javascript
// creates a node and appends it
s('ul').append(s().create('li', 'list item A'));
```


##### Returns


- `object`  Node element of DOM



#### s(selector).css(attr, value)

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
s('button').click(function(){
  var opacity = s(this).css('opacity');
  // to do
  opacity -= 0.3;
  s(this).css('opacity', opacity);
  s(this).css({opacity: 1, color: 'red'});
});
```


##### Returns


- `mixed`  Query object for nesting or value if getter



#### s(selector).each(method)

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
s('button.active').each(function(){
  var state = s(this).attr('data-state');
  // to do
  s(this).attr('data-state', 'false');
});
```


##### Returns


- `object`  Query object for nesting



#### s(selector).element()

Gets the first element in the selected list of nodes






##### Examples

```javascript
var element = s('div.class-name').element();
element.style.display = 'block';
s(element).css({display: 'block', opacity: '0.5'});
```


##### Returns


- `object`  First element in the list



#### s(selector).first()

Returns the first element in the list
Alias to element()






##### Returns


- `object`  Element



#### s(selector).find(selector)

Returns a list of decendent elements from the selected element.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| selector | `string`  |  | &nbsp; |




##### Returns


-  Query object for nesting and dom modification



#### s(selector).hasClass(className)

Returns true if a class is present in the first element class list




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| className | `string`  | Name of the class without "." | &nbsp; |




##### Examples

```javascript
if(s('#element').hasClass('class-name')){
    // to do
}
```
```javascript
// checks if element is active on click, does stuff, removes class active.
s('#element_id').on('click', function(){
    if(s(this).hasClass('active')){
        // to do
        s(this).removeClass('active');
    }
});
```


##### Returns


- `bool`  If the classname is present in the list



#### s(selector).hide()

Hides an element.
(Sets display property to none)






##### Examples

```javascript
// hides the element
s('selector').hide();
```


##### Returns


- `object`  Query object for nesting



#### s(selector).html(value)

Sets the innerHTML of each element in the list or,
Gets the innerHTML of the first element on the list




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| value | `string`  | Optional, the new innerHTML value | &nbsp; |




##### Examples

```javascript
// sets inner conent of body
s('body').html('<h1>Hello, World!</h1>');
// gets the html of the body
var body = s('body').html();
```


##### Returns


- `object` `string`  Query object for nesting or value if getter



#### s(selector).insert(position, value)

Inserts content to each element of the list.
If content is a string, parses the specified text as HTML
and inserts the resulting nodes.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| position | `string`  | Location relative to the element where to be inserted | &nbsp; |
| value | `string` `node`  | String or Node to be inserted | &nbsp; |




##### Examples

```javascript
cheat sheet
<!-- beforebegin -->
<element>
  <!-- afterbegin -->
  {{elements content}}
  <!-- beforeend -->
</element>
<!-- afterend -->
```
```javascript
// inserts a div before the div#first
s('div#first').insert('<div id="before_first"></div>', 'beforebegin');
```


##### Returns


- `object`  Query object for nesting



#### s(selector).on(event, method)

Adds event listener to the selected elements.
Sets "this" to the currently iterated element.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| event | `string`  | Type of the event to listen to | &nbsp; |
| method | `function`  | Method to execute on the event | &nbsp; |




##### Examples

```javascript
s('selector').on('click', function(){
    //to do
});
s('input[type="text"]').on('change', function(){
    var value = s(this).value();
    alert(value);
});
```


##### Returns


- `object`  Query object for nesting



#### s(selector).prepend(value)

Prepends content to each element of the list.
If content is a string parses the specified text as HTML
and inserts the resulting nodes.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| value | `string` `node`  | String or Node to be inserted | &nbsp; |




##### Examples

```javascript
cheat sheet
<!-- before -->
<element>
  <!-- prepend -->
  {{elements content}}
  <!-- append -->
</element>
<!-- after -->
```
```javascript
// prepends a div in the div#first
s('div#first').prepend('<div id="start_of_first"></div>');
```


##### Returns


- `object`  Query object for nesting



#### s(selector).remove()

Removes each selected element from the page






##### Examples

```javascript
// destroys the body
s('body').remove();
```


##### Returns


- `object`  Query object for nesting



#### s(selector).removeAttr(attr)

Removes an attribute from each element in the list




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| attr | `string`  | Name of the attribute to be removed from the element | &nbsp; |




##### Examples

```javascript
// removes the attribute 'data-active' from all the div with data-active="false"
s('div[data-active="false"]').removeAttr('data-active');
```


##### Returns


- `object`  Query object for nesting



#### s(selector).removeClass(classList)

Removes classes from  elements in the list




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| classList | `string`  | List of classes separated by space | &nbsp; |




##### Examples

```javascript
 // removes the classes ".class-1, .class-2" from the first 10 elements with class .class-0
 s('.class-0').removeclass('class-1 class-2');
```


##### Returns


- `object`  Query object for nesting



#### s(selector).show()

Shows an element on the screen.
(Restores original display property value)






##### Examples

```javascript
// shows the element
s('selector').show();
```


##### Returns


- `object`  Query object for nesting



#### s(selector).text(value)

Sets the textContent of each elements in the list or
Gets the value of textContent of the first element if no arguments




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| value | `string`  | Optional, the new textContent value | &nbsp; |




##### Examples

```javascript
// gets the textContent of the element with id #element
var text = s('#element').text();
// sets the textContent of all the first 3 li of ul#list
s('ul#list>li', 3).text('Hello, World!');
```


##### Returns


- `mixed`  Query object for nesting or value if getter



#### s(selector).value(val)

Sets the value of each elements in the list or
Gets the value of the first element if no arguments




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `string`  | Optional, the new value value | &nbsp; |




##### Examples

```javascript
// gets the value of the input with id #input_1
var val = s('input#input_1').value();
```


##### Returns


- `object`  Query object for nesting




*Documentation generated with [doxdox](https://github.com/neogeek/doxdox).*
