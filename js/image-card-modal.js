export function imageCardModal() {
  const imgContainer = document.querySelector(".images");
  const imgDetails = document.querySelector(".modal");
  const cardOverlay = document.querySelector(".modal-overlay");
  let imgOverview;
  //USING EVENT DELEGATION
  imgContainer.addEventListener("click", (e) => {
    const image = e.target.closest("img");
    imgOverview = image;

    if (!image) return;
    console.log("welcome to my modal");
    console.log(image.src);
    console.log(image.alt);

    imgDetails.classList.remove("modal-hidden");
    cardOverlay.classList.remove("modal-hidden");

    const html = `
      <img src ='${image.src}' alt='${image.alt}' class='modal-img'/>
      <p>${image.alt}</p>
    `;
    imgDetails.insertAdjacentHTML("afterbegin", html);
  });
}
