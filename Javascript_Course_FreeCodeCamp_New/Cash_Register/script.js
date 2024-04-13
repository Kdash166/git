// Getting references to HTML elements
const cashInput = document.getElementById('cash');
const changeDueDiv = document.getElementById('change-due');
const purchaseButton = document.getElementById('purchase-btn');
const priceDisplay = document.getElementById('price-display');
const registerDisplay = document.getElementById('cash-register-display');
const customerChangeDisplay = document.getElementById('inside-cash-register-display');

// Data
let price = 3.26;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

// Initializing data
priceDisplay.textContent = `Price: $${price}`;
changeDueDiv.textContent = `ChangeDue: -.--`;
renderingCashRegister();

// Main function
function purchaseHandler() {
    const cashPaid = parseFloat(cashInput.value);
    checkCashRegister(cashPaid);
}

// Function to check the cash register 
function checkCashRegister(cashPaid) {
    const displayChangeDue = document.getElementById('change-due');

    if (isNaN(cashPaid) || cashPaid < price) {
        alert('Customer does not have enough money to purchase the item');
        return;
    }

    if (cashPaid === price) {
        displayChangeDue.textContent = 'No change due - customer paid with exact cash';
        return;
    }

    let changeDue = cashPaid - price;
    let result = { status: '', change: [] };
    let totalCID = parseFloat(
        cid
        .map(total => total[1])
        .reduce((prev, curr) => prev + curr)
        .toFixed(2)
    );

    if (totalCID < changeDue) {
        result.status = 'INSUFFICIENT_FUNDS';
        displayChangeDue.innerHTML = `<p>Status: ${result.status}</p>`;
        return;
    }

    if (totalCID === changeDue) {
        result.status = 'CLOSED';
        let changeArray = [['PENNY', changeDue]];
        formatResults(result.status, changeArray);
        updateUI(changeArray);
        return;
    }

    result.status = 'OPEN';
    let changeArray = [];

    const denominations = {
        'ONE HUNDRED': 100,
        'TWENTY': 20,
        'TEN': 10,
        'FIVE': 5,
        'ONE': 1,
        'QUARTER': 0.25,
        'DIME': 0.1,
        'NICKEL': 0.05,
        'PENNY': 0.01
    };

    Object.keys(denominations).forEach(denomination => {
        const value = denominations[denomination];
        const availableCash = cid.find(currency => currency[0] === denomination)[1];
        
        if (changeDue >= value && availableCash > 0) {
            let numOfBills = Math.min(Math.floor(changeDue / value), availableCash / value);
            let deductAmount = parseFloat((numOfBills * value).toFixed(2));
            changeDue = parseFloat((changeDue - deductAmount).toFixed(2));
            changeArray.push([denomination, deductAmount]);
        }
    });

    if (changeDue > 0) {
        result.status = 'INSUFFICIENT_FUNDS';
        displayChangeDue.innerHTML = `<p>Status: ${result.status}</p>`;
        return;
    }

    formatResults(result.status, changeArray);
    updateUI(changeArray);
}

// Function to format and display the change due
function formatResults(status, change) {
    let changeDueHTML = `<p>Status: ${status}</p>`;
    change.forEach(money => (changeDueHTML += `<p>${money[0]}: $${money[1]}</p>`));
    changeDueDiv.innerHTML = changeDueHTML;
}

// Function to update the UI
function updateUI(change) {
    change.forEach(changeArr => {
        const targetArr = cid.find(cidArr => cidArr[0] === changeArr[0]);
        targetArr[1] = parseFloat((targetArr[1] - changeArr[1]).toFixed(2));
    });

    cashInput.value = '';
    renderingCashRegister();
}

// Function to render the cash register on the UI
function renderingCashRegister() {
    let innerHTML = "";
    cid.forEach(currency => {
        innerHTML += `<p class="inner-register-text">${currency[0]}: $${currency[1]}</p>`;
    });
    registerDisplay.innerHTML = innerHTML;
}

// Event listener for purchase button click
purchaseButton.addEventListener('click', purchaseHandler);

// Event listener for Enter key press on cash input
cashInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        purchaseHandler();
    }
});

// Initial rendering
renderingCashRegister();
