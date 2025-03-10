function mixup(str1, str2) {
  return str1.slice(0, 1) + str2.slice(1) + ' ' + str2.slice(0, 1) + str1.slice(1);
}

console.log(mixup('ciao', 'gatto')); 