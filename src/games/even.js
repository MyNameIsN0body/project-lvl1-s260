import structureGame from '../index';
import randomNumber1 from './math';


const task = 'Answer "yes" if number even otherwise answer "no".\n';


export const evenGame = () => {
  const question = randomNumber1(1, 1000);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  const answerGame = [question, correctAnswer];
  return answerGame;
};
export default structureGame(task, evenGame);
