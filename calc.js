
// importing the Node.js readline module, which provides an interface for reading input from a stream
const readline = require('readline');


//creating a new readline.Interface object using the readline.createInterface() 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




rl.question('What is your question? ', (question) => {
  const pattern = /(\d+)\s*(plus|minus|multiplied by|divided by)\s*(\d+)/i;    //regex pattern
  const match = question.match(pattern);

  if (match) {
    const num1 = parseInt(match[1]);
    const num2 = parseInt(match[3]);
    let operator = match[2].toLowerCase();
    let result;


    //identifying operations
    switch (operator) {
      case 'plus':
        result = num1 + num2;
        operator = '+';
        break;
      case 'minus':
        result = num1 - num2;
        operator = '-';
        break;
      case 'multiplied by':
        result = num1 * num2;
        operator = '*';
        break;
      case 'divided by':
        result = num1 / num2;
        operator = '/';
        break;
      default:
        console.log('Invalid operator');
        process.exit(1);
    }

    console.log(`${num1} ${operator} ${num2} is ${result}`);
  } else {
    console.log('Invalid question');
  }


  // closing readline interface 
  rl.close();
});



// please make sure you use any of this for operations 
//    1. plus
//    2.minus
//    3.multiplied by
//    4.divided by





