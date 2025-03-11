/**
 * @file script.js
 * @description This file contains the JavaScript code for the Group exercise.
 * @date March 2025
 * @author Luca Montanaro
 * 
 * @remarks
 * This exercise demonstrates the use of string manipulation in JavaScript.
 * The function aContainsb takes two string parameters and checks if the first string contains the second string.
 * The function group takes a list of names and a name, and checks if the name is part of the group.
 * 
 * function aContainsb - Checks if the first string contains the second string.
 * function group - Checks if a name is part of the group.
 * 
 * The aContainsb function takes two parameters: stringA and stringB.
 * It returns true if stringA contains stringB, false otherwise.
 * 
 * The group function takes two parameters: nameList and name.
 * It returns a string indicating whether the name is part of the group.
 */

/**
 * This function checks if stringA contains stringB.
 * @param {string} stringA - The string to be searched.
 * @param {string} stringB - The string to search for.
 * @returns {boolean} - True if stringA contains stringB, false otherwise.
 * @example
 * console.log(aContainsb("John, Jane, Joe, Jack", "Jane")); // true
 * console.log(aContainsb("John, Jane, Joe, Jack", "Jill")); // false
 */
function aContainsb(stringA, stringB) {
    return stringA.includes(stringB);
}

/**
 * This function checks if a name is part of the group.
 * @param {string} nameList - The list of names.
 * @param {string} name - The name to check.
 * @returns {string} - A string indicating whether the name is part of the group.
 * @example
 * console.log(group("John, Jane, Joe, Jack", "Jane")); // Jane IS part of the group.
 * console.log(group("John, Jane, Joe, Jack", "Jill")); // Jill is NOT part of the group.
 */
function group(nameList, name) {
    let isNameInList = aContainsb(nameList, name);
    if (isNameInList) {
        return `${name} IS part of the group.`;
    } else {
        return `${name} is NOT part of the group.`;
    }
}

console.log(group("John, Jane, Joe, Jack", "Jane")); // Jane IS part of the group.
console.log(group("John, Jane, Joe, Jack", "Jill")); // Jill is NOT part of the group.