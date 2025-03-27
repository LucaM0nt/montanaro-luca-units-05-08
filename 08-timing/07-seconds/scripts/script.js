function getSecondsToTomorrow() {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  let secondsToTomorrow =  Math.round((tomorrow - now) / 1000);
  return `There are ${secondsToTomorrow} seconds left until tomorrow.`;
}

function getSecondsToday() {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let secondsToday = Math.round((now - today) / 1000);
  return `${secondsToday} seconds have passed today.`;
}

getSecondsToday();
getSecondsToTomorrow();