let kondisi = true;
const cobaPromise = () => {
  return new Promise((resolve, reject) => {
    const waktu = 6000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve("Selesai");
      }, waktu);
    } else {
      setTimeout(() => {
        reject("Gagal!");
      }, waktu);
    }
  });
};

async function panggilPromise() {
  try {
    let data = await fetch("https://jsonplaceholder.typicode.com/todos/");
    let todos = await data.json();
    console.log(todos);
  } catch (error) {
    console.log(error);
  }
}

panggilPromise();
