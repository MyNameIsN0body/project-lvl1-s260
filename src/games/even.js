import { cons } from 'hexlet-pairs';
import { randomNumber, structureGame } from '../index';


const task = 'Answer "yes" if number even otherwise answer "no".\n';
//const task = cons(task1, null);

export const evenGame = () => {
  const question = randomNumber();
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  // const answerGame = cons(question, correctAnswer);
  const answerGame = [question, correctAnswer];
  return answerGame;
};
export default structureGame(task, evenGame);
