import { cons, car, cdr } from 'hexlet-pairs';
import { structureGame } from '../index';

const task = 'What is the result of the expression?';


export const calcGame = () => {
  const indexArr = (Math.floor(Math.random() * 3));
  const symbol = ['+', '-', '*'];
  // const num1 = (Math.floor(Math.random() * 100));
  // const num2 = (Math.floor(Math.random() * 100));
  const randomNum = cons((Math.floor(Math.random() * 100)), (Math.floor(Math.random() * 100)));
  let question;
  let answer;
  // switch (symbol[indexArr]) {
  //   case '+': {
  //     question = `${num1} + ${num2}`;
  //     answer = num1 + num2;
  //     break;
  //   }
  //   case '-': {
  //     question = `${num1} - ${num2}`;
  //     answer = num1 - num2;
  //     break;
  //   }
  //   case '*': {
  //     question = `${num1} * ${num2}`;
  //     answer = num1 * num2;
  //     break;
  //   } default: {
  //     console.log('no symbol');
  //   }
  // }
  if (symbol[indexArr] === '+') {
    question = `${car(randomNum)} + ${cdr(randomNum)}`;
    answer = String(car(randomNum) + cdr(randomNum));
  } else if (symbol[indexArr] === '-') {
    question = `${car(randomNum)} - ${cdr(randomNum)}`;
    answer = String(car(randomNum) - cdr(randomNum));
  } else if (symbol[indexArr] === '*') {
    question = `${car(randomNum)} * ${cdr(randomNum)}`;
    answer = String(car(randomNum) * cdr(randomNum));
  }
  // const answerGame = cons(question, answer);
  const answerGame = [question, answer];
  return answerGame;
};

export default structureGame(task, calcGame);
