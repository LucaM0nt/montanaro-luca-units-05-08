function setMyInterval(callback, delay) {
    const interval = { id: null };

    function repeat() {
        callback();
        interval.id = setTimeout(repeat, delay);
    }

    interval.id = setTimeout(repeat, delay);
    return interval;
}

function sayHello() {
  console.log("Hello");
}

const myIntervalId = setMyInterval (sayHello, 2000); // Logs "Hello" every 2 seconds

function clearMyInterval(interval) {
    clearTimeout(interval.id);
}

setTimeout(() => clearMyInterval(myIntervalId),8000); // Clears the interval after 8 seconds