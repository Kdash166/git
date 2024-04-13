const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

const handleNumber = input => {
  if (input === "") {
    alert("Please provide a phone number");
    return;
  }

 const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spacesDashes = '[\\s\\-]?';
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const phoneRegex = new RegExp(
    `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
  );


  if (phoneRegex.test(input)) {
    resultsDiv.innerHTML += `<p class="valid-text">Valid US number: ${input} </p>`;
  } else {
    resultsDiv.innerHTML += `<p class="invalid-text">Invalid US number: ${input} </p>`;
  }
};

checkBtn.addEventListener('click', () => {
  handleNumber(userInput.value);
});

userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    handleNumber(userInput.value);
    userInput.value = '';
  }
});

clearBtn.addEventListener('click', () => {
  resultsDiv.innerHTML = '';
  userInput.value = '';
});

userInput.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    resultsDiv.innerHTML = '';
    userInput.value = '';
  }
});
