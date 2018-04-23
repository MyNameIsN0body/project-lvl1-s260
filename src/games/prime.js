import { structureGame } from '../index';

const task = 'Is this number prime? \'yes\' or \'no\'';

export const primeGame = () => {
  const isPrime = (num) => {
    if (num < 2) {
      return 'no';
    }
    for (let i = 2; i < num / 2; i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  const question = Math.floor(Math.random() * 1000);
  const answer = isPrime(question);
  const answerGame = [question, answer];
  return answerGame;
};

export default structureGame(task, primeGame);
