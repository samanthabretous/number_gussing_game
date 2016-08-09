function randomNumber(low, high){
	return Math.round(low + (high -low) * Math.random());
}
var number = 5

var answer = randomNumber(0, 10);
var totalGuess = number;
console.log(answer)

function checkGuess(input) {
	if(input === answer){
		$(".hotOrCold").text("Correct Answer")
		winner();
	} else if (input > answer){
		$(".hotOrCold").text("you are too high")
	} else {
		$(".hotOrCold").text("you are too low")
	}
		totalGuess --
}

//reset the game
function reset(){
	answer = randomNumber(0,10);
	totalGuess = number;
	$('.inputDiv').removeClass("hide");
	$('.guessBtn').attr("disabled", false)
	$(".hotOrCold").text("")
	$('.guessleft').text(totalGuess);
	$('span').remove();
}

function winner(){
	$('.guessBtn').attr("disabled", true)
	$('.resetBtn').text("Play Again")
}

function gameOver(){
	if(totalGuess === 0){
		$('.guessBtn').attr("disabled", true)
		$('.inputDiv').addClass("hide");
		$(".hotOrCold").text('OH NO! You were not able to guess the right number. Do you want to try again?')
		$(".hotOrCold").append('<button class="yes">Yes</button>')
		$(".hotOrCold").append('<button class="no">No</button>')
		$('.resetBtn').html("Try Again")
		
	}
}

function displayGuess(input){
	$('.numbers').append('<span>' + input + '<span>')
}


$('.guessBtn').click(function (){
	var input = Number($('input').val())
	checkGuess(input)
	$('.guessleft').text(totalGuess)
	$('input').val("")
	displayGuess(input)
	gameOver()
})


$('.resetBtn').click(function (){
	reset()
})

$(document).on("click", ".yes", function (){
	reset()
})

$(document).on("click", ".no", function (){
	$(".hotOrCold").text("Sad to see you go!! Good luck on your next adventure")
})




