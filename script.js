// Characters put into the combined array if the user wants their password to contain numbers.
var numbers = "0123456789";

// Characters put into the combined array if the user wants their password to contain capital letters.
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXWZ";

// Characters put into the combined array if the user wants their password to contain lowercase letters.
var lowercase = "abcdefghijklmnopqrstuvwxwz";

// Characters put into the combined array if the user wants their password to contain special characters
var characters = "!@#$%&*+=?";

// Empty array to contain selected charsets.
var array = "";

// How long does the user want the password to be.
function user_input() {
  prompt("How long would you like your password to be?");
  var password_length = user_input.value("Please enter a number value.");
  console.log(password_length);
}

// Would the user like numbers included?
function user_input() {
  alert("Would you like your password to contain numbers?");
  var number_confirm = confirm("click okay to confirm.");
  if (number_confirm === true) {
    array = array + numbers;
  }

  //   Would the user like uppercase letters?
  alert("Would you like your password to contain uppercase letters?");
  var uppercase_confirm = confirm("click okay to confirm.");
  if (uppercase_confirm === true) {
    array = array + uppercase;
  }

  //   Would the user like lowercase letters?
  alert("Would you like your password to contain lowercase letters?");
  var lowercase_confirm = confirm("click okay to confirm.");
  if (lowercase_confirm === true) {
    array = array + lowercase;
  }

  //   Would the user like special characters?
  alert("Would you like your password to contain uppercase letters?");
  var character_confirm = confirm("click okay to confirm.");
  if (character_confirm === true) {
    array = array + characters;
  }
  //   Returns the finished dataset.
  return array;
}

var array = user_input();
for (x = 0; x < array(password_length)[Math.random]; x++) {}

function generatePassword() {
  password_length.user_input.value;
}
var whyNotworking = idontknow;
