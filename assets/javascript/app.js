var number = 30;
var intervalId;
var correctAnswers = 0;
var incorrectAnswers = 0;
var trivia = {
	question: "What fruit is tangy?",
	choices: [{
		answer: "Banana",
		correct: false
	}, {
		answer: "Apple",
		correct: false
	}, {
		answer: "Tomato",
		correct: false
	}, {
		answer: "Orange",
		correct: true
	}]
}
var questionSet = {
	
}
$("#time-remaining").html("30 seconds left");
function decrement() {
	number--;
	$("#time-remaining").html(number + " seconds left");
	if(number == 0) {
		stop();
	}
}
function stop() {
      clearInterval(intervalId);
    }
function loadQuestion(quad) {
	$("#question").html(quad.question);
	$("#c-1").html(quad.choices[0].answer);
	$("#c-1").attr("value", quad.choices[0].correct);
	$("#c-2").html(quad.choices[1].answer);
	$("#c-2").attr("value", quad.choices[1].correct);
	$("#c-3").html(quad.choices[2].answer);
	$("#c-3").attr("value", quad.choices[2].correct);
	$("#c-4").html(quad.choices[3].answer);
	$("#c-4").attr("value", quad.choices[3].correct);
	$("#score").html("Correct answers: " + correctAnswers + " Incorrect answers " + incorrectAnswers);
}
function logAnswer() {
	var namek = $(this).attr("value");
	console.log(namek);
	if(namek == false) {
		incorrectAnswers++;
		alert("Incorrect");
		newQuestion();
		loadQuestion(trivia);
	}
	else {
		correctAnswers++;
		alert("Correct");
		newQuestion();
		loadQuestion(trivia);
	}
}
function newQuestion(a, b1, b2, c1, c2, d1, d2, e1, e2) {
	trivia[0] = a;
	trivia.choices[0].answer = b1;
	trivia.choices[0].correct = b2;
	trivia.choices[1].answer = c1;
	trivia.choices[1].correct = c2;
	trivia.choices[2].answer = d1;
	trivia.choices[2].correct = d2;
	trivia.choices[3].answer = e1;
	trivia.choices[3].correct = e2;
}
intervalId = setInterval(decrement, 1000);
$(document).on("click", ".choice", logAnswer);
loadQuestion(trivia);




