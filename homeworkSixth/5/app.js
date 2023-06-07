/*
1) вибрати всі теги із класом circle

2) перебрати кожен елемент, і вибрати його data-anim значення
3) вибране значення додати як клас за допомогою classList до цього елемента.
4) перевірити чи застосувались анімації

- вибірка елемента із DOM дерева
- вибрати клас елемента (https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- вибрати із data атрибута значення і занести те значення
 в клас елемента для якого ми вибрали поточний атрибут
*/
const circles = document.querySelectorAll(".circle");
let dataAnim;
const classCircle = [...circles].forEach((el) => {
  dataAnim = el.getAttribute("data-anim");
  el.classList.add(dataAnim);
  return dataAnim;
});

// 2 спосіб
// const circles = document.querySelectorAll(".circle");
// for (let i = 0; i < circles.length; i++) {
//   let value = circles[i].getAttribute("data-anim");
//   circles[i].classList.add(value);
// }
