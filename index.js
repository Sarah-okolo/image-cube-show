const cube = document.getElementById("cube");
const leftButton = document.getElementById("back-icon");
const rightButton = document.getElementById("forward-icon");
const cubeSides = document.querySelectorAll(".side-img");

let imagesFilePath = [
  "https://source.unsplash.com/500x500?car",
  "https://source.unsplash.com/500x500?lake",
  "https://source.unsplash.com/500x500?man",
  "https://source.unsplash.com/500x500?dog",
  "https://source.unsplash.com/500x500?pond",
  "https://source.unsplash.com/500x500?city",
  "https://source.unsplash.com/500x500?trees",
  "https://source.unsplash.com/500x500?volcano",
  "https://source.unsplash.com/500x500?ice",
  "https://source.unsplash.com/500x500?cat",
  "https://source.unsplash.com/500x500?flowers",
  "https://source.unsplash.com/500x500?koala",
  "https://source.unsplash.com/500x500?bird",
  "https://source.unsplash.com/500x500?girl",
  "https://source.unsplash.com/500x500?valley"
];

let imgtag = 0;
let srcIndex = 4;
let intervalID;
let isAnimating = true;

function rotateForwards() {
  clearInterval(intervalID); // Clear previous interval
  intervalID = setInterval(() => {
    cubeSides[imgtag].src = imagesFilePath[srcIndex];
    imgtag = (imgtag + 1) % cubeSides.length;
    srcIndex = (srcIndex + 1) % imagesFilePath.length;
  }, 7500);
}
rotateForwards();

function rotateBackwards() {
  clearInterval(intervalID); // Clear previous interval
  intervalID = setInterval(() => {
    imgtag = (imgtag - 1 + cubeSides.length) % cubeSides.length;
    srcIndex = (srcIndex - 1 + imagesFilePath.length) % imagesFilePath.length;
    cubeSides[imgtag].src = imagesFilePath[srcIndex];
  }, 7500);
}

leftButton.onclick = () => {
  cube.style.animation = "turnLeft 30s linear infinite";
  rotateBackwards();
};

rightButton.onclick = () => {
  cube.style.animation = "turnRight 30s linear infinite";
  rotateForwards();
};

cube.onclick = (e) => {
  if (isAnimating) {
    // If animation is running, stop it gradually
    clearInterval(intervalID);
    cube.style.animationPlayState = "paused";
    isAnimating = false;
  } else {
    // If animation is paused, resume it
    rotateForwards();
    cube.style.animationPlayState = "running";
    isAnimating = true;
  }
};
