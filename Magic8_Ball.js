// JavaScript source code
//Magic 8 ball project
//Program variables below
let userName = 'john';
let userQuestion = 'Will I be rich?';
const randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
//Functions
switch (randomNumber) {
    case randonNumber = 0:
        eightBall = 'You are fucked!';
        break;
    case randonNumber = 1:
        eightBall = 'It is certain';
        break;
    case randonNumber = 2:
        eightBall = 'It is decidedly so';
        break;
    case randonNumber = 3:
        eightBall = 'Reply hazy try again';
        break;
    case randonNumber = 4:
        eightBall = 'Cannot predict now';
        break;
    case randonNumber = 5:
        eightBall = 'Do not count on it';
        break;
    case randonNumber = 6:
        eightBall = 'My sources say no';
        break;
    case randonNumber = 7:
        eightBall = 'Outlook not so good';
        break;
    case randonNumber = 8:
        eightBall = 'Signs point to yes';
        break;

}

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!')

console.log(`Hello ${userName}, your question is: ${userQuestion}`);

console.log(`The wise Magic Eight Ball answer is ${eightBall}`);
