import structureGame from '../index';
import randomNumber1 from './math';

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
  const question = randomNumber1(1000, 10000);
  const answer = balanced(String(question));
  const answerGame = [question, answer];
  return answerGame;
};

export default structureGame(task, balansGame);

