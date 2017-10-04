!function(){void 0===window.sdf&&(window.sdf={$:function(e,t){t=void 0===t?-1:t;var r=[],s={},n="",o=function(e){return 0==e.length},i=function(e){return 0==e.length},l=function(e){if(e.length!=arguments.length-1)return!1;for(var t=0;t<e.length;++t)if("any"===arguments[t+1])e[t]=e[t].toString();else if("str|obj"===arguments[t+1])"string"!=typeof e[t]&&"object"!=typeof e[t]&&(e[t]=e[t].toString());else if(typeof e[t]!==arguments[t+1])return!1;return!0},h=function(e){for(var t=e.split(" "),r=0;r<t.length;++r)t[r]=t[r].replace(" ","");return t},a=function(){n="getElementById",(s=document.getElementById(e.substring(1)))&&r.push(s)},u=function(){n="querySelector",(s=document.querySelector(e))&&r.push(s)},c=function(){n="querySelectorAll";var s=document.querySelectorAll(e);t=-1==t?s.length:t>s.length?s.length:t;for(var o=0;o<t;++o)r.push(s[o])};return arguments.length?"string"==typeof e?"#"==(e=e.trim()).charAt(0)?a():1==t?u():c():"object"==typeof e&&e instanceof Node?(n="element",r.push(e),e=!1):(n="error",console.error(e+" is not a string, 'query' requires a string as selector"),e=!1):(n="null",e=!1),{selector:e,nodes:r,length:r.length,method:n,on:function(e,t){if(o(this.nodes))return console.error("No elements with selector: "+this.selector+" for on method"),this;if(!l(arguments,"string","function"))throw new Error("'on' requires event {string} and method {function}");for(var r=0;r<this.nodes.length;++r)this.nodes[r].addEventListener(e,t);return this},each:function(e){if(o(this.nodes))return console.error("No elements with selector: "+this.selector+" for each"),this;if(l(arguments,"function"))for(var t=0;t<this.nodes.length;++t)e.call(this.nodes[t]);else console.error(e+" is not a function, 'each' requires a function as argument");return this},html:function(e){if(o(this.nodes))return console.error("No elements with selector: "+this.selector+" for html"),this;if(i(arguments))return this.nodes[0].innerHTML;if(l(arguments,"any"))for(var t=0;t<this.nodes.length;++t)this.nodes[t].innerHTML=e;else console.error("'html' takes value {any} as argument or no arguments.");return this},text:function(e){if(o(this.nodes))return console.error("No elements with selector: "+this.selector+" for text"),this;if(i(arguments))return this.nodes[0].textContent;if(l(arguments,"any"))for(var t=0;t<this.nodes.length;++t)this.nodes[t].textContent=e;else console.error("'text' takes value {any} as argument or no arguments.");return this},attr:function(e,t){if(o(this.nodes))return console.error("No elements with selector: "+this.selector+" for text"),this;if(i(arguments))return console.error("'attr' requires at least one argument as attribute{string}"),this;if(1==arguments.length)return l(arguments,"string")?this.nodes[0].getAttribute(e):(console.error("'attr' takes attribute {string} as argument for getter"),this);if(l(arguments,"string","any"))for(var r=0;r<this.nodes.length;++r)this.nodes[r].setAttribute(e,t);else console.error("'attr' takes two attribute {string}, value{any} as setter");return this},css:function(e,t){var r=0;if(o(this.nodes))return console.error("No elements with selector: "+this.selector+" for text"),this;if(i(arguments))return console.error("'css' requires at least one argument as style getter {string} or {object} as setter"),this;if(1==arguments.length){if(l(arguments,"string"))return this.nodes[0].style[e];if(l(arguments,"object")){for(t=e,r=0;r<this.nodes.length;++r)for(var s in t)t.hasOwnProperty(s)&&(this.nodes[r].style[s]=t[s]);return this}return console.error("'css' takes style {string} as argument for getter or object as setter"),this}if(!l(arguments,"string","str|obj"))return console.error("'css' takes value {string|object} as argument"),this;for(r=0;r<this.nodes.length;++r)this.nodes[r].style[e]=t;return this},removeAttr:function(e){if(o(this.nodes))return console.error("No elements with selector: "+this.selector+" for append"),this;if(!l(arguments,"any"))return console.error("'append' takes string{any} as argument"),this;for(var t=0;t<this.nodes.length;++t)this.nodes[t].removeAttribute(e);return this},value:function(e){if(o(this.nodes))return console.error("No inputs with selector: "+this.selector+" for value"),this;if(i(arguments))return this.nodes[0].value;if(l(arguments,"any"))for(var t=0;t<this.nodes.length;++t)this.nodes[t].value=e;else console.error("'value' takes value {string} as argument or no arguments.");return this},create:function(e,t){if(l(arguments,"string","string")){var r=document.createElement(e);return r.innerHTML=t,r}return console.error("'create' takes type{string} and html{string} as argument"),this},element:function(){return o(this.nodes)?(console.error("No elements with selector: "+this.selector+" for value"),this):this.nodes[0]},first:function(){return this.element()},append:function(e){if(o(this.nodes))return console.error("No elements with selector: "+this.selector+" for append"),this;if(l(arguments,"str|obj"))if("string"==typeof e)for(var t=0;t<this.nodes.length;++t)this.nodes[t].innerHTML+=e;else this.nodes[0].appendChild(e);else console.error("'append' takes value{string|node} as argument");return this},prepend:function(e){if(o(this.nodes))return console.error("No elements with selector: "+this.selector+" for prepend"),this;if(l(arguments,"string"))for(var t=0;t<this.nodes.length;++t)this.nodes[t].innerHTML=e+this.nodes[t].innerHTML;else console.error("'prepend' takes string{string} as argument");return this},addClass:function(e){if(o(this.nodes))return console.error("No elements with selector: "+this.selector+" for addClass"),this;if(!l(arguments,"string"))return console.error("'addClass' takes classList{string} as argument"),this;for(var t=h(e),r=0;r<this.nodes.length;++r)for(var s=0;s<t.length;++s)""!=t[s]&&this.nodes[r].classList.add(t[s]);return this},removeClass:function(e){if(o(this.nodes))return console.error("No elements with selector: "+this.selector+" for removeClass"),this;if(!l(arguments,"string"))return console.error("'removeClass' takes classList{string} as argument"),this;for(var t=h(e),r=0;r<this.nodes.length;++r)for(var s=0;s<t.length;++s)""!=t[s]&&this.nodes[r].classList.remove(t[s]);return this},remove:function(){for(var e=0;e<this.nodes.length;++e)this.nodes[e].parentNode.removeChild(this.nodes[e]);return this.nodes=[],this.selector=null,this.length=0,this}}}})}();