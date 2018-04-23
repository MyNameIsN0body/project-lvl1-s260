import { structureGame } from '../index';

const randomNumber = (min, max) => Math.floor(Math.random() * max) + min;
const task = 'What number is missing in this progression?';

export const progressionGame = () => {
  const lenArr = 10;
  const newArr = [];
  const startPoint = randomNumber(1, 100);
  const rundStep = randomNumber(1, 17);
  const emptyCell = randomNumber(0, lenArr);

  const createArray = (arr, start, step) => {
    arr.push(start);
    for (let i = 1; i < lenArr; i += 1) {
      arr.push(arr[arr.length - 1] + step);
    }
    return arr;
  };
  let question = createArray(newArr, startPoint, rundStep);
  let answer = question.splice(emptyCell, 1, '..');
  question = question.join(' ');
  answer = answer.join(' ');
  const answerGame = [question, answer];
  return answerGame;
};

export default structureGame(task, progressionGame);
