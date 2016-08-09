function randomNumber(low, high){
	return Math.round(low + (high -low) * Math.random());
}
var number = 2

var answer = randomNumber(0, 10);
var totalGuess = number;
$('body').append('<h4>Computer: ' + answer + '</h4>')

function checkGuess(input) {
	if(input === answer){
		console.log("Correct Answer")
		winner();
	} else if (input > answer){
		console.log("you are too high")
	} else {
		console.log("you are too low")
	}
}

//reset the game
function reset(){
	answer = randomNumber(0,10);
	totalGuess = number;
	$('body').append('<h4>Computer: ' + answer + '</h4>')
	$('.guessBtn').attr("disabled", false)
	$('.guessleft').text(totalGuess);
}

function winner(){
	$('.resetBtn').text("Play Again")
	$('.numbersGuess').text("")
	$('.numbersGuess').append('<p>Correct!</p>')
}

function gameOver(){
	if(totalGuess === 0){
		$('body').append('<h4> GAME OVER </h4>')
		$('.resetBtn').html("Try Again")
		
	}
}

function displayGuess(input){
	$('.numbers').append('<span>' + input + '<span>')
}

$('.guessBtn').click(function (){
	var input = Number($('input').val())
	checkGuess(input)
	totalGuess --
	$('.guessleft').text(totalGuess)
	$('input').val("")
	displayGuess(input)
	gameOver()
})

$('.resetBtn').click(function (){
	reset()
})




