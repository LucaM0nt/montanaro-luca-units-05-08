function verbing(str) {
    if (str.length >= 3) {
        if (str.slice(-3) === 'ing') {
            return str + 'ly';
        } else {
            return str + 'ing';
        }
    } else {
        return str;
    }
}