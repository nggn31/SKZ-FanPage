// Animación de la nav-container
document.querySelector(".nav-container").style.opacity = 0;
document.querySelector(".nav-container").style.transform = "translateY(-60px)";
document.querySelector(".nav-container").style.transition = "opacity 2s, transform 2s";
setTimeout(() => {
    document.querySelector(".nav-container").style.opacity = 1;
    document.querySelector(".nav-container").style.transform = "translateY(0)";
}, 500);

// Animación de los elementos hijos de hero
const heroChildren = document.querySelectorAll(".hero > *");
heroChildren.forEach((child, index) => {
    child.style.opacity = 0;
    child.style.transform = "translateY(60px)";
    child.style.transition = `opacity 1s, transform 1s ${index * 0.5}s`;
    setTimeout(() => {
        child.style.opacity = 1;
        child.style.transform = "translateY(0)";
    }, 1000);
});

// Animación de los blobs
const blobs = document.querySelectorAll(".blob");
blobs.forEach((blob, index) => {
    blob.style.transform = "scale(0)";
    blob.style.transition = `transform 2s ${index * 0.5}s`;
    setTimeout(() => {
        blob.style.transform = "scale(1)";
    }, 1500);
});


