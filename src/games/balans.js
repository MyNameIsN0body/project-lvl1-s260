import { structureGame, randomNumber } from '../index';

const task = 'Balance the given number.';

const balanced = (arr) => {
  const arrChar = String(arr).split('').sort();
  let arrMax = arrChar[arrChar.length - 1];
  let arrMin = arrChar[0];
  if (arrMax - arrMin > 1) {
    arrMax -= 1;
    arrMin += 1;
    const newArryChar = arrChar.slice(1, arrChar.length - 1);
    const emptyArr = [];
    const newArray = emptyArr.concat(arrMin, newArryChar, arrMax).join('');
    return balanced(newArray);
  }
  return arrChar.join('');
};

const balansGame = () => {
  const question = randomNumber();
  const answer = String(balanced(question));
  const answerGame = [question, answer];
  return answerGame;
};

export default structureGame(task, balansGame);
