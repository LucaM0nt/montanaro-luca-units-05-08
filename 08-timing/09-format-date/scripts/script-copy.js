function formatDate(date) {
    const now = new Date();
    const diff = (now - date) / 1000;

    if (diff < 1) {
        return "right now";
    } else if (diff < 60) {
        return `${Math.floor(diff)} sec. ago`;
    } else if (diff < 3600) {
        return `${Math.floor(diff / 60)} min. ago`;
    } else {
        return date.toLocaleString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        }).replace(',', '');
    }
}

// Example usage:
console.log(formatDate(new Date(new Date() - 500))); // "right now"
console.log(formatDate(new Date(new Date() - 30000))); // "30 sec. ago"
console.log(formatDate(new Date(new Date() - 1800000))); // "30 min. ago"
console.log(formatDate(new Date('2024-03-26T14:30:00'))); // e.g. "26.03.24 14:30"