function printClock(locale = 'en-GB') {
    console.log(new Date().toLocaleTimeString(locale, { hour12: false }));
}

setInterval(() => printClock('de-DE'), 1000); 
setInterval(() => printClock('en-US'), 1000); 
setInterval(() => printClock(), 1000); 
/* Expected output (every second):
00:00:00
00:00:00    // US format
00:00:00    // GB format
