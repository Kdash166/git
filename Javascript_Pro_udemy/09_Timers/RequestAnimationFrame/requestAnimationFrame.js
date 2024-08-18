const boxInterval = document.getElementById("boxInterval");
const boxAnimationFrame = document.getElementById("boxAnimationFrame");

let intervalAngle = 0;
let animationFrameAngle = 0;

function animateWithInterval() {
  boxInterval.style.transform = "rotate(" + intervalAngle + "deg)";
  intervalAngle += 2;
}

let previousTime;
function animateWithAnimationFrame(currentTime) {
  console.log(currentTime - previousTime);
  previousTime = currentTime;
  boxAnimationFrame.style.transform = "rotate(" + animationFrameAngle + "deg)";
  animationFrameAngle += 2;
  requestAnimationFrame(animateWithAnimationFrame);

  // this helps determine the framerate. 
}

// Start the animations
setInterval(animateWithInterval, 16); // 60 FPS (approximately)

requestAnimationFrame(animateWithAnimationFrame);
// this runs the function when it is the correct time.
// you dont provide the time it provides the time it lets the browser decide 
// due to refresh rate browser system and other information. 
// request animation provides one argument which is the framerate essentially

// this makes sure that animations perform better.