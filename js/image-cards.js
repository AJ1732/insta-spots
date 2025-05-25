const IMAGES_DATA = [
  {
    src: "./assets/insta-spots/pexels-kassandre-pedro-8639743 1.png",
    title: "Val Thorens",
  },
  {
    src: "./assets/insta-spots/pexels-kassandre-pedro-8639743 1-1.png",
    title: "Restaurant terrace",
  },
];

export function imageCards() {
  const images = document.querySelector(".images");

  IMAGES_DATA.forEach((img) => {
    // Parent Image Card
    const imageCard = document.createElement("figure");
    imageCard.setAttribute("class", "image");

    // Create Image child elements
    const imageFigcaption = document.createElement("figcaption");
    const imageImg = document.createElement("img");

    // Append the child elements into imageCard
    imageFigcaption.setAttribute("class", "favourite");
    imageImg.setAttribute("src", img.src);
    imageImg.setAttribute("alt", img.title);

    imageFigcaption.append(img.title);

    imageCard.append(imageImg);
    imageCard.append(imageFigcaption);

    // Append the child image into the parent .images element container
    images.append(imageCard);
  });

  console.log("Hello World! from Cards");
}
