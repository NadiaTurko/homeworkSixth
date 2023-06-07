// Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
// <body>
//   main class="mainClass check item">
//      <div id="myDiv">
//          <p>First paragraph</p>
//      </div>
//  </main>
// </body>
//1 спосіб

// document.body.innerHTML = `<main class="mainClass check item">
//     <div id="myDiv">
//         <p>First paragraph</p>
// </div>
//  </main>`;

//2 спосіб

document.body.innerHTML = "";

const main = document.createElement("main");
main.className = "mainClass check item";
const div = document.createElement("div");
div.id = "myDiv";
main.append(div);
div.innerHTML = "<p>First paragraph</p>";

document.body.appendChild(main);
