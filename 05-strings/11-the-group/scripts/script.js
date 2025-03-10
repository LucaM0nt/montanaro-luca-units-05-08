function aContainsb(stringA, stringB) {
    return stringA.includes(stringB);
  }

function group(nameList, name) {
    isNameInList = aContainsb(nameList, name);
    if (isNameInList) {
        return `${name} IS part of the group.`;
    } else {
        return `${name} is NOT part of the group.`;
    }
}

console.log(group("John, Jane, Joe, Jack", "Jane")); // Jane IS part of the group.
console.log(group("John, Jane, Joe, Jack", "Jill")); // Jill is NOT part of