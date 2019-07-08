'use strict';

function createGreeting(name, age) {
  let yearOfBirth = 2019-age;
  return `Hi, I'm ${name} and I'm ${age} years old. I was born in the year ${yearOfBirth}`;
}

let greeting = createGreeting('lars', 99);

console.log(greeting);