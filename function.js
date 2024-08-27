/* 
Function
1. function namaFunction(){}
2. let cetakNama = function() {} // function expression
3. Arrow function
let cetakNama = () => {}
*/

// function printHari() {
//   console.log("Hari ini adalah hari senin");
// }

// printHari();
// printHari();
// printHari();

function cetakHari(hari) {
  console.log("Hari ini adalah hari ", hari);
}

// cetakHari("Selasa");
// cetakHari("Rabu");
// cetakHari("Ksamois");

// cetakHari("Rabu");

// function cetakDataDiri(nama = "Adam", umur) {
//   console.log("Halo nama saya ", nama, " Saya berumur", umur);
//   console.log(`Halo nama saya ${nama} Saya berumur ${umur}`);
// }

// cetakDataDiri(undefined, 16);
// let perkalian; // undefined
// function hitungDuaAngka(x, y) {
//   perkalian = x * y; // 2
// }

// console.log("sebelum function diujalankan", perkalian);
// hitungDuaAngka(2, 2);
// console.log("setelah function diujalankan", perkalian);
// console.log(hitungDuaAngka(2, 5));

// rest parameter = untuk menampung banyak value

// function hitungBanyakAngka(nama, ...angka) {
//   let result = 0;

//   for (let x of angka) {
//     console.log("nilai yang akan ditambahkan", x);
//     result += x;
//     console.log("hasil dari penjumlahan di dalam looping: ", result);
//   }

//   console.log("Hasil akhirnya adalah ", result);
//   console.log(nama);
//   console.log(angka);
// }

// hitungBanyakAngka("Adam", 1, 2, 3, 4, 5);

// hitungBanyakAngka(1, 2, 3, 4, 5);

// let cetakNama = function (...angka) {
//   console.log("Nama saya adalah", angka);
// };

// cetakNama("Adam", "Joko");

// let cetakNama = (...karakter) => {
//   console.log("Hello world ", karakter);
// };

// cetakNama("AB", "BC", "CD");

// let printNama = function cetakNama() {
//   console.log("Halo");
// };

// printNama()

const printNama = (a, b, c) => {
  console.log(a, b, c);
  console.log("Halo");
};

printNama(1, 2, 3);
