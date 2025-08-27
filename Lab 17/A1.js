const path = require("path");

console.log('/user/WT/Labs/Lab 14/A1.js');

//base Name
console.log(path.basename('/user/WT/Labs/Lab 14/A1.js'));

//base name without extation
console.log(path.basename('/user/WT/Labs/Lab 14/A1.js', '.js'));

//directory
console.log(path.dirname('/user/WT/Labs/Lab 14/A1.js'));

//extantion name
console.log(path.extname('/user/WT/Labs/Lab 14/A1.js'))

//path join
console.log(path.join('/user', '/Web Tech', '/labs', '/a1.js'));

//normalize
console.log(path.normalize('user/WT//abs/../erg'));

//resolve
console.log(path.resolve('user', 'WT'));

//relative
console.log(path.relative('/WT/labs','WT/labs'))
