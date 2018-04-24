import { structureGame } from '../index';

const task = 'Is this number prime?';

export const primeGame = () => {
  const isPrime = (num) => {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i < num / 2; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const question = Math.floor(Math.random() * 1000);
  const answer = isPrime(question) ? 'yes' : 'no';
  const answerGame = [question, answer];
  return answerGame;
};

export default structureGame(task, primeGame);
