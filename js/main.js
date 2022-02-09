let counterQuestions = 0;
let questionNumber;
let questionNumberTotal = 7;
let resultUser = 0;
let answersMas =[];
let answersTestMas = [];

let questionNumberRound =() => {questionNumber =Math.round(Math.random() * ((mas.length-1) - 0) + 0) // вставить рандомное значение
return questionNumber}; 

let startFunction = () => {
document.querySelector(".index_button").remove()
startTest();
};

questionNumberRound();

let startTest = () => { // Вывод вопроса
  
  // startFunction();

  if(mas.length <= 0){
    return resultTotal();
  };

  removalBlock();
  questionsTest();
   
  counterQuestions++;

  answersTestMasFunction();

  mas.splice(questionNumber, 1);
  questionNumberRound();

    };

let questionsTest = () => { // создание вопраса (верстка, классы)

let centerQuestions = document.createElement("div");
let answersQuestions = document.createElement("div");
let buttonQuestions = document.createElement("button");

centerQuestions.classList.add("centerQuestions");
answersQuestions.classList.add("answersQuestions");
buttonQuestions.classList.add("index_button");

 
document.querySelector(".center").append(centerQuestions);
document.querySelector(".center").append(answersQuestions);

centerQuestions.innerHTML = mas[questionNumber].questionTest; 

// answersTestMas = mas[questionNumber.answerRight];
// console.log(answersTestMas);

if(mas[questionNumber].choiceAnswer == false){
    answersQuestions.innerHTML = mas[questionNumber].answerUser;
    // document.querySelector(".center").append(buttonQuestions);

    for(let cardAnswer of document.querySelectorAll(".answerCard")){
    // cardAnswer.onclick = functionMasResult;
    cardAnswer.addEventListener("mouseenter", borderBlue); // переработать
    cardAnswer.addEventListener("mouseleave", borderBlueNull); // переработать
     cardAnswer.addEventListener("click", startTest);
    
    };
    
}else if(mas[questionNumber].choiceAnswer == true){
     
   answersQuestions.innerHTML = '<input id="numbInput" class="answerUserInput" type="text"><button class="index_button_2" onclick="functionMasResult(); startTest()">Следующий вопрос</button>';
};

buttonQuestions.innerHTML = "<p>Следующий вопрос</p>";
buttonQuestions.onclick = startTest; 

questionsCounter();

};

function functionMasResult(a){ // переработать, вставить проверку
    var userAnswer;
    // console.log(a.className);
    // if(document.querySelector(".answerCard").id == 1){
      // if(a.className == "answerCard"){
        if(a != undefined){
      userAnswer = a.id;
      // answersMas.push(userAnswer);
    }else{
      userAnswer = document.getElementById("numbInput").value; // получает значение из окна input
    };

    answersMas.push(userAnswer);
    console.log(answersMas);
};

function answersTestMasFunction(){ // формирует массив с правильнымы ответами
  answersTestMas.push(mas[questionNumber].answerRight);
  console.log(answersTestMas);
  return answersTestMas;
};
// function borderRed(){ // красная рамка при клике
//   this.classList.add("answerCardBorder");
//   functionMasResult();
// };

function borderBlue(){ // синяя рамка при наведении
  this.classList.add("answerCardBorder_2");
};

function borderBlueNull(){ // убирает синюю рамку при наведении
  this.classList.remove("answerCardBorder_2");
};

let questionsCounter = () => { // функци с счетчиком вопросов. таймер - добавить.

    let headerBottom = document.createElement("div");
    headerBottom.classList.add("header_bottom");
    document.querySelector(".header").append(headerBottom);

    let questionsNumber = document.createElement("div");
    let timeTest = document.createElement("div");

    questionsNumber.classList.add("questionsTimeTest");
    timeTest.classList.add("questionsTimeTest");

    document.querySelector(".header_bottom").append(questionsNumber);
    document.querySelector(".header_bottom").append(timeTest);

    questionsNumber.innerHTML = `<p>Вопрос ${counterQuestions+1} из ${questionNumberTotal}</p>`;
};

let removalBlock = () => { // Удаляет блоки
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
};
let resultTotal = () => { // Вывод результата
  removalBlock();
  console.log("Итог!");
  let centerQuestions = document.createElement("div");
  centerQuestions.classList.add("centerQuestions");
  document.querySelector(".center").append(centerQuestions);
  centerQuestions.innerHTML = `<p>${masResult[0].textResult}</p>`; // Внести условие 
};