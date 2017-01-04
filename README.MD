#webpack-entries
Get webpack entries from glob path.


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
