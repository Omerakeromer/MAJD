document.addEventListener("DOMContentLoaded", function() {
    const headerTitle = document.querySelector(".header-title");
    headerTitle.style.transition = "transform 0.5s";
    headerTitle.addEventListener("mouseover", function() {
        headerTitle.style.transform = "scale(1.1)";
    });
    headerTitle.addEventListener("mouseout", function() {
        headerTitle.style.transform = "scale(1)";
    });
});