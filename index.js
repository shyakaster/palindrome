//Modifies a String native object
String.prototype.reverse = function reverseFunction(){
    //the first alternative preserves emoji characters in a string
    return Array.from(this).reverse().join("");
    //return string.split("").reverse().join("");
}

function Phrase(content){
    this.content = content;
    this.processContent = function processContent(){
        return this.content.toLowerCase();
    }
    this.palindrome = function palindrome(){
        return this.processContent() === this.processContent().reverse();
    }
}

//Defines a translatedPhrase object
function translatedPhrase(content, translation){
    this.content = content;
    this.translation = translation;

    this.processContent = function processContent(){
        return this.translation.toLowerCase();
    }
} 

translatedPhrase.prototype = new Phrase();

String.prototype.palindrome = function palindrome(){
    return new Phrase(this).palindrome();
}


