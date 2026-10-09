window.addEventListener("scroll", function () {
    if (window.scrollY > 80) {
        document.querySelector("header").classList.add("scrollato");
    } else {
        document.querySelector("header").classList.remove("scrollato");
    }
});


function menu() {
    const div = document.createElement("div");
    div.className = "menu";
    div.innerHTML = `
        <a href="https://www.tabaccheriagirasole.com#servizi">SERVIZI</a>
        <a href="distributori.html">DISTRIBUTORI</a>
        <a href="brands.html">BRANDS</a>
        <a href="contatti.html">CONTATTI</a>
    `;

    document.body.insertBefore(div, document.body.firstElementChild);

    div.querySelector("a").addEventListener("click", function() {
        div.remove();
    });
}
