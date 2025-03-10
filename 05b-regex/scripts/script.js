function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,4}$/.test(email);
}

function validatePhoneNumber(phoneNumber) {
    return /^(\+?\d{1,3}[-.\s]?)?\d{1,4}([-.\s]?\d{1,4}){1,3}$/.test(phoneNumber);
}

function validatePassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);
}

function validateURL(url) {
    return /^(https?:\/\/)?([\w.-]+)\.[a-zA-Z]{2,}([\/?#][^\s]*)?$/.test(url);
}

// Test examples
console.log(validateEmail("test@example.com")); // true
console.log(validatePhoneNumber("+1-800-555-5555")); // true
console.log(validatePassword("Password1!")); // true
console.log(validateURL("https://www.example.com/path?query=string#fragment")); // true
