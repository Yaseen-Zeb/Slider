let section = document.querySelector("section"),
    index = 0;
change(index)
function change(e) {
    index += e;

    let image = document.querySelectorAll(".image");
    let span = document.querySelectorAll(".dot");

    for (let i = 0; i < image.length; i++) {
        image[i].style.display = "none"
    };
    for (let i = 0; i < span.length; i++) {
        span[i].classList.remove("active")
    };

    if (index > image.length - 1) {
        index = 0;
    };
    if (index < 0) {
        index = image.length - 1;
    };
    image[index].style.display = "block";
    span[index].classList.add("active");
};

section.onmouseenter = () => {
    section.classList.remove("loop");
}
section.onmouseleave = () => {
    section.classList.add("loop")
}
setInterval(() => {
    if (section.classList.contains("loop")) {
        change(1)
    }
}, 3000);
