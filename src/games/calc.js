import { structureGame } from '../index';

const task = 'What is the result of the expression?';


export const calcGame = () => {
  const indexArr = (Math.floor(Math.random() * 3));
  const symbol = ['+', '-', '*'];
  const num1 = (Math.floor(Math.random() * 100));
  const num2 = (Math.floor(Math.random() * 100));
  let question;
  let answer;
  if (symbol[indexArr] === '+') {
    question = `${num1} + ${num2}`;
    answer = String(num1 + num2);
  } else if (symbol[indexArr] === '-') {
    question = `${num1} - ${num2}`;
    answer = String(num1 - num2);
  } else if (symbol[indexArr] === '*') {
    question = `${num1} * ${num2}`;
    answer = String(num1 * num2);
  }
  const answerGame = [question, answer];
  return answerGame;
};

export default structureGame(task, calcGame);
