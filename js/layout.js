document.addEventListener("DOMContentLoaded", function () {

    const header = document.createElement("header");
    header.innerHTML = `
        <a href = "index.html"><img src = "svg/pittogramma + logotipo - orizzontale.svg" alt = "Index Tabaccheria Girasole"></a>
        <button onclick = "menu()"></button>
		<nav>
            <a href = "index.html#servizi">SERVIZI</a>
            <a href = "distributori.html">DISTRIBUTORI</a>
        	<a href = "brands.html">BRANDS</a>
            <a href = "contatti.html">CONTATTI</a>
        </nav>
    `;

    const footer = document.createElement("footer");
    footer.innerHTML = `
        <address>
            <h3>CONTATTI</h3>
            <a href = "tel:+390733238262"><img src = "svg/telephone-pieno.svg" alt = "Telefono">+39 0733 238262</a>
            <a href = "https://wa.me/+393464785294"><img src = "svg/whatsapp.svg" alt = "Contatto Whatsapp">+39 346 478 5294</a>
            <a href = "mailto:posta@tabaccheriagirasole.com"><img src = "svg/email-pieno.svg" alt = "Indirizzo Mail">posta@tabaccheriagirasole.com</a>
            <a href = "https://maps.app.goo.gl/5ZdesHNdWVWNLTRT9"><img src = "svg/maps-pieno.svg" alt = "Indirizzo">Piazzale Vittime del Terrorismo, 3, Macerata</a>
        </address>
        <div>
            <h3>INFORMAZIONI UTILI</h3>
            <a href = "faq.html"><img src = "svg/question-pieno.svg" alt = "domande frequenti" class = "piugrande">DOMANDE FREQUENTI</a>
            <p><img src = "svg/clock-pieno.svg" alt = "orari di apertura">Lunedì - Sabato: 6:30 - 13:00 | 15:30 - 19:30<br>Domenica: chiuso</p>
            <br>
            <br>
        </div>
        <hr>
        <div>
            <i>© 2026 - ${new Date().getFullYear()} &nbsp;&nbsp; Tabaccheria Girasole - All Rights Reserved.</i>
            <div>
                <a href = "https://www.instagram.com/tabaccheriagirasole"><img src = "svg/instagram.svg" alt = "Instagram Tabaccheria Girasole" class = "piugrande"></a>
                <a href = "https://www.facebook.com/tabaccheriagirasole"><img src = "svg/facebook.svg" alt = "Facebook Tabaccheria Girasole" class = "piugrande"></a>
            </div>
        </div>
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
        <a href="index.html#servizi">SERVIZI</a>
        <a href="distributori.html">DISTRIBUTORI</a>
        <a href="brands.html">BRANDS</a>
        <a href="contatti.html">CONTATTI</a>
    `;

    document.body.insertBefore(div, document.body.firstElementChild);
}
