const context = new AudioContext();
const slider = document.querySelector("#freqSlider");
const playBtn = document.querySelector("#playBtn");
const stopBtn = document.querySelector("#stopBtn");
const freqLabel = document.querySelector("#freqLabel");

let oscillator = null;
playBtn.addEventListener("click", () => {
  oscillator = context.createOscillator();
  oscillator.type = "sawtooth";
  oscillator.frequency.value = slider.value;
  oscillator.connect(context.destination);
  oscillator.start();
});

// need to make a new oscolator each time no way to stop or start it. 
// very low resource usage so doesnt matter about reinitiating it. 
slider.addEventListener("input", (e) => {
  const frequency = e.target.value;
  freqLabel.textContent = `Frequency: ${frequency}Hz`;
  if (oscillator) {
    oscillator.frequency.value = frequency;
  }
});

stopBtn.addEventListener("click", () => {
  if (oscillator) {
    oscillator.stop();
    oscillator = null;
  }
});

// web audio //

// pros you can create alot it limits the need for another dependancy 
// this is like a library. you can record the users inputs. change them 
// manipulate them. you can make oscollators and lots of other noises notes. 
// this is supprisingly powerful but alot of people are unaware of the functionality. 

