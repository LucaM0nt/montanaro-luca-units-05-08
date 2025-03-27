function formatDate(date) {
    const now = new Date();
    const diff = (now - date) / 1000; // Difference in seconds

    if (diff < 1) {
        return "right now";
    } else if (diff < 60) {
        return `${Math.floor(diff)} sec. ago`;
    } else if (diff < 3600) {
        return `${Math.floor(diff / 60)} min. ago`;
    } else {
        const pad2Digits = (num) => num.toString().padStart(2, '0');
        return `${pad2Digits(date.getDate())}.${pad2Digits(date.getMonth() + 1)}.${date.getFullYear().toString().slice(-2)} ${pad2Digits(date.getHours())}:${pad2Digits(date.getMinutes())}`;
    }
}

// Example usage:
console.log(formatDate(new Date(new Date() - 500))); // "right now"
console.log(formatDate(new Date(new Date() - 30000))); // "30 sec. ago"
console.log(formatDate(new Date(new Date() - 1800000))); // "30 min. ago"
console.log(formatDate(new Date('2024-03-26T14:30:00'))); // e.g. "26.03.24 14:30" 
 