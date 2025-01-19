document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const closeModal = document.getElementById("closeModal");

  // Abrir modal al hacer clic en la imagen
  document.querySelectorAll(".view-image").forEach(img => {
    img.addEventListener("click", () => {
      modalImage.src = img.src;
      modal.style.display = "flex";
    });
  });

  // Cerrar modal al hacer clic en el botón
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    modalImage.src = "";
  });

  // Cerrar modal al hacer clic fuera del contenido
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      modalImage.src = "";
    }
  });
});