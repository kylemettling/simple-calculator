let numKeys = document.getElementsByClassName("btn");
let hudDisplay = document.getElementById("hudDisplay");
let equals = document.getElementById("equals");
let clear = document.getElementById("clear");
let del = document.getElementById("delete");
numPadKeys = [];
equals.addEventListener("click", calculateInput);
clear.addEventListener("click", clearHud);
del.addEventListener("click", deleteCharacter);

function getNumCodes() {
  for (i = 96; i < 112; i++) {
    numPadKeys.push(i);
  }
  for (i = 42; i < 58; i++) {
    numPadKeys.push(i);
  }
  return numPadKeys;
}

getNumCodes();

window.onkeydown = function (event) {
  if (numPadKeys.indexOf(event.keyCode) !== -1) {
    hudDisplay.value += event.key;
  } else if (event.keyCode === 8) {
    deleteCharacter();
  } else if (event.keyCode === 13) {
    calculateInput();
  }
};

window.onkeyup = function (event) {
  if (event.keyCode === 27) {
    clearHud();
  }
};

for (let i = 0; i < numKeys.length; i++) {
  numKeys[i].addEventListener("click", grabInput);
  function grabInput() {
    let result = numKeys[i].getAttribute("id");
    console.log(numKeys[i].innerText);
    hudDisplay.value += result;
  }
}
function calculateInput() {
  if (hudDisplay.value === "") {
    alert("Please enter a valid mathematic equation :)");
  } else {
    let finalResult = eval(hudDisplay.value);
    hudDisplay.value = finalResult;
  }
}
function clearHud() {
  hudDisplay.value = "";
}

function deleteCharacter() {
  hudDisplay.value = hudDisplay.value.slice(0, -1);
}
