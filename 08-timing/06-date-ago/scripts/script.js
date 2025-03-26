function getDateAgo(date, days) {
    if (days < 0) return 'Invalid day, use positive numbers';
    let newDate = new Date(date)
    newDate.setDate(newDate.getDate() - days);
    return newDate.getDate();
}

let today = new Date();
console.log(getDateAgo(today, 1)); 
console.log(getDateAgo(today, -1)); 