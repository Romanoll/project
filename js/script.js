"use strict";

// const result = confirm("Question?");
// console.log(result);

const answer = prompt("Новй вопрос?", "ответ");
console.log(answer);

const answers = [];

answers[0] = prompt("Вопрос1", "");
answers[1] = prompt("Вопрос1", "");
answers[2] = prompt("Вопрос1", "");

document.write(answers);