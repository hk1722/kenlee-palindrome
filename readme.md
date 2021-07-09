This is a sample NPM module created in Learn Enough JavaScript to Be Dangerous by Ken Lee.

The module can be used as follows:

```JavaScript
$ npm install --global kenlee-palindrome
$ vim test.js
let Phrase = require("kenlee-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
```