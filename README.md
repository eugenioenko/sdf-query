# [sdf-query](https://github.com/eugenioenko/sdf-query#readme) *1.0.0*

> Simple javascript library for traversing and modifying html elements


### js/sdf-query.js


#### query(selector, single) 

Query Function

This function enables you to select elements from the DOM and modify their
attributes, classes, values and styles. And  add event handlers.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| selector | `string` `object`  | A string which is gonna be used to query elements or a Node element | &nbsp; |
| single | `boolean`  | If set to True, will limit the result of the query to a single element by using querySelector instead of querySelectorAll. | &nbsp; |




##### Returns


- `object`  Will return an object with a list of elements and the methods for modifying them. The result could be chained and subsequent calls could be
performed



#### on(event, method) 

Adds event listener to the elements in the query list




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| event | `string`  | Type of the event to listen to | &nbsp; |
| method | `function`  | Method to execute on the event | &nbsp; |




##### Returns


- `object`  Query object for nesting



#### each(method) 

Iterates over the list of dom nodes




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| method | `function`  | A function to execute for each node,   "this" is gonna be set to the current iterated element | &nbsp; |




##### Returns


- `object`  Query object for nesting



#### html(value) 

Sets the innerHTML of each elements in the list or
Gets the value of innerHTML of the first element if no arguments




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| value | `string`  | Optional, the new innerHTML value | &nbsp; |




##### Returns


- `mixed`  Query object for nesting or value if getter



#### text(value) 

Sets the textContent of each elements in the list or
Gets the value of textContent of the first element if no arguments




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| value | `string`  | Optional, the new textContent value | &nbsp; |




##### Returns


- `mixed`  Query object for nesting or value if getter



#### attr(attr, value) 

Sets the attribute of each elements in the list or
Gets the value of attribute of the first element if no arguments




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| attr | `string`  | Attribute to be set | &nbsp; |
| value | `string`  | Optional, the new attribute value | &nbsp; |




##### Returns


- `mixed`  Query object for nesting or value if getter



#### value(val) 

Sets the value of each elements in the list or
Gets the value of value of the first element if no arguments




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `string`  | Optional, the new value value | &nbsp; |




##### Returns


- `object`  Query object for nesting



#### append(value) 

Appends a string to each element in the list




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| value | `string`  | String to be apended | &nbsp; |




##### Returns


- `object`  Query object for nesting



#### prepend(value) 

Prepends a string to each element in the list




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| value | `string`  | String to be apended | &nbsp; |




##### Returns


- `object`  Query object for nesting



#### remove() 

Removes each element from the list of dom and itself






##### Returns


- `object`  Query object for nesting




*Documentation generated with [doxdox](https://github.com/neogeek/doxdox).*
