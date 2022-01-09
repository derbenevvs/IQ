let counterQuestions = 0;
let questionNumber = 0;

let startFunction = () => {
document.querySelector(".index_button").remove()
startTest();
};

let startTest = () => {
    if(counterQuestions > 0){
            
            document.querySelector(".centerQuestions").remove();
            document.querySelector(".answersQuestions").remove();
            document.querySelector(".index_button").remove();
            document.querySelector(".questionsTimeTest").remove();
            document.querySelector(".questionsTimeTest").remove();
            document.querySelector(".header_bottom").remove();

    };
    questionsTest();
    counterQuestions++;
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
buttonQuestions.innerHTML = "<p>Следующий вопрос</p>";
buttonQuestions.onclick = startTest;
questionsCounter();
};

let questionsCounter = () => {


    let headerBottom = document.createElement("div");
    headerBottom.classList.add("header_bottom");
    document.querySelector(".header").append(headerBottom);

    let questionsNumber = document.createElement("div");
    let timeTest = document.createElement("div");

    questionsNumber.classList.add("questionsTimeTest");
    timeTest.classList.add("questionsTimeTest");

    document.querySelector(".header_bottom").append(questionsNumber);
    document.querySelector(".header_bottom").append(timeTest);

    questionsNumber.innerHTML = `<p>Вопрос ${counterQuestions+1} из ${mas.length}</p>`;
}
