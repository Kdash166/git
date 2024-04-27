class BankAccount {
    constructor(accountNumber, accountHolder, balance = 0){
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amt){
        if(amt > 0){
            this.balance += amt;
            console.log(`you deposited $${amt}, New Balance is: $${this.balance}`)

 
    } else {
    console.log("Can't deposit a negative amount");

    }
}
    withdraw(amt){
        if(amt > this.balance){
         console.log("You cannot withdraw that amount!")
        } else {
            this.balance -= amt;
            console.log(`you witdrew $${amt}, New Balance is: $${this.balance}`)

        }
    }
}



const a = new BankAccount ("123","James Deane")

