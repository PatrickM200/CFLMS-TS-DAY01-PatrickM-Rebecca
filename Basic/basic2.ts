var name: string = "Rebecca Schedler"

for (let i = 0; i <=10; i++){
	let div = document.createElement("div");
      div.innerHTML = name + "\n";
      document.body.appendChild(div);
}