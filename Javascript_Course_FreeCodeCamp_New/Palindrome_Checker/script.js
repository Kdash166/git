let textInput = document.getElementById("text-input");
let checkBtn = document.getElementById("check-btn");
let result = document.getElementById("result");

function checkButton() {
  let userInput = textInput.value;

  // Remove spaces and punctuation from the string, excluding letters and digits
  let stringWithoutSpacesAndPunctuation = userInput.toLowerCase().replace(/[^a-z0-9]/g, '');

  let splitString = [...stringWithoutSpacesAndPunctuation];
  // Reverse the array of characters
  let reversedArray = splitString.reverse();
  // Join the reversed array into a string
  let reverseString = reversedArray.join("");

  if (stringWithoutSpacesAndPunctuation === "") {
    alert('Please input a Value');
  } else if (stringWithoutSpacesAndPunctuation === reverseString) {
    result.innerHTML = `<p class="result-text-correct">${userInput} <b>is</b> a palindrome</p>`;
  } else {
    result.innerHTML = `<p class="result-text-wrong">${userInput} <b>is <i>NOT</i></b> a palindrome</p>`;
  }
}

checkBtn.addEventListener('click', checkButton);

textInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    checkButton();
  }
});
