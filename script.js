let container = document.getElementById("container");
let title = document.getElementById("title");
let titleSpan = document.getElementById("title-span");
let subTitle = document.getElementById("sub-title");

function toggleLightMode() {
  container.classList.toggle("light-mode")
};
let generateBtn = document.getElementById("generate-btn");
let charLimitInput = document.getElementById("char-input");
let symbolsCheck = document.getElementById("symbols-check");
let numbersCheck = document.getElementById("numbers-check");
let leftPw = document.getElementById("left-pw");
let rightPw = document.getElementById("right-pw");

let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

function randomPw() {
  let password = "";
  let limit = charLimitInput.value;
  let allowedChars = [...characters];

  if (symbolsCheck.checked) {
    allowedChars += symbols;
  };

  if (numbersCheck.checked) {
    allowedChars += numbers;
  };

  for (let i = 0; i < limit; i++) {
    let randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  };
  return password;
};

generateBtn.addEventListener("click", function () {
  leftPw.textContent = "";
  rightPw.textContent = "";
  leftPw.textContent = randomPw();
  rightPw.textContent = randomPw();
});

function copyLeft() {
  navigator.clipboard.writeText(leftPw.textContent);
};

function copyRight() {
  navigator.clipboard.writeText(rightPw.textContent);
};