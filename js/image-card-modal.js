export function imageCardModal() {
  const imgContainer = document.querySelector(".images");
  const imgDetails = document.querySelector("#close-modal");

  //USING EVENT DELEGATION
  imgContainer.addEventListener("click", (e) => {
    const image = e.target.closest("img");

    if (!image) return;
    imgDetails.showModal();

    let html = `
    <div class='modal-container'>
      <img src ='${image.src}' alt='${image.alt}' class='modal-img'/>
      <p class='favourite'>${image.alt}</p>
      <button class='close-modal-btn'>CLOSE</button>
    </div>
    `;
    imgDetails.insertAdjacentHTML("afterbegin", html);

    //CLOSE MODAL CONTAINER
    const closeBtn = document.querySelector(".close-modal-btn");
    closeBtn.addEventListener("click", () => {
      closeModal();
    });

    document.body.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    });

    imgDetails.addEventListener("click", (e) => {
      const contentBox = document.querySelector(".modal-container");

      if (contentBox && !contentBox.contains(e.target)) {
        closeModal();
      }
    });

    function closeModal() {
      imgDetails.close();
      imgDetails.innerHTML = "";
    }
  });
}
