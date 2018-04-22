import { structureGame } from '../index';

const task = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

export const gcdGame = () => {
  const randomNum = [(Math.floor(Math.random() * 100)), (Math.floor(Math.random() * 100))];
  const question = `${randomNum[0]}   ${randomNum[1]}`;
  const answer = String(gcd(randomNum[0], randomNum[1]));
  const answerGame = [question, answer];
  return answerGame;
};

export default structureGame(task, gcdGame);
