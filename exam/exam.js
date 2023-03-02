let myQuiz = 0;
let score = 0;

//Array of Questions Option and Correct answers
const endPage = [
  {
    logo: '<img id="logo" src="cbt-logo.png" alt="Girl in a jacket">',
    remark: "Exam Completed",
    score1: "You scored ",
  },
  {
    remark: "Time Up",
    score1: "You had",
  },
];

const questArray = [
  {
    Question: "1)Who is d president of Nigeria",
    a: "biden",
    b: "buhari",
    c: "Trumb",
    correctAnswer: "buhari",
  },
  {
    Question: "2)Who is d president of USA",
    a: "biden",
    b: "buhari",
    c: "Trumb",
    correctAnswer: "biden",
  },
  {
    Question: "3)Who is d president of Russia",
    a: "biden",
    b: "buhari",
    c: "putin",
    correctAnswer: "putin",
  },
];
// array of end page

//Declaration of variable
const questions = document.getElementById("questions");
const questOption = document.getElementById("questOption");
const logo = document.getElementById("logo");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const submit = document.getElementById("submit");
const btnNext = document.getElementById("btnNext");
const myScore = document.getElementById("score");
const questPage = document.getElementById("questPage");
const examPage = document.getElementById("examPage");
const userName = document.getElementById("userName");
const startQuiz = document.getElementById("startQuiz");
const insBtn = document.getElementById("insBtn");
const instruction = document.getElementById("instruction");
const startPage = document.getElementById("startPage");
const pta = document.getElementById("pta");
const timer = document.getElementById("timer");
const exitIns = document.getElementById("exitIns");
const userValue = document.getElementById("userName");
const remark1 = document.getElementById("remark1");
const remark2 = document.getElementById("remark2");
const userScore = document.getElementById("userScore");
const error = document.getElementById("error");
const timeBox = document.getElementById("timeBox");
const countDiv = document.getElementById("timer2");
// const userName1 = document.getElementById("userName1")
const timeUp = "timeUp";
remark1.innerHTML = endPage[0].remark;
remark2.innerHTML = endPage[1].remark;
userScore.innerHTML = endPage[0].score1 + score;
userScore.innerHTML = endPage[1].score1 + score;
const logon = (logo.style.display = "block");
userValue.style.color = "yellow";
console.log(questions, questOption, error, next, remark1, userScore);
// okksdj
remark2.style.display = "none";
submit.style.display = "none";
insBtn.style.display = "none";
pta.style.display = "none";
timer.style.display = "none";
next.style.display = "none";
previous.style.display = "none";
exitIns.style.display = "none";
remark1.style.display = "none";
userScore.style.display = "none";
error.style.display = "none";
timeBox.style.display = "none";
startQuiz.addEventListener("click", startQuiz1);
//Add event listener to next Button
next.addEventListener("click", nextQuestion);
previous.addEventListener("click", previousQuestion);
submit.addEventListener("click", submitQuiz);
insBtn.addEventListener("click", insBtn1);
exitIns.addEventListener("click", exitInstruction);
// Function for startPage
questions.style.display = "none";
questOption.style.display = "none";
// function to exit instruction page
function exitInstruction() {
  error.style.display = "none";
  userName.style.display = "block";
  startQuiz.style.display = "block";
  insBtn.style.display = "none";
  pta.style.display = "none";
  exitIns.style.display = "none";
}
// Function to accept user input
function startQuiz1() {
  console.log(userValue.value);
  if (userValue.value.length < 3) {
    // alert("userName error")
    error.style.display = "block";
  } else {
    error.style.display = "none";
    userName.style.display = "none";
    startQuiz.style.display = "none";
    insBtn.style.display = "block";
    pta.style.display = "block";
    exitIns.style.display = "block";
    timer.textContent = "Welcome " + userValue.value + "   your time remains";
    userValue.style.color = "yellow";
    // userName1.innerHTML = userValue.value
  }

  // let inst = insBtn.style.display ="block"
  // return inst
}
function insBtn1() {
  questions.style.display = "block";
  questOption.style.display = "block";
  insBtn.style.display = "none";
  pta.style.display = "none";
  timer.style.display = "block";
  next.style.display = "block";
  previous.style.display = "block";
  exitIns.style.display = "none";
  logo.style.display = "none";
  timeBox.style.display = "block";
}
// function for input
// function startQuiz1() {
//     if (userName.value.length < 3) {
//         alert = "userName error"
//     }
// }
// Function to populate d question on d screen
function quizQuest() {
  //Question
  let myQuest = questArray[myQuiz];
  myQuest = shuffle(myQuest);
  let questOne = myQuest.Question;

  questions.innerHTML = questOne;
  //Option
  myOptions = `
    <input type="radio" name="option" value="${myQuest.a}"/> ${myQuest.a} <br/>
    <input type="radio" name="option" value="${myQuest.b}"/> ${myQuest.b} <br/>
    <input type="radio" name="option" value="${myQuest.c}"/> ${myQuest.c} <br/>
    `;
  questOption.innerHTML = myOptions;
}
quizQuest();

