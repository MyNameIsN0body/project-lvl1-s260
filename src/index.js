// import readlineSync from 'readline-sync';

// export const startGameX = () => {
//   console.log('Welcome to the Brain Games!');
//   console.log('Answer "yes" if number even otherwise answer "no".\n');
//   const userName = readlineSync.question('May I have your name? ');
//   console.log(`Hello, ${userName} !`);
//   evenGame(userName);
// };
// export const randomNumber = () => {
//   const number = Math.floor(Math.random() * 10000);
//   return number.toFixed();
// };

// const question = () => {
//   const number = randomNumber();
//   console.log(`Question: ${number}`);
//   return number;
// };

// const answer = (num) => {
//   const answerUser = readlineSync.question('Your answer: ');
//   if ((answerUser === 'yes' && num % 2 === 0) || (answerUser === 'no' && num % 2 !== 0)) {
//     console.log('Correct!');
//     return true;
//   }
//   return false;
// };

// export const evenGame = (userName) => {
//   let countAnswer = 0;
//   const countRounds = 3;
//   while (countAnswer < countRounds) {
//     const num = question();
//     if (!answer(num)) {
//       return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\n Let's try again, ${userName}!`);
//     }
// 	  countAnswer += 1;
//   }
//   console.log(`Congratulations, ${userName}!`);
// };

import readlineSync from 'readline-sync';
import { car, cdr, toString } from 'hexlet-pairs';

export const randomNumber = () => {
  const number = Math.floor(Math.random() * 10000);
  return number.toFixed();
};
const countRounds = 3;
export const structureGame = (task, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${task}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName} !\n`);


  // const interview = () => {
  //   let countRounds = 3;
  //   while (countRounds > 0) {
  //     const gameQuestion = car(game());
  //     const gameAnswer = cdr(game());
  //     console.log(`Question: ${gameQuestion}`);
  //     const playerAnswer = readlineSync.question('Your answer: ');
  //     if (gameAnswer === playerAnswer) {
  //       console.log('Correct!');
  //     } else {
  //       return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\n   Let's try again, ${userName}!`);
  //     }
  //     countRounds -= 1;
  //   }
  //   return console.log(`Congratulations, ${userName}!`);
  // };

  // interview();

  const interview = (rounds) => {
    if (rounds === 0) {
      return console.log(`Congratulations, ${userName}!\n`);
    }
    const startGame = game();
    // const gameQuestion = car(startGame);
    // const gameAnswer = cdr(startGame);
    const gameQuestion = startGame[0];
    const gameAnswer = startGame[1];
    console.log(`Question: ${gameQuestion}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (gameAnswer !== playerAnswer) {
      return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\n   Let's try again, ${userName}!\n`);
    }
    console.log('Correct!');
    return interview(rounds - 1);
  };
  return interview(countRounds);
};
