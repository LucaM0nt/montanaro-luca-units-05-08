function validateCreditCard(creditCard) {
  let creditCardValidation = {
    number: creditCard,
    isValid: true,
    error: "",
  };

  // Remove all non-digit characters
  const creditCardNumber = creditCard.replace(/\D/g, "");

  // Check if the credit card number has 16 digits
  if (creditCardNumber.length !== 16) {
    creditCardValidation.isValid = false;
    creditCardValidation.error += `Credit card number must be 16 digits, all of them must be numbers.\n`;
  }

  // Check if the last digit is even
  if (creditCardNumber[creditCardNumber.length - 1] % 2 !== 0) {
    creditCardValidation.isValid = false;
    creditCardValidation.error += "The final digit must be even.\n";
  }

  // Check if the sum of all digits is greater than 16
  let sum = 0;
  creditCardNumber.split("").forEach((digit) => {
    sum += parseInt(digit);
  });
  if (sum <= 16) {
    creditCardValidation.isValid = false;
    creditCardValidation.error += `The sum of all digits must be greater than 16.\n`;
  }

  // Check if all digits are not the same
  const uniqueDigits = new Set(creditCardNumber);
  if (uniqueDigits.size === 1) {
    creditCardValidation.isValid = false;
    creditCardValidation.error += "All digits cannot be the same.\n";
  }

  if (creditCardValidation.error === "") {
    creditCardValidation.error = "No errors, credit card number is valid.\n";
  }

  message = `
  ================================================
  = number : ${creditCardValidation.number}
  = isValid : ${creditCardValidation.isValid}
  = error : ${creditCardValidation.error.trim()}
  ================================================
  `;

  console.log(message);
}

validateCreditCard("9999-7777-8888-0000");
validateCreditCard("6666/6666/6666/1666");
validateCreditCard("a92332119c011112");
validateCreditCard("4444444444444444");
validateCreditCard("1111111111111110");
validateCreditCard("6666~6546~6666~3331");
validateCreditCard("aaaa-bbbb-cccc-dddd");
