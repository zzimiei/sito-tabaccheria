document.addEventListener("DOMContentLoaded", function () {

    const header = document.createElement("header");
    header.innerHTML = `
        <a href = "index.html"><img src = "svg/pittogramma + logotipo - orizzontale.svg" alt = "index"></a>
        <button onclick = "menu()"></button>
		<nav>
            <a href = "servizi.html">SERVIZI</a>
            <a href = "distributori.html">DISTRIBUTORI</a>
        	<a href = "catalogo.html">CATALOGO</a>
            <a href = "contatti.html">CONTATTI</a>
        </nav>
    `;

    const footer = document.createElement("footer");
    footer.innerHTML = `
        <section>
            <h3>CONTATTI</h3>
            <a href = "tel:+390733238262"><img src = "svg/telephone-pieno.svg" alt = "numero telefonico">+39 0733 238262</a>
            <a href = "https://wa.me/+393464785924"><img src = "svg/whatsapp.svg" alt = "numero whatsapp">+39 346 478 5294</a>
            <a href = "mailto:posta@tabaccheriagirasole.com"><img src = "svg/email-pieno.svg" alt = "indirizzo mail">posta@tabaccheriagirasole.com</a>
            <a href = "https://maps.app.goo.gl/5ZdesHNdWVWNLTRT9"><img src = "svg/maps-pieno.svg" alt = "indirizzo">Piazzale Vittime del Terrorismo, 3, 62100 Macerata MC, Italy</a>
        </section>
        <section>
            <h3>INFORMAZIONI UTILI</h3>
            <a href = "faq.html"><img src = "svg/question-pieno.svg" alt = "domande frequenti" class = "piugrande">DOMANDE FREQUENTI</a>
            <p onclick = "orari()"><img src = "svg/clock-pieno.svg" alt = "orari di apertura">Lunedì - Sabato: 6:30 - 13:00 | 15:30 - 19:30</p>
            <a href = "chisiamo.html"><img src = "svg/aboutus.svg" alt = "chi siamo" class = "piugrande">Chi Siamo</a>
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
        <a href="servizi.html">SERVIZI</a>
        <a href="distributori.html">DISTRIBUTORI</a>
        <a href="catalogo.html">CATALOGO</a>
        <a href="contatti.html">CONTATTI</a>
    `;

    document.body.insertBefore(div, document.body.firstElementChild);
}