const displayArea = document.querySelector("#locationDisplay");
document.querySelector("#getLocation").addEventListener("click", () => {
  if (navigator.geolocation) {
    // this tells us the browser supports the location API
    // getCurrentPosition gets the current position
    // this button will only execute if the user agrees.
    // chrome will save permission if you dont want to share your location
    // error code 1 is returned and get error message "user declinde to share geolocaiton"
    
    navigator.geolocation.getCurrentPosition(displayGeoData, displayError);

    // watchPosition updates whenever a user's position changes
    // navigator.geolocation.watchPosition(displayGeoData, displayError);
  }
});

const displayGeoData = (position) => {
  const { latitude, longitude } = position.coords;
  displayArea.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
};

const displayError = (err) => {
  displayArea.textContent = err.message;
};

// geo location //

// older browsers dont use it, it will be aysncrinous so we need 
// callbacks. we need to ask permission from the users to share their location
