let score = 100;
//score = "one hundred";

function printScore(value: number = score) {
	console.log(value.toFixed(2));
}
printScore();