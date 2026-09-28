document.addEventListener("DOMContentLoaded", function () {

    const header = document.createElement("header");
    header.innerHTML = `
        <a href = "manutenzione.html"><img src = "svg/pittogramma + logotipo - orizzontale.svg" alt = "index"></a>
        <button onclick = "menu()"></button>
		<nav>
            <a href = "manutenzione.html">SERVIZI</a>
            <a href = "manutenzione.html">DISTRIBUTORI</a>
        	<a href = "manutenzione.html">CATALOGO</a>
            <a href = "manutenzione.html">CONTATTI</a>
        </nav>
    `;

    const footer = document.createElement("footer");
    footer.innerHTML = `
        <section>
            <h3>CONTATTI</h3>
            <p><img src = "svg/telephone-pieno.svg" alt = "numero telefonico">+39 0733 238262</p>
            <p><img src = "svg/whatsapp.svg" alt = "numero whatsapp">+39 346 478 5294</p>
            <p><img src = "svg/email-pieno.svg" alt = "indirizzo mail">postabaccheria@gmail.com</p>
            <p><img src = "svg/maps-pieno.svg" alt = "indirizzo">Piazzale Vittime del Terrorismo, 3, 62100 Macerata MC, Italy</p>
        </section>
        <section>
            <h3>INFORMAZIONI UTILI</h3>
            <a href = "manutenzione.html"><img src = "svg/question-pieno.svg" alt = "domande frequenti" class = "piugrande">DOMANDE FREQUENTI</a>
            <p onclick = "orari()"><img src = "svg/clock-pieno.svg" alt = "orari di apertura">Lunedì - Sabato: 6:30 - 13:00 | 15:30 - 19:30</p>
            <a href = "manutenzione.html"><img src = "svg/aboutus.svg" alt = "chi siamo" class = "piugrande">Chi Siamo</a>
        </section>
        <hr>
        <i>© 2026 - ${new Date().getFullYear()} &nbsp;&nbsp; Tabaccheria Girasole - All Rights Reserved.</i>
    `;

    document.body.insertBefore(header, document.body.firstElementChild);

    document.body.appendChild(footer);

});


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
        <a href="manutenzione.html">SERVIZI</a>
		<a href="manutenzione.html">DISTRIBUTORI</a>
        <a href="manutenzione.html">CATALOGO</a>
        <a href="manutenzione.html">CONTATTI</a>
    `;

    document.body.insertBefore(div, document.body.firstElementChild);
}
