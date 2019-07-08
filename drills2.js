'use strict';

function jediName(firstName, lastName){
  let jediName = lastName.slice(0,3) + firstName.slice(0,2);
  return jediName;
}

function beyond (num) {
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

console.log(jediName('cody', 'oberholtzer'));
beyond(Infinity);
beyond(10);
beyond(-10);
beyond(0);