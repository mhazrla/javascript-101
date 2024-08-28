// Document Object Model
// const hello = document.getElementsByClassName("intro");
// console.log(hello);

const content = document.getElementById("content");
const second = document.getElementById("second");
// console.log(content);
content.removeChild(second);

const last = document.createElement("li");
// textcontent = menambahkan text ke dalam element
// innerText = replace text lama dengan yang baru
// innerHtml = replace p div
last.textContent = "ini yang terakhir";
content.appendChild(last);

// const inputan = document.getElementById("inputan");
// inputan.value = "Hallo";
// inputan.onclick = function () {
//   inputan.value = "Hello";
// };

const buttons = document.querySelectorAll("input");
const canvas = document.getElementById("canvas");
console.log(buttons);
for (let tombol of buttons) {
  tombol.onclick = function () {
    canvas.style.transition = "1s";
    canvas.style.backgroundColor = tombol.value;
  };
}

function randomColor() {
  return (
    "#" + ("000000" + ((Math.random() * 0xffffff) << 0).toString(16)).slice(-6)
  );
}

function setColor() {
  document.getElementById("canvas").style.backgroundColor = randomColor();
  setTimeout(setColor, 1000);
}

setColor();

function clickMe() {
  alert("OK");
}
// tombol.onclick = function () {
//   prompt("Enter your name");
//   confirm("Are you sure?");
// };

const lampu = document.getElementById("lampu");
let state = false;

function aksiLampu() {
  if (state == false) {
    lampu.src = "https://i.ibb.co/qjSGTLb/light-bulb-on.png";
    lampu.style.transition = "1s";
    lampu.style.width = "250px";
    state = true;
  } else if (state == true) {
    lampu.src = "https://i.ibb.co/SKpnxzn/light-bulb-off.png";
    state = false;
    lampu.style.transition = "1s";
    lampu.style.width = "200px";
  }
}
