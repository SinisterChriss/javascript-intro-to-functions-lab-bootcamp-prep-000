var uppercase = "HELLO!"
 
uppercase.toUpperCase() === uppercase // true
 
var lowercase = 'hello!'
 
lowercase.toLowerCase() === lowercase // true
 
var mixedCase = 'Hi there!'
 
mixedCase.toLowerCase() === mixedCase // false
 
mixedCase.toUpperCase() === mixedCase // false
function shout(string) {
  return string.toUpperCase()
}
// correct

function whisper(string) {
  return string.toLowerCase()
}
// correct

function logShout(string){
  uppercase = string.toUpperCase()
  string = uppercase;
  console.log(uppercase)
}

function sayHiToGrandma(string) {
  console.log("HELLO!")
}