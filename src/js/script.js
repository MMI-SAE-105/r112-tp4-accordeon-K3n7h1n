// *** ACCORDEON ***


const accordeon = document.querySelector(".accordeon");
accordeon.addEventListener("click", (e) => {
accordeon.querySelectorAll("details").forEach((det) => (det.open = false));})