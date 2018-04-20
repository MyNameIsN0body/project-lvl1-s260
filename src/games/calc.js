import { cons } from 'hexlet-pairs';
import { structureGame } from '../index';

const task = 'What is the result of the expression?';


const calcGame = () => {
  const indexArr = (Math.floor(Math.random() * 3));
  const symbol = ['+', '-', '*'];
  const num1 = (Math.floor(Math.random() * 100));
  const num2 = (Math.floor(Math.random() * 100));
  switch (symbol[indexArr]) {
    case '+': {
      const question = `${num1} + ${num2}`;
      const answer = num1 + num2;
      const answerGame = cons(question, answer);
      return answerGame;
    }
    case '-': {
      const question = `${num1} - ${num2}`;
      const answer = num1 - num2;
      const answerGame = cons(question, answer);
      return answerGame;
    }
    case '*': {
      const question = `${num1} * ${num2}`;
      const answer = num1 * num2;
      const answerGame = cons(question, answer);
      return answerGame;
    } default: {
      console.log('no symbol');
    }
  }
};

export default structureGame(task, calcGame);
