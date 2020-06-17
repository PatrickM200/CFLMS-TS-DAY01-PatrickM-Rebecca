var b;

for (let i = 1; i <=10; i++){

  b= a * i;

  for (let a = 1; a <=10; a++) {

  let div = document.createElement("div");
      div.innerHTML = a + "*" + i + "=" + b + "\n";
      document.body.appendChild(div);
  }
}
