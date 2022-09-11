

const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
input.addEventListener("input", fn1);
function fn1(event) {
  text.style.fontSize = `${event.target.value}px`;
}