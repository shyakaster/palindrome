
module.exports = Phrase;
//Modifies a String native object
String.prototype.reverse = function reverseFunction(){
    //the first alternative preserves emoji characters in a string
    return Array.from(this).reverse().join("");
    //return string.split("").reverse().join("");
}

function Phrase(content){
    this.content = content;
    this.processContent = function processContent(){
        return this.letters().toLowerCase();
    }
    this.palindrome = function palindrome(){
        return this.processContent() === this.processContent().reverse();
    }
    //Return the content without punctuation
    this.letters = function letters(){
        //this is beautiful peace of functional programming
        return Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");
    }
}


