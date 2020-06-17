    for (let i:number = 1; i <= 10; i++) {
    for (let r:number = 1; r <= 10; r++) {
       let y = r * i;
       var div = document.createElement("div");
       div.innerHTML +=`${r}*${i}=${y}<br>`;
       document.body.appendChild(div);
    }
    div.innerHTML +=`<hr>`;
  }