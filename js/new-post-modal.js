export function newPostModal() {
  console.log("Hello from New Post Modal");
}



// Close modals on Escape key or click outside
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal(editProfileModal);
    closeModal(newPostModal);
    closeModal(previewModal);
  }
});


