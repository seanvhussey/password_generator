// Characters put into the combined array if the user wants their password to contain numbers.
var numbers = "0123456789";

// Characters put into the combined array if the user wants their password to contain capital letters.
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXWZ";

// Characters put into the combined array if the user wants their password to contain lowercase letters.
var lowercase = "abcdefghijklmnopqrstuvwxwz";

// Characters put into the combined array if the user wants their password to contain special characters
var characters = "!@#$%&*+=?";

var confirm = true;
var cancel = false;

var array = "";

function user_input() {
  alert("Would you like your password to contain numbers?");
  var number_confirm = confirm("click okay to confirm");
  if (number_confirm === true) {
    array = array + numbers;
  }

  alert("Would you like your password to contain uppercase letters?");
  var uppercase_confirm = confirm("click okay to confirm");
  if (uppercase_confirm === true) {
    array = array + uppercase;
  }

  alert("Would you like your password to contain uppercase letters?");
  var lowercase_confirm = confirm("click okay to confirm");
  if (lowercase_confirm === true) {
    array = array + lowercase;
  }

  alert("Would you like your password to contain uppercase letters?");
  var character_confirm = confirm("click okay to confirm");
  if (character_confirm === true) {
    array = array + characters;
  }
  return array;
}

var array = user_input();
console.log(array);
