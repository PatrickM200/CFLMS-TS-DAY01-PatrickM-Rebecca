var b;
for (var i = 1; i <= 10; i++) {
    for (var a = 1; a <= 10; a++) {
        b = a * i;
        var div = document.createElement("div");
        div.innerHTML = a + "*" + i + "=" + b + "\n";
        document.body.appendChild(div);
    }
    div.innerHTML += "<hr>";
}
