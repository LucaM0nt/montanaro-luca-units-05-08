function dollarsConverter (dollarsAmount) {
    if (typeof dollarsAmount !== 'number') {
        return 'Invalid input';
    } else if (dollarsAmount <= 0) {
        return 'Invalid input';
    } else {
        euroAmount = dollarsAmount * 0.91;
        return euroAmount;
    }
};

function money (amount) {
    if (typeof amount !== 'number') {
        return 'Invalid input';
    } else if (amount <= 0) {
        return 'Invalid input';
    } else if (amount === 1) {
        return `${amount} dollar is ${amount * 0.91} euros`;
    } else if (amount > 1000000) {
        return `${amount} dollars are ${amount * 0.91} euros ;)`;
    } else {
        return `${amount} dollars are ${amount * 0.91} euros`;
    }
};

console.log(money(100)); // 100 dollars are 91 euros
console.log(money(1)); // 1 dollar is 0.91 euros
console.log(money(1000001)); // 1000001 dollars are 910000.91 euros ;)
