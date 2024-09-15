function toggleModal(modalId) {
  // Close all modals except the one being clicked
  document.querySelectorAll(".modal").forEach((modal) => {
    if (modal.id !== modalId) {
      modal.style.display = "none";
    }
  });
  // Toggle the specific modal
  const modal = document.getElementById(modalId);
  modal.style.display = modal.style.display === "block" ? "none" : "block";
}