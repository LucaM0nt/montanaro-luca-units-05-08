function capital (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capital('ciao')) // Ciao

function capital2 (str) {
  return str.split(' ').map(capital).join(' ');
}

console.log(capital2('ciao come va')) // Ciao Come Va
