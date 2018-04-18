import readlineSync from 'readline-sync';

export const hello = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName} !`);
  evenGame(userName);
};
const randomNumber = () => {
  const number = Math.floor(Math.random() * 10000);
  return number.toFixed();
};

const question = () => {
  const number = randomNumber();
  console.log(`Question: ${number}`);
  return number;
};

const answer = (num) => {
  const answerUser = readlineSync.question('Your answer: ');
  if ((answerUser === 'yes' && num % 2 === 0) || (answerUser === 'no' && num % 2 !== 0)) {
    console.log('Correct!');
    return true;
  }
  return false;
};

export const evenGame = (userName) => {
  let countAnswer = 0;
  const countRounds = 3;
  while (countAnswer < countRounds) {
    const num = question();
    if (!answer(num)) {
      return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\n Let's try again, ${userName}!`);
    }
	  countAnswer += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};
