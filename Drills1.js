'use strict';

function createGreeting(name, age) {
  return `Hi, I'm ${name} and I'm ${age} years old`;
}

let greeting = createGreeting('lars', 99);

console.log(greeting);