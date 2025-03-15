// string slicing
function replaceWithSlice(str, index, replacement) {
    return str.slice(0, index) + replacement + str.slice(index + 1);
}

console.log(replaceWithSlice("Abracadabra", 3, "X")); // "AbrXcadabra"


// convert string to array
function replaceWithArray(str, index, replacement) {
    let arr = str.split('');
    arr[index] = replacement; // Qui non posso usare charAt() perché è un array
    return arr.join('');
}

console.log(replaceWithArray("Abracadabra", 3, "X")); // "AbrXcadabra"


// regex replace
function replaceWithRegex(str, index, replacement) {
    return str.replace(new RegExp(`.{${index}}`), replacement);
}

console.log(replaceWithRegex("Abracadabra", 3, "X")); // "AbrXcadabra"

// using map
function replaceWithMap(str, index, replacement) {
    return [...str].map((char, i) => (i === index ? replacement : str.charAt(i))).join('');
}

console.log(replaceWithMap("Abracadabra", 3, "X")); // "AbrXcadabra"


// using reduce
function replaceWithReduce(str, index, replacement) {
    return [...str].reduce((acc, _, i) => acc + (i === index ? replacement : str.charAt(i)), '');
}

console.log(replaceWithReduce("Abracadabra", 3, "X")); // "AbrXcadabra"


// using for loop
function replaceWithForLoop(str, index, replacement) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += i === index ? replacement : str.charAt(i);
    }
    return result;
}

console.log(replaceWithForLoop("Abracadabra", 3, "X")); // "AbrXcadabra"

// using substring
function replaceWithSubstring(str, index, replacement) {
    return str.substring(0, index) + replacement + str.substring(index + 1);
}

console.log(replaceWithSubstring("Abracadabra", 3, "X")); // "AbrXcadabra"