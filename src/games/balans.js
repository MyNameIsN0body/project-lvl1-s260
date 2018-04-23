import { structureGame, randomNumber } from '../index';

const task = 'Balance the given number.';

const balanced = (str) => {
  const arrNum = String(str).split('').sort();
  let arrMax = arrNum[arrNum.length - 1];
  let arrMin = arrNum[0];
  if (arrMax - arrMin > 1) {
    arrMax--;
    arrMin++;
    const arr7 = arrNum.slice(1, arrNum.length - 1);
    const NA = [];
    const newArray = NA.concat(arrMin, arr7, arrMax).join('');
    return balanced(newArray);
  }
  return arrNum.join('');
};
//   const arrChar = String(arr).split('').sort();
//   let arrMax = arrChar[arrChar.length - 1];
//   let arrMin = arrChar[0];
//   if (arrMax - arrMin > 1) {
//     arrMax -= 1;
//     arrMin += 1;
//     const newArryChar = arrChar.slice(1, arrChar.length - 1);
//     const emptyArr = [];
//     const newArray = emptyArr.concat(arrMin, newArryChar, arrMax).join('');
//     return balanced(newArray);
//   }
//   return Number(arrChar.join(''));
// };

export const balansGame = () => {
  const question = randomNumber();
  const answer = balanced(question);
  const answerGame = [question, answer];
  return answerGame;
};

export default structureGame(task, balansGame);

