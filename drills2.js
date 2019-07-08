'use strict';

function jediName(firstName, lastName) {
  let jediName = lastName.slice(0, 3) + firstName.slice(0, 2);
  return jediName;
}

function beyond(num) {
  if (num === Infinity) {
    console.log('And beyond');
  } else if (num > 0) {
    console.log('To infinity');
  } else if (num < 0) {
    console.log('To negative infinity');
  } else if (num === 0) {
    console.log('Staying home');
  } else {
    console.log('input invalid');
  }
}

function decode(word) {
  let firstLetter = word.charAt(0);
  let letter = ' ';
  switch (firstLetter) {
  case 'a':
    letter = word.charAt(1);
    break;
  case 'b':
    letter = word.charAt(2);
    break;
  case 'c':
    letter = word.charAt(3);
    break;
  case 'd':
    letter = word.charAt(4);
    break;
  }

  return letter;
}

function sentenceDecode (sentence) {
  let words = sentence.split(' ');
  let decoded = '';

  for (let i=0; i<words.length; i++) {
    decoded += decode(words[i]);
  }
  return decoded;

 }




console.log(jediName('cody', 'oberholtzer'));
beyond(Infinity);
beyond(10);
beyond(-10);
beyond(0);
console.log(decode('hello'));
console.log(decode('alpha'));
console.log(sentenceDecode('craft block argon meter bells brown croon droop'));
