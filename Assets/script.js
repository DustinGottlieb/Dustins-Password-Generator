//Start of Code
var generateBtn = document.querySelector("#generate");
var enter;
var confirmspecial;
var confirmnumbers;
var confirmUpper;
var confirmLower;

special = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
letters = "abcdefghijklmnopqrstuvwxyz".split("");
space = [];
var choices;

var toUpper = function (x) {
  return x.toUpperCase();
};

lettersU = letters.map(toUpper);

generateBtn.addEventListener("click", function () {
  ps = writePassword();
});

function writePassword() {
  enter = parseInt(prompt("How many characters would you like?  Choose between 8 and 128:"));
  if (!enter) {
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("Choose between 8 and 128"));

  } else {
    confirmspecial = confirm("Do you want your password to contain special characters?");
    confirmnumbers = confirm("Do you want your password to contain numbers?");
    confirmUpper = confirm("Do you want your password to contain Uppercase letters?");
    confirmLower = confirm("Do you want your password to contain Lowercase letters?");
  }

  if (!confirmspecial && !confirmnumbers && !confirmUpper && !confirmLower) {
    choices = alert("Please choose a password length between 8 and 128");
  }

  else if (confirmspecial && confirmnumbers && confirmUpper && confirmLower) {
    choices = special.concat(numbers, letters, lettersU);
  }
  else if (confirmspecial && confirmnumbers && confirmUpper) {
    choices = special.concat(numbers, lettersU);
  }
  else if (confirmspecial && confirmnumbers && confirmLower) {
    choices = special.concat(numbers, letters);
  }
  else if (confirmnumbers && confirmLower && confirmUpper) {
    choices = numbers.concat(letters, lettersU);
  }

  else if (confirmspecial && confirmnumbers) {
    choices = special.concat(numbers);

  } else if (confirmspecial && confirmLower) {
    choices = special.concat(letters);

  } else if (confirmspecial && confirmUpper) {
    choices = special.concat(lettersU);
  }
  else if (confirmLower && confirmnumbers) {
    choices = letters.concat(numbers);
  } else if (confirmLower && confirmnumbers) {
    choices = letters.concat(numbers);
  }
  else if (confirmLower && confirmUpper) {
    choices = letters.concat(lettersU);
  }
  else if (confirmnumbers && confirmUpper) {
    choices = numbers.concat(lettersU);
  }
  else if (confirmspecial) {
    choices = special;
  }
  else if (confirmnumbers) {
    choices = numbers;
  }
  else if (confirmLower) {
    choices = letters;
  }
  else if (confirmUpper) {
    choices = space.concat(lettersU);
  };

  var password = [];
  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }

  var ps = password.join("");
  UserInput(ps);
  return ps;
}

function UserInput(ps) {
  document.getElementById("password").textContent = ps;
}
