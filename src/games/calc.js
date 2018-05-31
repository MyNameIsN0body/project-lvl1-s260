import { structureGame } from '../index';

const task = 'What is the result of the expression?';


export const calcGame = () => {
  const symbol = (Math.floor(Math.random() * 3));
  const num1 = (Math.floor(Math.random() * 100));
  const num2 = (Math.floor(Math.random() * 100));
  let question;
  let answer;
  switch (symbol) {
    case 1:
      question = `${num1} + ${num2}`;
      answer = String(num1 + num2);
      break;
    case 2:
      question = `${num1} - ${num2}`;
      answer = String(num1 - num2);
      break;
    case 3:
      question = `${num1} * ${num2}`;
      answer = String(num1 * num2);
      break;
    default:
  }
  const answerGame = [question, answer];
  return answerGame;
};

export default structureGame(task, calcGame);
