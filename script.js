// Asks the user how long they would like their password to be.
function create_password(length)
// Characters put into the combined array if the user wants their password to contain numbers.
var numbers = "0123456789";
// Characters put into the combined array if the user wants their password to contain capital letters.
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXWZ";
// Characters put into the combined array if the user wants their password to contain lowercase letters.
var lowercase = "abcdefghijklmnopqrstuvwxwz";
// Characters put into the combined array if the user wants their password to contain special characters
var characters = "!@#$%&*+=?";

var options = [numbers, uppercase, lowercase, characters]
var array = ""
var generated = ""
for (var x = 0; x < length; x++)


console.log(characters);