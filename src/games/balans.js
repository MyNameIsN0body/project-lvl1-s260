import { structureGame, randomNumber } from '../index';

const task = 'Balance the given number.';

const balanced = (str) => {
  const arrNum = String(str).split('').sort();
  let arrMax = arrNum[arrNum.length - 1];
  let arrMin = arrNum[0];
  if (arrMax - arrMin > 1) {
    arrMax = Number(arrMax) - 1;
    arrMin = Number(arrMin) + 1;
    const arrMiddle = arrNum.slice(1, arrNum.length - 1);
    const emptyArr = [];
    const newArray = emptyArr.concat(arrMin, arrMiddle, arrMax).join('');
    return balanced(newArray);
  }
  return arrNum.join('');
};


export const balansGame = () => {
  const question = randomNumber();
  const answer = balanced(question);
  const answerGame = [question, answer];
  return answerGame;
};

export default structureGame(task, balansGame);

