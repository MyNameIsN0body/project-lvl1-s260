import readlineSync from 'readline-sync';


const countRounds = 3;
const negative = ' is wrong answer ;(. Correct answer was ';
const structureGame = (task, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${task}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName} !\n`);

  const interview = (rounds) => {
    if (rounds === 0) {
      return console.log(`Congratulations, ${userName}!\n`);
    }
    const startGame = game();
    const gameQuestion = startGame[0];
    const gameAnswer = startGame[1];
    console.log(`Question: ${gameQuestion}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (gameAnswer !== playerAnswer) {
      return console.log(`"${playerAnswer}" ${negative} "${gameAnswer}" .\n Let's try again, ${userName}!\n`);
    }
    console.log('Correct!');
    return interview(rounds - 1);
  };
  return interview(countRounds);
};

export default structureGame;
