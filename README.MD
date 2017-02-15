#webpack-entries
Get webpack entries from glob path.


## usage:
```javascript
//Only one module for SPA project:
var webpackEntries = entries('src/modules/my-module/index.js');

//Multi modules use glob expression:
var webpackEntries = entries('src/modules/**/index.js');

//Multi modules use array:
var webpackEntries = entries(['src/modules/my-module1/index.js','src/modules/my-module2/index.js']);
```

## windows path join:
```javascript

//the result of path.join:
var path="c:\\eset\\adfo";

//but:display: c:\eset\adfo
console.log(path);

//resolve:
console.log(path.replace(/\\/g,'/'));

//if you use this string for test:
console.log("c:\eset\adfo");

//This will be display：`c:esetadfo`
```
