let bef1 = document.getElementById("bef1");
let bef2 = document.getElementById("bef2");
let atf = document.getElementById("atf");

let szerk = document.getElementById("szerk");
let ran = document.getElementById("ran");
let atf_calc = document.getElementById("atf-calc");

szerk.onclick = () => {
  let a = parseInt(bef1.value);
  let b = parseInt(bef2.value);
  let c = parseInt(atf.value);

  if (a + b > c && a + c > b && b + c > a) {
    alert("megszerkesztheto")
  } else {
    alert("nem szerkesztheto meg")
  }
}

const rnd = () => Math.floor(Math.random() * (100 - 11)) + 10;

ran.onclick = () => {
  bef1.value = rnd();
  bef2.value = rnd();
  atf.value = rnd();
}

atf_calc.onclick= () => {
  atf.value = Math.sqrt(Math.pow(bef1.value, 2) + Math.pow(bef2.value, 2))
}