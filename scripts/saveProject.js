const saves = document.querySelectorAll(".card-save")

saves.forEach(save => {
    save.addEventListener("click", function(event) {
        event.preventDefault()
        saveProject(event)
    });
});

function saveProject(event) {
    const save = event.currentTarget
    save.classList.toggle("saved");
}