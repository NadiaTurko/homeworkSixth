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

//1 спосіб
function listNumber() {
  const items = document.getElementsByTagName("li");
  const firstElement = items[0].innerHTML;
  const secondElement = items[4].innerHTML;
  const thirdElement = items[1].innerHTML;
  const fourdtElement = items[3].innerHTML;
  const fifthElement = items[2].innerHTML;

  alert(`Output result : ${firstElement}`);
  alert(`Output result : ${secondElement}`);
  alert(`Output result : ${thirdElement}`);
  alert(`Output result : ${fourdtElement}`);
  alert(`Output result : ${fifthElement}`);
}
listNumber();
