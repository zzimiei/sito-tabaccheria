
function back() {
    document.querySelector(".menu_distributori").style.display = "flex";
    document.getElementById("distributore_1").style.display = "none";
    document.getElementById("distributore_2").style.display = "none";
    document.getElementById("distributore_3").style.display = "none";
    document.getElementById("distributore_4").style.display = "none";
}

var click = false;

function show(id) {
    if (click) {
        document.querySelector('.distributore').classList.add('no-before');
        document.querySelectorAll('.finger_scroll').forEach(el => el.remove());
    } else {
        click = true;
        document.getElementById("distributore_" + id).style.pointerEvents = 'none';
        setTimeout(() => {
            document.getElementById("distributore_" + id).style.pointerEvents = '';
        }, 2000);
    }
        

    const distributore = document.getElementById("distributore_" + id);

    document.querySelector(".menu_distributori").style.display = "none";
    distributore.style.display = "flex";
}