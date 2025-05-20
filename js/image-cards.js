const IMAGES_DATA = [
  {
    src: "./assets/insta-spots/pexels-kassandre-pedro-8639743 1.png",
    title: "Val Thorens",
    path: "",
  },
  {
    src: "./assets/insta-spots/pexels-kassandre-pedro-8639743 1-1.png",
    title: "Restaurant terrace",
  },
  {
    src: "./assets/insta-spots/pexels-kassandre-pedro-8639743 1-2.png",
    title: "An outdoor cafee",
  },
  {
    src: "./assets/insta-spots/pexels-kassandre-pedro-8639743 1-3.png",
    title: "A very long bridge, over the forest...",
  },
  {
    src: "./assets/insta-spots/pexels-kassandre-pedro-8639743 1-4.png",
    title: "Tunnel with morning light",
  },
  {
    src: "./assets/insta-spots/pexels-kassandre-pedro-8639743 1-5.png",
    title: "Mountain house",
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

    // Create the span element and append it to the figcaption
    const figcaptionSpan = document.createElement("span");
    const spanImg = document.createElement("svg");
    const spanImgPath = document.createElement("path");


    // Append the child elements into imageCard
    imageFigcaption.setAttribute("class", "favourite");
    imageImg.setAttribute("src", img.src);
    imageImg.setAttribute("alt", img.title);

    // Elements and attributes enlosed in the figcaption tag
    imageFigcaption.append(img.title);
    imageFigcaption.append(figcaptionSpan);


    imageCard.append(imageImg);
    imageCard.append(imageFigcaption);

    // Append the child image into the parent .images element container
    images.append(imageCard);
     
    // Append the image child to the span element
  figcaptionSpan.append(spanImg);

  // Append the path element to the span element
  spanImg.append(spanImgPath);

  // Set the attribute d for the path element so we can get it to display like an image
  spanImgPath.setAttribute(
    "d",
    "M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"
  );
  });

 

  console.log("Hello World! from Cards");
}
