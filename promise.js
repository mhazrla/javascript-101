let kondisi = true;
let janji = new Promise((resolve, reject) => {
  if (kondisi == true) {
    setTimeout(() => {
      resolve("Janji terpenuhi");
    }, 3000);
  } else {
    setTimeout(() => {
      reject("Janji gagal terpenuhi");
    }, 3000);
  }
});

janji
  .then((res) => {
    console.log("Berhasil: ", res);
  })
  .catch((res) => {
    console.log("Gagal: ", res);
  });

console.log("INI HARUSNYA DICETAK AKHIR");
