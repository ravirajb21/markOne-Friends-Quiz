var readLineSync = require('readline-sync');

var score = 0;

var userName = readLineSync.question("What is your name ? ");

console.log("Welcome "+ userName +" to DO YOU KNOW Raviraj ?");

var highScores = [{
  Name: "Yash",
  Score: 3
  },
  {
  Name:"Harshal",
  Score: 2
 }
];

function play(question, answer){
  
  var userAnswer = readLineSync.question(question);

  if(userAnswer.toUpperCase() == answer.toUpperCase()){
    console.log("Right!!");
    score++;
  }
  else{
    console.log("Wrong!");
  } 
  console.log("Current Score: "+score);
  console.log("------*****------");
  console.log("\n");
}

var questions = [{
    question: "Where do I live? ",
    answer:"Pune",
  },
  {
    question: "Where do I work? ",
    answer:"TCS"
  },
  {
    question: "What is my favorite sport? ",
    answer:"Cricket"
  } 
];

for(var i = 0; i < questions.length; i++){
  play(questions[i].question, questions[i].answer);
}

console.log("Whoah! You scored:"+ score)
console.log("\n");

console.log("See the high scores below. If yours is better, ping me. I'll update.");

for(var i = 0; i < highScores.length; i++){
  console.log(highScores[i].Name +" : "+ highScores[i].Score);
}