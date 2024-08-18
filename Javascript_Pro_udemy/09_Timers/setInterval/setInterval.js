function startCountdown(duration) {
  let secondsRemaining = duration;
  const h1 = document.getElementById("timer");
  h1.innerText = secondsRemaining;
  secondsRemaining -= 1;
  const intervalId = setInterval(function () {
    h1.innerText = secondsRemaining;
    secondsRemaining -= 1;
    if (secondsRemaining < 0) {
      clearInterval(intervalId);
      h1.innerText = "Time is up!!!";
    }
  }, 1000);
}

startCountdown(20);

// setInterval //

// this runs a function every duration you can see 
// they syntax and a usecase above.
// this could be used for maybe a loading bar or 
// a flashing popup or or something like that.

// clearInterval //

// set interval always generates a unique id. 
//  you can use this id and clearInterval to get rid of this.
//  you need to know what the id is first you can see the usecase above
// you might use this for a modal you want to display or maybe something
// like cookies or a popup box but you could use remove when a button is added.
 
