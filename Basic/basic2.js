for (var i = 1; i <= 10; i++) {
    setTimeout(function () {
        var div = document.createElement("div");
        div.innerHTML = "Rebecca<br>";
        document.body.appendChild(div);
    }, i * 500);
}
;
// let name: string = "Rebecca Schedler"
// for (let i = 0; i <=10; i++){
// 	setTimeout(function() {
// 		let div = document.createElement("div");
//       	div.innerHTML = name + "\n";
//      	 document.body.appendChild(div);
//      	}, 5000);
// };
// setTimeout(function() {
//    console.log("setTimeout called!");
// }, 1000);
// let num = [6, 7, 8];
// 	num.forEach(function(value){
// 		setTimeout(function() {
// 		console.log(num[i]);
// 	}, num[i]*5000);
// });
// let num: string = "Hallo";
// for (let i = 0; i <= 10; i++){
// 	setTimeout(function() {
// 		console.log(num[i++]);
// 	}, num[i]*3000);
// };
