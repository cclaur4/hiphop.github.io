document.addEventListener("DOMContentLoaded", function() {
    var contentContainer = document.querySelector(".body-artist-back");

    window.addEventListener("scroll", function() {
        if (isScrolledIntoView(contentContainer) && !contentContainer.classList.contains("appear")) {
            contentContainer.classList.add("appear");
        }
    });

    // Función para verificar si el elemento está en el viewport
    function isScrolledIntoView(element) {
        var rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }
});