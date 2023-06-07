// На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. У модальному вікні необхідно послідовно вивести вміст:
//      1) першого елемента списку
//      2) останнього елемента списку
//      3) другого елемента списку
//      4) четвертого елемента списку
//      5) третього елемента списку
// Приклад:
// •        1
// •        2
// •        3
// •        4
// •        5
// Результат виводу: 1, 5, 2, 4, 3
// function listNumber() {
//   const listNumber = [];
//   const items = document.getElementsByTagName("li");
//   console.log(items);
//   listNumber[0] = items[0].innerHTML;
//   listNumber[1] = items[4].innerHTML;
//   listNumber[2] = items[1].innerHTML;
//   listNumber[3] = items[3].innerHTML;
//   listNumber[4] = items[2].innerHTML;

//   let liLast = document.createElement("p");
//   liLast.innerHTML = `Результат виводу: ${listNumber}`;
//   list.append(liLast);
// }
// listNumber();

// Для сторінки

// Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано на картинці.
// function styleText() {
//   // let h = document.getElementsByTagName("h1");
//   // //   h1.style.fontSize = "25px";

//   let idParagraph = document.getElementById("myDiv");
//   let idResult = idParagraph.fontcolor("green");
//   let idMyList = document.getElementById("myList");
// }
// styleText();

// Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
// <body>
//   main class="mainClass check item">
//      <div id="myDiv">
//          <p>First paragraph</p>
//      </div>
//  </main>
// </body>

// function myFunction() {
//   let fio = document.querySelector(".arr").value;
//   console.log(fio);

//   //   let phone = document.querySelector(".arr");
//   //   let birthday = document.querySelector("birthday");
//   //   let email = document.getElementsByName("email");

//   //   let out = document.getElementsByClassName("out");
//   //   out.innerHTML = `${fio}${phone}${birthday}${email}`;
//   return (document.querySelector(".out").value = fio);
// }

// <body>
//   <h1>I'am a big header!!!</h1>
//   <div id="myDiv">
//     <p>First paragraph</p>
//     <p>Second paragraph</p>
//     <p>Third paragraph</p>
//     <p>Fourth paragraph</p>
//   </div>
//   <ul id="myList">
//     <li>Make</li>
//     <li>me</li>
//     <li>horizontal!</li>
//   </ul>
//   <span>Make me invisible, please!</span>
// </body>
// 3.
// Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
// html
// <body>
//   main class="mainClass check item">
//      <div id="myDiv">
//          <p>First paragraph</p>
//      </div>
//  </main>
// </body>
const body = document.querySelector("body");
const main = document.createElement("main");
body.append(main);
main.className = "mainClass check item";
const div = document.createElement("div");
div.id = "myDiv";
main.append(div);

div.innerHTML = "<p>First paragraph</p>";
console.log(body);
