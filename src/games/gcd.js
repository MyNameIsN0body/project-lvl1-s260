import structureGame from '../index';

const task = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

export const gcdGame = () => {
  const randomNum1 = Math.floor(Math.random() * 100);
  const randomNum2 = Math.floor(Math.random() * 100);
  const question = `${randomNum1}   ${randomNum2}`;
  const answer = String(gcd(randomNum1, randomNum2));
  const answerGame = [question, answer];
  return answerGame;
};

export default structureGame(task, gcdGame);
