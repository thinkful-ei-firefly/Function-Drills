'use strict';

function createGreeting(name, age) {
  let yearOfBirth = getYearOfBirth(age);
  return `Hi, I'm ${name} and I'm ${age} years old. I was born in the year ${yearOfBirth}`;
}

function getYearOfBirth(age){
  return 2019-age;
}

let greeting = createGreeting('lars', 99);

console.log(greeting);