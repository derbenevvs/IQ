let counterQuestions = 0;
let questionNumber = 0; // вставить рандомное значение
let resultUser = 0;

let startFunction = () => {
document.querySelector(".index_button").remove()
startTest();
};

let startTest = () => {
   
    if(counterQuestions > 0){
            
            document.querySelector(".centerQuestions").remove();
            document.querySelector(".answersQuestions").remove();
            document.querySelector(".questionsTimeTest").remove();
            document.querySelector(".questionsTimeTest").remove();
            document.querySelector(".header_bottom").remove();

            if(document.querySelector(".index_button") != null){
                document.querySelector(".index_button").remove();
            };
    };
    
    questionsTest();
   
    counterQuestions++;
    questionNumber++;

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

centerQuestions.innerHTML = mas[questionNumber].questionTest; 

if(mas[questionNumber].choiceAnswer == false){
    answersQuestions.innerHTML = mas[questionNumber].answerUser;
    document.querySelector(".center").append(buttonQuestions);

    for(let cardAnswer of document.querySelectorAll(".answerCard")){
    cardAnswer.onclick = myControl;
    };
  
}else if(mas[questionNumber].choiceAnswer == true){
     
   answersQuestions.innerHTML = '<input id="numbInput" class="answerUserInput" type="text"><button class="index_button_2" onclick="myFunction(); startTest()">Следующий вопрос</button>';
};

buttonQuestions.innerHTML = "<p>Следующий вопрос</p>";
buttonQuestions.onclick = startTest; 

questionsCounter();

};

function myFunction() { // переработать, вставить проверку
    var x;
    x = document.getElementById("numbInput").value;
    console.log(x);
    console.log("Привет!");

  }

  function myControl(){ // переработать, вставить проверку
    console.log("Привет!");
      this.classList.add("answerCardBorder");

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

    questionsNumber.innerHTML = `<p>Вопрос ${questionNumber+1} из ${mas.length}</p>`;
};
