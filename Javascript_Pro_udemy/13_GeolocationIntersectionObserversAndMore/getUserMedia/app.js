document.querySelector("#startStream").addEventListener("click", async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
    });
    const videoElement = document.querySelector("#videoElement");
    videoElement.srcObject = stream;
  } catch (err) {
    console.log(err);
    document.querySelector("#errText").textContent = err.message;
  }
});

// navigator.mediaDevices
//   .enumerateDevices()
//   .then((devices) => {
//     console.log(devices);
//   })
//   .catch((e) => console.log(e));

// this returns a list of different devices if the user has it 
// you can loop over these and allow the users to select and swap over them 
// you can use the device id as a constraint this allows the user to toggle 
// between different microphones and videos front and back camera for example



// get Media API //

// allows access to video and microphone if the 
// user grants permession.
// captures the camera microphone data 
// turns it into a mediastream object
// this is async and promisified. 
// this means you can await this. 
// returns a promise you specifiy what your asking for 
//  video or audio
// if it is declined you get an error and you have to 
// handle that. 
