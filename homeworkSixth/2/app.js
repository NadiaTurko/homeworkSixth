// Для сторінки

// Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано на картинці.
function styleText() {
  let h = document.querySelector("h1");
  h.style.fontSize = "55px";
  h.style.background = "green";

  let idParagraph = document.getElementById("myDiv");
  idParagraph.children[0].style.fontWeight = "700";
  idParagraph.children[1].style.color = "red";
  idParagraph.children[2].style.textDecoration = "underline";
  idParagraph.children[3].style.fontStyle = "italic";

  const horizontalList = document.querySelector("#myList");

  horizontalList.style.display = "flex";
  horizontalList.style.listStyle = "none";

  let span = document.querySelector("span");
  span.remove();
}
