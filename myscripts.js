function showMore() {
    var el = document.querySelector("#worklinks");
    if(el.classList.contains("hidden")) {
        el.classList.remove("hidden");
    } else {
        el.classList.add("hidden");
    }
}