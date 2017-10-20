var number = 20;
var timer;
var correctAnswers = 0;
var incorrectAnswers = 0;
var currentAnswer;
var currentQuestion = 0;


var questionSet = [
	{question: "Which fruit is tangy?", 
	options:["Banana","Apple", "Tomato", "Orange"], 
	answer:"Orange"},

	{question: "What god is not known for thunder?", 
	options:["Zeus","Thor", "Susanoo", "Shiva"], 
	answer:"Shiva"},

	{question: "Which rock is the hardest?", 
	options:["Obsidian","Diamond", "Quartz", "Topaz"], 
	answer:"Diamond"},

	{question: "What are the 3 wise monkeys not known for?", 
	options:["See no evil","Hear no evil", "Feel no evil", "Speak no evil"], 
	answer:"Feel no evil"},

	{question: "What hero has no super powers?", 
	options:["Iron Man","Green Lantern", "Spider-Man", "Flash"], 
	answer:"Iron Man"}
]

function decrement() {
	number--;
	$("#time-remaining").html(number + " seconds left");
	
}
function stop() {
      clearInterval(timer);
}


function loadQuestion(x) {
	number = 20;
	timer = setInterval(decrement, 1000);
	$("#question").html(questionSet[x].question);
	currentAnswer = questionSet[x].answer;
	$("#c-1").html(questionSet[x].options[0]);
	$("#c-1").attr("value", questionSet[x].options[0]);
	$("#c-2").html(questionSet[x].options[1]);
	$("#c-2").attr("value", questionSet[x].options[1]);
	$("#c-3").html(questionSet[x].options[2]);
	$("#c-3").attr("value", questionSet[x].options[2]);
	$("#c-4").html(questionSet[x].options[3]);
	$("#c-4").attr("value", questionSet[x].options[3]);
	$("#score").html("Correct answers: " + correctAnswers + " Incorrect answers: " + incorrectAnswers);

}
function logAnswer(x) {
	console.log(x);
	if(number > 0) {
		if(x != currentAnswer) {
			incorrectAnswers++;
			$("#score").html("Correct answers: " + correctAnswers + " Incorrect answers: " + incorrectAnswers);
			stop();
			alert("Incorrect");
		}
		else {
			correctAnswers++;
			$("#score").html("Correct answers: " + correctAnswers + " Incorrect answers: " + incorrectAnswers);
			stop();
			alert("Correct");
	
		}
	}
}


$(document).on("click", ".choice", function(){
	var namek = $(this).attr("value");
	logAnswer(namek);
	
	currentQuestion++;
	if(currentQuestion < questionSet.length) {
		loadQuestion(currentQuestion);
	}
	else {
		alert("You scored " + correctAnswers + " out of 5");
	}
	

});

loadQuestion(0);
if(number == 0) {
	incorrectAnswers++;
	$("#score").html("Correct answers: " + correctAnswers + " Incorrect answers: " + incorrectAnswers);
	stop();
	alert("No answer");
}
/*for (var i = 0; i < questionSet.length; i++) {

	
	if(number == 0) {
		incorrectAnswers++;
		alert("No answer");
		loadQuestion(i);
	}
}*/




