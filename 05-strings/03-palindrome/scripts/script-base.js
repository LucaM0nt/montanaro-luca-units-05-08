function reverse(str){
    return(str.split('').reverse().join(''))
};

function isPalindrome(str){
    return str === reverse(str)
};

// funzione senza usare reverse
function isPalindromeV2(str){
    strToCheck = str.split('').reverse().join('')
    return str === strToCheck       
}