alert('Welcome to my app')

const value =prompt('Who is your name ?')
alert(`Hello ${value}`)


const verifikasi = confirm('Are you human ?')
if(verifikasi == true){
       alert('Verified ✔')
}else {
      alert('Not Verified ')
        }

const pilihan = prompt('1. Penjumlahan\n2. Pengurangan')

        


let result;
switch(pilihan) {
  case '1':
    const a = prompt('firstNUmber')
    const b = prompt('secondNumber')  
    function penjumlahan(a, b) {
      return a + b
    }
    alert(penjumlahan(a, b))
    
}

function pengurangan(a, b) {
  if (operator == "penjumlahan") {
    result = a - b;
    return result;
  }
}
function perkalian(a, b) {
  if (operator == "perkalian") {
    result = a * b;
    return result;
  }
}
function pembagian(a, b) {
  if (operator == "pembagian") {
    result = a / b;
    return result;
  }
}
function pangkat2(a, b) {
  if (operator == "pangkat2") {
    result = a ** b;
    return result;
  }
}
function AkarPangkat2(a) {
  if (operator == "akar pangkat2") {
    result = Math.sqrt(a);
    return result;
  }
}
function AkarPangkat3(a) {
  if (operator == "akar pangkat3") {
    result = Math.cbrt(a);
    return result;
  }
}
