const overlay_zoom = document.querySelector(".overlay_zoom");


function back() {
    document.querySelector(".menu_distributori").style.display = "flex";
    document.querySelector(".monitor").style.display = "none";
    document.getElementById("distributore_1").style.display = "none";
    document.getElementById("distributore_2").style.display = "none";
    document.getElementById("distributore_3").style.display = "none";
    document.getElementById("distributore_4").style.display = "none";
    overlay_zoom.style.display = "none";
}

var click = false;

function show(id) {
    if (!click) {
        click = true;
        document.getElementById("distributore_" + id).style.pointerEvents = 'none';
        setTimeout(() => {
            document.querySelector('.overlay_istruzioni').remove();
            document.getElementById("distributore_" + id).style.pointerEvents = '';
        }, 2000);
    }
        

    const distributore = document.getElementById("distributore_" + id);
    
    document.querySelector(".menu_distributori").style.display = "none";
    document.querySelector(".monitor").style.display = "block";
    distributore.style.display = "flex";
}


function chiudi_zoom() {
    overlay_zoom.style.display = "none";
}


document.addEventListener("click", function (e) {
    if (e.target.tagName !== "IMG") return;
    overlay_zoom.style.display = "flex";
    document.getElementById("immagine_overlay").src = e.target.src;

});