let counterQuestions = 0;

let startFunction = () => {
document.querySelector(".index_button").remove()
startTest();
};

let startTest = () => {
        // if(counterQuestions > 0){
    // };
    questionsTest();
};

let questionsTest = () => {

let centerQuestions = document.createElement("div");
let answersQuestions = document.createElement("div");
let buttonQuestions = document.createElement("button");

centerQuestions.classList.add("centerQuestions");
answersQuestions.classList.add("answersQuestions");
buttonQuestions.classList.add("index_button");
 
document.querySelector(".center").append(centerQuestions);
document.querySelector(".center").append(answersQuestions);
document.querySelector(".center").append(buttonQuestions);

};