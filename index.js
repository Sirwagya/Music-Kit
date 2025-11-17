let drums = document.querySelectorAll(".drum");
let numberOfButtons = drums.length;

for (let i = 0; i < numberOfButtons; i++) {
  drums[i].addEventListener("click", function () {
    let buttonInnerHtml = this.innerHTML.trim().toLowerCase();
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

document.addEventListener("keydown", function (event) {
  const key = (event.key || "").toLowerCase();
  makeSound(key);
  buttonAnimation(key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("./sound/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("./sound/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("./sound/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("./sound/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("./sound/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("./sound/crash.mp3");
      crash.play();
      break;
    case "l":
      let kick = new Audio("./sound/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log("key pressed", key);
  }
}

function buttonAnimation(key) {
  let activeButton = document.querySelector("." + key);
  if (!activeButton) return;
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);

}