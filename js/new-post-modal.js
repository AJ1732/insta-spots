import { favouriteIcon } from "./favourite-icon.js";

export function newPostModal() {
  const newPostDialog = document.createElement("dialog");
  newPostDialog.className = "modal";
  newPostDialog.id = "newPostModal";

  newPostDialog.innerHTML = `
    <div class="modal-content">
      <h2>New Post</h2>
      <form id="newPostForm">
        <input type="text" id="postTitle" placeholder="Title" minlength="3" maxlength="30" required />
        <input type="file" id="postImage" accept="image/*" required />
        <button type="submit" class="Update-btn">Post</button>
        <button type="button" id="closeNewPostModal" style="color: red;">X</button>
      </form>
    </div>
  `;

  document.body.appendChild(newPostDialog);
  newPostDialog.showModal();

  const closeBtn = newPostDialog.querySelector("#closeNewPostModal");
  closeBtn.addEventListener("click", () => {
    newPostDialog.close();
    newPostDialog.remove();
  });

  document.getElementById("newPostForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("postTitle").value;
    const fileInput = document.getElementById("postImage");
    const file = fileInput.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const imgSrc = e.target.result;

        const figure = document.createElement("figure");
        figure.classList.add("image");
        figure.innerHTML = `
          <img src="${imgSrc}" alt="${title}" />
          <figcaption class="favourite">
            ${title}
            <span>
              <svg id="favourite-icon" class="favourite-icon" width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.9512 1.05664C17.3161 0.856584 18.8067 1.15981 20.1602 2.32812L20.4287 2.57324C22.6597 4.72264 22.3285 8.02556 20.5967 9.89355L20.4248 10.0693L11.5 18.6025L2.57422 10.0693H2.5752C0.754421 8.29659 0.296669 5.00618 2.36328 2.78516L2.57129 2.57324C3.99417 1.20243 5.593 0.843258 7.04883 1.05664C8.5402 1.27524 9.89546 2.09997 10.7266 3.11523L11.5 4.06055L12.2734 3.11523C13.1045 2.09997 14.4598 1.27524 15.9512 1.05664Z" stroke="#212121" stroke-width="2"/>
              </svg>
            </span>
          </figcaption>
        `;

        document.querySelector(".images").prepend(figure);
        favouriteIcon();
        newPostDialog.close();
        newPostDialog.remove();
      };

      reader.readAsDataURL(file);
    }
  });
}

// Close modals on Escape key or click outside
// document.addEventListener("keydown", (e) => {
//   if (e.key === "Escape") {
//     closeModal(editProfileModal);
//     closeModal(newPostModal);
//     closeModal(previewModal);
//   }
// });
