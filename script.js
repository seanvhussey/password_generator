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

// Get the password length as a string.
var password_length = prompt("How long would you like your password?", "8-128");
if (isNaN(password_length) || password_length < 8 || password_length > 128) {
  alert("Please select a valid number");
}

// Would the user like numbers included?
function user_input() {
  alert("Would you like your password to contain numbers?");
  var number_confirm = confirm("click okay to confirm.");
  if (number_confirm === true) {
    array = array + numbers;
  }

  // Would the user like uppercase letters?
  alert("Would you like your password to contain uppercase letters?");
  var uppercase_confirm = confirm("click okay to confirm.");
  if (uppercase_confirm === true) {
    array = array + uppercase;
  }

  // Would the user like lowercase letters?
  alert("Would you like your password to contain lowercase letters?");
  var lowercase_confirm = confirm("click okay to confirm.");
  if (lowercase_confirm === true) {
    array = array + lowercase;
  }

  // Would the user like special characters?
  alert("Would you like your password to contain special characters?");
  var character_confirm = confirm("click okay to confirm.");
  if (character_confirm === true) {
    array = array + characters;
  }
  // Returns the finished dataset.
  return array;
}

var array = user_input();

var random_string = "";

// Random generator function.
function password(password_length, array) {
  var random_string = "";
  console.log("it_works");
  for (i = 0; i < password_length; i++) {
    random_string += array.charAt(Math.floor(Math.random() * 72));
  }
  console.log();
  console.log(random_string);
  return random_string;
}
password(password_length, array);
myform.row_password.value = password(password_length, array);
