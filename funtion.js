function reverseString(str) {
  if (typeof str !== 'string') {
    if (str == null) throw new TypeError('reverseString expects a string');
    str = String(str);
  }
  return str.split('').reverse().join('');
}


console.log(reverseString('hello')); 