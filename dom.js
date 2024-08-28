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

for (let tombol of buttons) {
  tombol.onclick = function () {
    canvas.style.backgroundColor = tombol.value;
  };
}

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
    state = true;
  } else if (state == true) {
    lampu.src = "https://i.ibb.co/SKpnxzn/light-bulb-off.png";
    state = false;
  }
}
