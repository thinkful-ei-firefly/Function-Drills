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

function sentenceDecode(sentence) {
  let words = sentence.split(' ');
  let decoded = '';

  for (let i = 0; i < words.length; i++) {
    decoded += decode(words[i]);
  }
  return decoded;

}

function daysInMonth(month, leapYear = false) {

  let days = 0;
  month = month.toLowerCase();

  switch (month) {
  case 'september':
  case 'april':
  case 'june':
  case 'november':
    days = 30;
    break;

  case 'january':
  case 'march':
  case 'may':
  case 'july':
  case 'august':
  case 'october':
  case 'december':
    days = 31;
    break;

  case 'february':
    if (leapYear){
      days = 29;
    } else {
      days = 28;
    }
    break;
  default:
    throw new Error('Must provide a valid month.');
  }
  return `${month} has ${days} days...`;
}


function rockPaperScissors (input) {

  if (typeof(input) !=='number' || input <1 || input >3) {
    throw new Error('Please input a valid number between 1 and 3');
  }

  const randomNo = Math.floor(Math.random() * 3) + 1;

  if (input === randomNo) {
    return 'tie';
  } else if (input > randomNo && input !==1) {
    return 'you win!'
  } else if (input === 1 && randomNo === 3) {
    return 'you win!';
  }
  else {
    return 'you lose'
  }
}


// console.log(jediName('cody', 'oberholtzer'));
// beyond(Infinity);
// beyond(10);
// beyond(-10);
// beyond(0);
// console.log(decode('hello'));
// console.log(decode('alpha'));
// console.log(sentenceDecode('craft block argon meter bells brown croon droop'));
try{
  console.log(daysInMonth('octemper', true));
} catch(e){
  console.error(e);
}

try {
console.log(rockPaperScissors(1));
console.log(rockPaperScissors(2));
console.log(rockPaperScissors(3));
console.log(rockPaperScissors(5));
console.log(rockPaperScissors('potato'));
} catch(e) {
  console.error(e);
}