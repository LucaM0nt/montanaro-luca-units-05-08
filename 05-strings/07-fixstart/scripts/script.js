function fixStart(str) {
    let firstLetter = str.charAt(0);
    let result = firstLetter;

    for (let i = 1; i < str.length; i++) {
        if (str.charAt(i) === firstLetter) {
            result += '*';
        } else {
            result += str.charAt(i);
        }
    }
    return result;
}

console.log(fixStart('babble')); // ba**le  
console.log(fixStart('aardvark')); // a*rdv*rk