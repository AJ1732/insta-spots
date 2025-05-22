export function imageCardModal() {
  const imgContainer = document.querySelector(".images");
  const imgDetails = document.querySelector(".modal");
  const cardOverlay = document.querySelector(".modal-overlay");

  //USING EVENT DELEGATION
  imgContainer.addEventListener("click", (e) => {
    const image = e.target.closest("img");

    if (!image) return;
    imgDetails.classList.remove("modal-hidden");
    cardOverlay.classList.remove("modal-hidden");

    let html = `
    <div class='modal-container'>
      <img src ='${image.src}' alt='${image.alt}' class='modal-img'/>
      <p>${image.alt}</p>
      <button class='close-modal-btn'>CLOSE</button>
    </div>
    `;
    imgDetails.insertAdjacentHTML("afterbegin", html);

    //CLOSE MODAL
    const closeBtn = document.querySelector(".close-modal-btn");
    closeBtn.addEventListener("click", () => {
      closeModal();
    });

    cardOverlay.addEventListener("click", (e) => {
      if (
        !imgDetails.classList.contains("modal-hidden") &&
        !cardOverlay.classList.contains("modal-hidden")
      ) {
        closeModal();
      }
    });
    document.body.addEventListener("keydown", (e) => {
      if (
        e.key === "Escape" &&
        !imgDetails.classList.contains("modal-hidden") &&
        !cardOverlay.classList.contains("modal-hidden")
      ) {
        closeModal();
      }
    });

    function closeModal() {
      imgDetails.classList.add("modal-hidden");
      cardOverlay.classList.add("modal-hidden");

      imgDetails.innerHTML = "";
    }
  });
}