//function for next
// function nextQuestion() {
//     let radioCheck = document.querySelector('input[type=radio]:checked')
//     if (!radioCheck) {
//         alert("option")
//         quizQuest()
//     } else {
//         // myQuiz ++
//         if (myQuiz=== questArray.length - 1) {
//             next.style.display = "none"
//             submit.style.display = "block"
//         }
//         // let radioCheck = document.querySelector('input[type=radio]:checked')
//         // if (radioCheck.value === questArray[myQuiz].correctAnswer) {
//         //     score += 5
//         //     console.log(score);
//         // //function for score
//         // myQuiz ++
//         // }
//         myQuiz++
//     quizQuest()
//     }
// }
// function nextQuestion() {
//     let radioCheck = document.querySelector('input[type=radio]:checked')
//     if (radioCheck.value === questArray[myQuiz].correctAnswer) {
//         myQuiz ++
//         score += 5
//         console.log(score);
//         alert("ndnd")
//     }else{
//         myQuiz ++
//         if (myQuiz=== questArray.length - 1) {
//             next.style.display = "none"
//             submit.style.display = "block"
//         }
//     }
//     quizQuest()
// }

function nextQuestion() {
  let radioCheck = document.querySelector("input[type=radio]:checked");

  if (!radioCheck) {
    if (myQuiz === questArray.length - 2) {
      next.style.display = "none";
      submit.style.display = "block";
    }
    myQuiz++;
  } else {
    let radioCheck = document.querySelector("input[type=radio]:checked");
    if (radioCheck.value === questArray[myQuiz].correctAnswer) {
      score += 5;
      console.log(score);
      //function for score
    }
    if (myQuiz === questArray.length - 1) {
      next.style.display = "none";
      submit.style.display = "block";
    }
    myQuiz++;
  }
  quizQuest();
}
console.log(questArray[myQuiz].correctAnswer);
// function for previous
function previousQuestion() {
  let radioCheck = document.querySelector("input[type=radio]:checked");
  if (!radioCheck) {
    next.style.display = "block";
    submit.style.display = "none";
    myQuiz--;
  } else {
    next.style.display = "block";
    submit.style.display = "none";
    myQuiz--;
  }
  quizQuest();
}
// function for submit
submit.addEventListener("click", submitQuiz);
insBtn.addEventListener("click", setTimeout1);
function setTimeout1() {
  const myTimeout = setTimeout(timeOver, 60000 * 3);
  function timeOver() {
    // examPage.textContent = timeUp
    questions.style.display = "none";
    questOption.style.display = "none";
    insBtn.style.display = "none";
    pta.style.display = "none";
    timer.style.display = "none";
    next.style.display = "none";
    timeBox.style.display = "none";
    previous.style.display = "none";
    exitIns.style.display = "none";
    logo.style.display = "block";
    submit.style.display = "none";
    remark1.style.display = "none";
    remark2.style.display = "block";
    userScore.style.display = "block";
    userScore.innerHTML = endPage[1].score1 + `${score}` + " /15";
    clearTimeout(myTimeout);
    timeUp.style.display = "none";
  }
  submit.addEventListener("click", submitQuiz);
  function submitQuiz() {
    clearTimeout(myTimeout);
  }
  var sec = 178,
    secpass,
    countDown = setInterval(function () {
      "use strict";

      secpass();
    }, 1000);
  function secpass() {
    "use strict";

    var min = Math.floor(sec / 60),
      remSec = sec % 60;

    if (remSec < 10) {
      remSec = "0" + remSec;
    }
    if (min < 10) {
      min = "0" + min;
    }
    countDiv.innerHTML = min + ":" + remSec;

    if (sec > 0) {
      sec = sec - 1;
    } else {
      clearInterval(countDown);

      countDiv.innerHTML = "countdown done";
    }
  }
}

submit.addEventListener("click", submitQuiz);
function submitQuiz() {
  // let myTimeout = setTimeout(timeOver, 10000)
  alert("Are u sure?");
  // examPage.textContent = jan + "quiz completed you scored" + `${score}` + "/ 15"
  questions.style.display = "none";
  questOption.style.display = "none";
  insBtn.style.display = "none";
  pta.style.display = "none";
  timer.style.display = "none";
  next.style.display = "none";
  timeBox.style.display = "none";
  previous.style.display = "none";
  exitIns.style.display = "none";
  logo.style.display = "block";
  submit.style.display = "none";
  remark1.style.display = "block";
  userScore.style.display = "block";
  userScore.innerHTML = endPage[0].score1 + `${score}` + " /15";
  clearTimeout(myTimeout);
  timeUp.style.display = "none";
}

console.log(score);
// function submitQuiz() {

//     questPage.textContent = "Completed"
//     // questPage.innerHTML =`You score ${score}`
//   clearTimeout(myTimeout);
// }

/////TIMER

function shuffle(qoutes) {
  let CI = qoutes.length,
    indexQoute,
    tempValue;

  while (CI > 0) {
    indexQoute = Math.floor(Math.random() * CI);
    CI--;
    // swap the last element with CI
    tempValue = qoutes[CI];
    qoutes[CI] = qoutes[indexQoute];
    qoutes[indexQoute] = tempValue;
  }
  return qoutes;
}
