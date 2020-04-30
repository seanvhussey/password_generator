function create_password(length)
var numbers = "0123456789";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXWZ";
var lowercase = "abcdefghijklmnopqrstuvwxwz";
var characters = "!@#$%&*+=?";

var options = [numbers, uppercase, lowercase, characters]
var array = ""
var generated = ""
currentoption = [Math.random() * options.length]

console.log(characters);