function show(id, button_id) {

    const distributore = document.getElementById(id);
    const tasto = document.getElementById(button_id);

    if (getComputedStyle(distributore).maxHeight === "65px") {
        distributore.style.maxHeight = distributore.scrollHeight + "px";
        tasto.innerHTML = "CHIUDI DISTRIBUTORE " + id;
        distributore.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    } else {

        distributore.style.maxHeight = "65px";
        tasto.innerHTML = "APRI DISTRIBUTORE " + id;

    }
}