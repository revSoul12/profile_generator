//Ask specified questions
//

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable.', (answer1) => {
  rl.question('What is your favourite hobby?', (answer2) => {
    rl.question('What is your superpower?', (answer3) => {
      console.log(`My name is ${answer1}. My favourite hobby is ${answer2}, and my superpower is ${answer3}.`)
      rl.close();
    });
  });
});