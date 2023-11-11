var age = 16;
console.log(age);

var Name="Illia";
console.log(Name);

var isStudent = true || false;
console.log(isStudent = true);

var myString = "practice makes perfect";
console.log(myString);

let myNumber = 25;
console.log(myNumber + 10);

var myNull = null;
console.log(myNull);

const promptt = prompt("введіть своє ім'я:");
alert("ласкаво просимо на наш сайт, " + promptt);
console.log(promptt);

let session = confirm("Ви впевнені, що хочете передати всю вашу власність автору цього коду?");
if (session) {
    alert("Дякую за підтвердження!");
  }
else {
    alert("Дію відмінено.")
}

alert("⚠️ Дія може бути небезпечною. Бажаєте проджовжити?")
let second_session = confirm("Виконати у будь-якому випадку?")
if (second_session) {
    alert("Дякую за підтвердження!");
  }
else {
    alert("Дію відмінено.")
}