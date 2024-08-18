function smoothScrollToTop() {
  const duration = 1000; // Duration in milliseconds
  const start = window.pageYOffset;
  const end = 0;
  const change = end - start;
  let startTime = null;

  function animateScroll(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;

    const progress = Math.min(timeElapsed / duration, 1);

    window.scrollTo(0, start + change * progress);
    console.log(timeElapsed);
    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  }

  requestAnimationFrame(animateScroll);
}

document
  .querySelector(".back-to-top")
  .addEventListener("click", smoothScrollToTop);

  // 1 second scroll //

// this uses request animation frame which provides the scroll
// this allows you to  find the time of the frame and using logic 
// will let you set a duration to 1 second doesnt matter 
// how far down the page you are. this is good for using animations 
// that take set times. 
//  you also dont need to clear the interval or timeout it just use natural logic
//  based the framerate value check animation returns and the frame rate and you can 
// and compares it to the duration. 
// this is good when you dont know anything users about browser  system or refresh rate
// it helps make animations accross browsers and different enviroments consistent.
