'use strict';

function jediName(firstName, lastName){
  let jediName = lastName.slice(0,3) + firstName.slice(0,2);
  return jediName;
}

console.log(jediName('cody', 'oberholtzer'));