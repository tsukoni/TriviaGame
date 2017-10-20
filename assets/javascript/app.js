var number = 30;
var intervalId;
var correctAnswers = 0;
var incorrectAnswers = 0;
var currentAnswer;
/*var trivia = {
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
}*/
$("#time-remaining").html("30 seconds left");
//default text
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
      clearInterval(intervalId);
    }
function loadQuestion(x) {
	number = 30;
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
function logAnswer() {
	var namek = $(this).attr("value");
	console.log(namek);
	if(namek != currentAnswer) {
		incorrectAnswers++;
		alert("Incorrect");
		
	}
	else {
		correctAnswers++;
		alert("Correct");
	
	}
}


$(document).on("click", ".choice", logAnswer);

for (var i = 0; i < questionSet.length; i++) {

	intervalId = setInterval(decrement, 1000);
	if(number == 0) {
		incorrectAnswers++;
		alert("No answer");
		loadQuestion(i);
	}
}




