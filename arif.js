alert("Welcome to my app");

const value = prompt("Who is your name ?");
alert(`Hello ${value}`);

const verifikasi = confirm("Are you human ?");
if (verifikasi == true) {
  alert("Verified ✔");
} else {
  alert("Not Verified ");
}

const pilihan = prompt(
  "1. Penjumlahan\n2. Pengurangan\n 3. Perkalian\n 4. Pembagian\n 5. Pangkat2\n 6. Akar Pangkat 2\n 7. Akar Pangkat 3"
);

let result;
switch (pilihan) {
  case "1":
    let a = parseInt(prompt("Masukkan angka pertama"));
    let b = parseInt(prompt("Masukkan angka ke dua"));
    function penjumlahan(a, b) {
      return a + b;
    }
    alert(penjumlahan(a, b));

  case "2":
    a = parseInt(prompt("Masukkan angka pertama"));
    b = parseInt(prompt("Masukkan angka ke dua"));
    function pengurangan(a, b) {
      return a - b;
    }
    alert(pengurangan(a, b));

  case "3":
    a = parseInt(prompt("Masukkan angka pertama"));
    b = parseInt(prompt("Masukkan angka ke dua"));
    function perkalian(a, b) {
      return a * b;
    }
    alert(perkalian(a, b));

  case "4":
    a = parseInt(prompt("Masukkan angka pertama"));
    b = parseInt(prompt("Masukkan angka ke dua"));
    function pembagian(a, b) {
      return a / b;
    }
    alert(pembagian(a, b));

  case "5":
    a = parseInt(prompt("Masukkan angka pertama"));
    b = parseInt(prompt("Masukkan angka ke dua"));
    function pangkat2(a, b) {
      return a ** b;
    }
    alert(pangkat2(a, b));

  case "6":
    a = parseInt(prompt("Masukkan angka pertama"));
    b = parseInt(prompt("Masukkan angka ke dua"));
    function AkarPangkat2(a) {
      return Math.sqrt(a);
    }
    alert(AkarPangkat2(a));

  case "7":
    a = parseInt(prompt("Masukkan angka pertama"));
    b = parseInt(prompt("Masukkan angka ke dua"));
    function AkarPangkat3(a) {
      return Math.cbrt(a);
    }
    alert(Math.cbrt(a));
}
