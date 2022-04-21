const quizDB=[
{
   question:"Q1:What type of javascript language is___",
   a:"Object-Oriented",
   b:"Object-Based",
   c:"Assembly-Language",
   d:"High-Level",
   ans:"ans1"
    
},{
    question:"Q2:Which of the following also known as conditional exprtession.",
    a:"Alternative to if-else",
    b:"Switch Statement",
    c:"if-then-else statement",
    d:"immidiate if",
    ans:"ans4",
},{
    question:"Q3:Which of the following keyword is used to define a variable in javascript?",
    a:"Var",
    b:"let",
    c:"Both A and B",
    d:"None of the above",
    ans:"ans3",
},{
    question:"Q4:Which of the following method is used to access HTML element using javascript?",
    a:"getElementbyid()",
    b:"getElementByClassName",
    c:"Both A and B",
    d:"None of the above",
    ans:"ans3",
},{
    question:"Q5:What keyword is used to check whether a given property is valid or not?",
    a:"in",
    b:"is in",
    c:"exists",
    d:"lies",
    ans:"ans1"
}]
const question=document.querySelector(".question");
const Option1 =document.querySelector("#Option1");
const Option2 =document.querySelector("#Option2");
const Option3 =document.querySelector("#Option3");
const Option4 =document.querySelector("#Option4");
const submit  =document.querySelector("#submit");
const answers=document.querySelectorAll(".answer");
const showScore=document.querySelectorAll("#showscore");

let questionCount =0;
let score=0;

const loadQuestion = () =>{

const questionList = quizDB[questionCount];
question.innerText = questionList.question;
Option1.innerText = questionList.a;
Option2.innerText = questionList.b;
Option3.innerText = questionList.c;
Option4.innerText = questionList.d;


}

loadQuestion();
const getCheckAnswer = () => {
    let answer;

    


    answers.forEach ((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
       
        }
        
       });
       return answer;
};
const deSelectAll = () =>{
    answers.forEach((curAnsElem) =>curAnsElem.checked = false);

}
submit.addEventListener('click', () =>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer==quizDB[questionCount].ans){
    score++
    };
    questionCount++;
    deSelectAll();
if(questionCount < quizDB.length ){
    loadQuestion();
}else{
    showscore.innerHTML =`
    <h3>You Scored  ${score}/${quizDB.length}&#9996; </h3>
    <button class="btnn" onclick ="location.reload()" >play again</button>
`;
showscore.classList.remove('scoreArea');
}
});


