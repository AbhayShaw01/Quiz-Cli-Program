var readlineSync = require('readline-sync');
var userInput = readlineSync.question("What is your name? ");
console.log("Hello " + userInput + "!");
console.log("Welcome to the quiz!");
console.log("You will be asked 3 questions. You will get 1 point for each correct answer.");
console.log("You will lose 1 point for each incorrect answer.");
var check = readlineSync.question("Before Starting !!Tell us if you know Abhay( Type Yes or No).").trim.toUpperCase()
if (check == "YES") {
    console.log("Great! Let's start the quiz");

}
else {
    console.log("No problem! This game is not meant for you.");
    return 0;
}
var score = 0;
var player_list = [{name:'Abhi',value:2},{name:'Vivan',value:1}];
function play(userInput) {

    var questions = [{//array of objects    
        question: "Where does Abhay live?",
        answer: "MUMBAI"
    },
    {
        question: "What is Abhay's favourite food?",
        answer: "PIZZA"
    },
    {
        question: "What is Abhay's favourite sport?",
        answer: "CRICKET"
    }
    ];
    for (var i = 0; i < questions.length; i++) {//loop to check if user input is equal to the answer
        var currentQuestion = questions[i];
        var userAnswer = readlineSync.question(currentQuestion.question);
        if (userAnswer === currentQuestion.answer) {
            console.log("You are right!");
            score++;
        }
        else {
            console.log("You are wrong!");
            score--;
        }
        console.log("Your score is " + score);
    }
    console.log("Your final score is " + score);
    
    player_list.push({ name: userInput, value: score })
    highscore(player_list)
}


function highscore(list) {
    list.sort((a, b) => b.value - a.value);  
    console.log("The highscore is " + list[0].value + " by " + list[0].name);
    console.log(list)
    
    
}
play(userInput);//function call

