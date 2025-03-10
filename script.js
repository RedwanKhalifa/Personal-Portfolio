document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".projects-slider");
    const leftBtn = document.querySelector(".left-btn");
    const rightBtn = document.querySelector(".right-btn");
    const projectWidth = document.querySelector(".project-card").offsetWidth + 20; // Adjust for margin/gap

    leftBtn.addEventListener("click", () => {
        slider.scrollBy({ left: -projectWidth * 2, behavior: "smooth" }); // Scroll 2 projects at a time
    });

    rightBtn.addEventListener("click", () => {
        slider.scrollBy({ left: projectWidth * 2, behavior: "smooth" });
    });
});
