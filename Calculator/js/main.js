let numKeys = document.getElementsByClassName("btn");
let hudDisplay = document.getElementById("hudDisplay");
let equals = document.getElementById("equals");
let clear = document.getElementById("clear");
let del = document.getElementById("delete");

equals.addEventListener("click", calculateInput);
clear.addEventListener("click", clearHud);
del.addEventListener("click", deleteCharacter);

for (let i = 0; i < numKeys.length; i++) {
  numKeys[i].addEventListener("click", grabInput);
  function grabInput() {
    // let result = numKeys[i].innerText;
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
