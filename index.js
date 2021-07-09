module.exports = Phrase;

// Adds `reverse` to all strings.
// String.prototype.reverse = function () {
//   return Array.from(this).reverse().join("");
// };

// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Reverses a string.
  function reverse(string) {
    return Array.from(string).reverse().join("");
  }

  this.processor = function (string) {
    return this.letters(string).toLowerCase();
  };

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  };

  // Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === reverse(this.processedContent());
  };

  this.louder = function louder() {
    return this.content.toUpperCase();
  };

  // Returns the letters in the content.
  // For example:
  // new Phrase("Hello, world!").letters() === "Helloworld"
  this.letters = function letters() {
    return (this.content.match(/[a-z]/gi) || []).join("");
  };
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  };
}

TranslatedPhrase.prototype = new Phrase();
