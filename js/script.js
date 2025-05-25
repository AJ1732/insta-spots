import { imageCards } from "./image-cards.js";
import { imageCardModal } from "./image-card-modal.js";
import { editProfile } from "./edit-profile.js";
import { favouriteIcon } from "./favourite-icon.js";
import { newPostModal } from "./new-post-modal.js";

// FUNCTION CALLS
document.addEventListener("DOMContentLoaded", () => {
  imageCards();
  imageCardModal();
  editProfile();
  favouriteIcon();
});

document.querySelector(".button--primary")?.addEventListener("click", () => {
  newPostModal();
});
