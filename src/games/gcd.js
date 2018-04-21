import { cons, car, cdr } from 'hexlet-pairs';
import { structureGame } from '../index';

const task = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

export const gcdGame = () => {
  const randomNum = cons((Math.floor(Math.random() * 100)), (Math.floor(Math.random() * 100)));
  const question = `${car(randomNum)}   ${cdr(randomNum)}`;
  const answer =  String(gcd(car(randomNum), cdr(randomNum)));
  const answerGame = [question, answer];
  return answerGame;
};

export default structureGame(task, gcdGame);
