const weekdaysShortEng = [ 'SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
const weekdaysShortIt = [ 'DO', 'LU', 'MA', 'ME', 'GI', 'VE', 'SA'];

let currentDate = new Date();

function getWeekDay(date, lang) {
    switch (lang) {
        case 'it':
            return weekdaysShortIt[date.getDay()];
        case 'en':
            return weekdaysShortEng[date.getDay()];
        default:
            return 'Invalid language';
    };
};

console.log(getWeekDay(currentDate, 'it'));  // Logs: 'DO'
console.log(getWeekDay(currentDate, 'en'));  // Logs: 'SU'
console.log(getWeekDay(currentDate, 'es'));  // Logs: 'Invalid language'