const tinggiBadan = [155, 170, 175, 165, 172, 158, 170, 175, 166, 168];

console.log("Menampilkan isi array dengan pengulangan biasa:");

for (let i = 0; i < tinggiBadan.length; i++) {
  console.log(tinggiBadan[i]);
}

console.log("\n");

console.log("Menampilkan isi array dengan 'for of':");
for (let x of tinggiBadan) {
  console.log(x);
}
