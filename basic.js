for (var i = 1; i <= 10; i++) {
    for (var r = 1; r <= 10; r++) {
        var y = r * i;
        var div = document.createElement("div");
        div.innerHTML += r + "*" + i + "=" + y + "<br>";
        document.body.appendChild(div);
    }
    div.innerHTML += "<hr>";
}
