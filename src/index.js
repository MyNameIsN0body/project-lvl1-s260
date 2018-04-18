import readlineSync from 'readline-sync';

export const hello = () => {
	const userName = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${userName} !`); 
};
const randomNumber = () => {
	const number = Math.floor(Math.random() * 10000);
	return number.toFixed(); 

};

export const evenGame = () => {
	let countAnswer = 0;
	while (countAnswer <= 3){
		let number = randomNumber();
		console.log(`Question: ${number}`);		
		const answer = readlineSync.question(`Your answer: `);
		if (countAnswer == 3){
			return console.log(`Congratulations, {userName}!`);		
		}
		if (answer == 'yes' && number%2 ==0) {
			countAnswer++; 
			console.log('Correct!'); 
		} else if (answer == 'no' && number%2 !==0){
			countAnswer++;
			console.log('Correct!');
		} else {
			return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\n
			Let's try again, {userName}!`);
		}
		
	}
	
	  
};