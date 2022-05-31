const botonModal = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const cerrarModal = document.querySelector(".close-btn");


botonModal.onclick = () => {
    modal.style.display="flex";
}

cerrarModal.onclick = () => {
    modal.style.display="none";
}