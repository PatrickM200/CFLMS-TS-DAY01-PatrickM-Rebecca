for (let i = 1; i <=10; i++){

  for (let a = 1; a <=10; a++) {

    let b = a * i;

  let div = document.createElement("div");
      div.innerHTML = a + "*" + i + "=" + b + "\n";
      document.body.appendChild(div);
  }
  div.innerHTML +=`<hr>`;
}
