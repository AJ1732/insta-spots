import { IMAGES_DATA } from "./image-card-data.js";

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
    figcaptionSpan.innerHTML = `<svg id="favourite-icon" class="favourite-icon" width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.9512 1.05664C17.3161 0.856584 18.8067 1.15981 20.1602 2.32812L20.4287 2.57324C22.6597 4.72264 22.3285 8.02556 20.5967 9.89355L20.4248 10.0693L11.5 18.6025L2.57422 10.0693H2.5752C0.754421 8.29659 0.296669 5.00618 2.36328 2.78516L2.57129 2.57324C3.99417 1.20243 5.593 0.843258 7.04883 1.05664C8.5402 1.27524 9.89546 2.09997 10.7266 3.11523L11.5 4.06055L12.2734 3.11523C13.1045 2.09997 14.4598 1.27524 15.9512 1.05664Z" stroke="#212121" stroke-width="2"/>
  </svg>`;

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
  });

  console.log("Hello World! from Cards");
}
