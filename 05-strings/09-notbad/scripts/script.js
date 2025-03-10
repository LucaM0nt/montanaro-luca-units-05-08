function notBad(str) {
  let notIndex = str.search('not');
  let badIndex = str.search('bad');

  if (notIndex < badIndex) {
    return str.slice(0, notIndex) + 'good' + str.slice(badIndex + 3);
  }

  return str;
}