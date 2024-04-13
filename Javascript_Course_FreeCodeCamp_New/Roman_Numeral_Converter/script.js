//getting Elements from DOM
const userInput = document.getElementById('number');

const convertBtn = document.getElementById('convert-btn');

const outputElement = document.getElementById('output');

//data
const arabicNumeralArray = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
];

// Validation input 
const userValidation = () => {
  if(userInput.value ===""){
    outputElement.innerText = 
    "Please enter a valid number"; 
} else if (userInput.value <= 0){
outputElement.innerText =
  "Please enter a number greater than or equal to 1"

} else if (userInput.value >= 4000){
 outputElement.innerText = "Please enter a number less than or equal to 3999"
} else {
  convertToNumerals();
}

};

const convertToNumerals = () => {
  let numberForConversion = parseInt(userInput.value);

  // Clear the output element before starting a new conversion
  outputElement.innerText = "";

  // Iterate through the arabicNumeralArray
  for (let i = 0; i < arabicNumeralArray.length; i++) {
    while (numberForConversion >= arabicNumeralArray[i][0]) {
      // Subtract the value and append the corresponding Roman numeral
      numberForConversion -= arabicNumeralArray[i][0];
      outputElement.innerText += arabicNumeralArray[i][1];
    }
  }
}




// event listeners 

convertBtn.addEventListener('click', userValidation);

// enter needs to be on the document
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        userValidation();
    }
});