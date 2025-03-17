# Abracadabra Exercise 🪄

Questo esercizio dimostra vari metodi per sostituire un carattere in una stringa in JavaScript. Ogni soluzione utilizza un approccio diverso per ottenere lo stesso risultato.

## Assignment 📝

> - Code 3 different solutions to change the 4th letter in the following string
"Abracadabra" into an "X"
> - Each solution should be in a separate folder.
> - *Name them solution-1, solution-2, etc.*
> - Also include a doc file in which you explain what 3 ways you used  
> **Bonus**: There are many ways to replace a character in a string. Code other
solutions than the above 3


## Usage 🛠️

1. Open the local `index.html` file in a web browser.
2. The script in `script.js` will run automatically and log the main outputs to the console.

## Soluzioni 📋

### 1. `string-slicing.js`

**Descrizione**: Questo file contiene il codice JavaScript per sostituire un carattere in una stringa utilizzando il metodo `slice`.

**Metodo**: `slice`

**Funzione**: `replaceWithSlice`

```javascript
/**
 * Replaces a character in a string using the slice method.
 * @param {string} str - The original string.
 * @param {number} index - The index of the character to replace.
 * @param {string} replacement - The replacement character.
 * @returns {string} - The new string with the character replaced.
 * @example
 * console.log(replaceWithSlice("Abracadabra", 3, "X")); // "AbrXcadabra"
 */
function replaceWithSlice(str, index, replacement) {
    return str.slice(0, index) + replacement + str.slice(index + 1);
}
```

**Vantaggi**:
- Semplice e diretto.
- Non modifica l'array originale.

**Svantaggi**:
- Meno intuitivo per chi non è familiare con `slice`.

**Quando usarlo**:
- Quando si desidera una soluzione semplice e leggibile per sostituire un carattere in una stringa.

### 2. `string-to-array.js`

**Descrizione**: Questo file contiene il codice JavaScript per sostituire un carattere in una stringa convertendola in un array.

**Metodo**: Convertire la stringa in un array

**Funzione**: `replaceWithArray`

```javascript
/**
 * Replaces a character in a string by converting it to an array.
 * @param {string} str - The original string.
 * @param {number} index - The index of the character to replace.
 * @param {string} replacement - The replacement character.
 * @returns {string} - The new string with the character replaced.
 * @example
 * console.log(replaceWithArray("Abracadabra", 3, "X")); // "AbrXcadabra"
 */
function replaceWithArray(str, index, replacement) {
    let arr = str.split('');
    arr[index] = replacement;
    return arr.join('');
}
```

**Vantaggi**:
- Intuitivo per chi è familiare con gli array.
- Facile da capire e implementare.

**Svantaggi**:
- Richiede la conversione avanti e indietro tra stringa e array.

**Quando usarlo**:
- Quando si lavora già con array o si preferisce un approccio basato su array.

### 3. `regex-replace.js`

**Descrizione**: Questo file contiene il codice JavaScript per sostituire un carattere in una stringa utilizzando le espressioni regolari.

**Metodo**: Espressioni regolari (regex)

**Funzione**: `replaceWithRegex`

```javascript
/**
 * Replaces a character in a string using the regex method.
 * @param {string} str - The original string.
 * @param {number} index - The index of the character to replace.
 * @param {string} replacement - The replacement character.
 * @returns {string} - The new string with the character replaced.
 * @example
 * console.log(replaceWithRegex("Abracadabra", 3, "X")); // "AbrXcadabra"
 */
function replaceWithRegex(str, index, replacement) {
    return str.replace(new RegExp(`(.{${index}}).`), `$1${replacement}`);
}
```

**Vantaggi**:
- Potente e flessibile.
- Può essere esteso per sostituzioni più complesse.

**Svantaggi**:
- Può essere meno leggibile per chi non è familiare con le espressioni regolari.
- Potenzialmente più lento per operazioni semplici.

**Quando usarlo**:
- Quando si ha familiarità con le espressioni regolari e si desidera una soluzione potente e flessibile.

### 4. `map-replace.js`

**Descrizione**: Questo file contiene il codice JavaScript per sostituire un carattere in una stringa utilizzando il metodo `map`.

**Metodo**: `map`

**Funzione**: `replaceWithMap`

```javascript
/**
 * Replaces a character in a string using the map method.
 * @param {string} str - The original string.
 * @param {number} index - The index of the character to replace.
 * @param {string} replacement - The replacement character.
 * @returns {string} - The new string with the character replaced.
 * @example
 * console.log(replaceWithMap("Abracadabra", 3, "X")); // "AbrXcadabra"
 */
function replaceWithMap(str, index, replacement) {
    return [...str].map((char, i) => (i === index ? replacement : str.charAt(i))).join('');
}
```

**Vantaggi**:
- Intuitivo per chi è familiare con `map`.
- Mantiene la logica funzionale.

**Svantaggi**:
- Potenzialmente meno efficiente per stringhe molto lunghe.

**Quando usarlo**:
- Quando si preferisce un approccio funzionale e si ha familiarità con `map`.

### 5. `reduce.js`

**Descrizione**: Questo file contiene il codice JavaScript per sostituire un carattere in una stringa utilizzando il metodo `reduce`.

**Metodo**: `reduce`

**Funzione**: `replaceWithReduce`

```javascript
/**
 * Replaces a character in a string using the reduce method.
 * @param {string} str - The original string.
 * @param {number} index - The index of the character to replace.
 * @param {string} replacement - The replacement character.
 * @returns {string} - The new string with the character replaced.
 * @example
 * console.log(replaceWithReduce("Abracadabra", 3, "X")); // "AbrXcadabra"
 */
function replaceWithReduce(str, index, replacement) {
    return [...str].reduce((acc, _, i) => acc + (i === index ? replacement : str.charAt(i)), '');
}
```

**Vantaggi**:
- Potente e flessibile.
- Mantiene la logica funzionale.

**Svantaggi**:
- Può essere meno leggibile per chi non è familiare con `reduce`.

**Quando usarlo**:
- Quando si ha familiarità con `reduce` e si desidera una soluzione funzionale.

### 6. `for-loop.js`

**Descrizione**: Questo file contiene il codice JavaScript per sostituire un carattere in una stringa utilizzando un ciclo `for`.

**Metodo**: Ciclo `for`

**Funzione**: `replaceWithForLoop`

```javascript
/**
 * Replaces a character in a string using a for loop.
 * @param {string} str - The original string.
 * @param {number} index - The index of the character to replace.
 * @param {string} replacement - The replacement character.
 * @returns {string} - The new string with the character replaced.
 * @example
 * console.log(replaceWithForLoop("Abracadabra", 3, "X")); // "AbrXcadabra"
 */
function replaceWithForLoop(str, index, replacement) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += i === index ? replacement : str.charAt(i);
    }
    return result;
}
```

**Vantaggi**:
- Semplice e diretto.
- Facile da capire per chiunque conosca i cicli `for`.

**Svantaggi**:
- Potenzialmente meno efficiente per stringhe molto lunghe.

**Quando usarlo**:
- Quando si desidera una soluzione semplice e leggibile senza dipendere da metodi avanzati.

## Conclusione

Ogni file `.js` dimostra un metodo diverso per sostituire un carattere in una stringa in JavaScript. Questi metodi includono l'uso di `slice`, la conversione in array, le espressioni regolari, `map`, `reduce` e un ciclo `for`. Ognuno di questi approcci ha i suoi vantaggi e svantaggi a seconda del contesto in cui viene utilizzato.

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)