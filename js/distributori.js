function show(id, button_id) {

    const distributore = document.getElementById(id);
    const tasto = document.getElementById(button_id);

    if (getComputedStyle(distributore).maxHeight === "65px") {
        distributore.style.maxHeight = distributore.scrollHeight + "px";
        distributore.style.backgroundImage = "linear-gradient(0deg, #303030 15%, #e4af4d 18%, #c9c9c9 19%)";
        tasto.innerHTML = "CHIUDI DISTRIBUTORE " + id;
        distributore.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    } else {

        distributore.style.maxHeight = "65px";
        distributore.style.backgroundImage = "linear-gradient(0deg, #505050, #c9c9c9)";
        tasto.innerHTML = "APRI DISTRIBUTORE " + id;
    }
}