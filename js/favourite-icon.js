export function favouriteIcon() {

const favouriteIcons = document.querySelectorAll("#favourite-icon");

console.log("Found icons:", favouriteIcons);
console.log("Number of icons:", favouriteIcons.length);

favouriteIcons.forEach(icon => {
  console.log("Adding event listener to icon:", icon);
  icon.addEventListener("click", () => {
    console.log("Icon clicked:", icon);
  
  if (icon.classList.contains("liked")) {
    icon.classList.remove("liked");
    icon.style.fill = "";
    console.log("Icon unliked");
  } else {
    icon.classList.add("liked");
    icon.style.fill = "#ff0000";
    console.log("Icon liked");
  }
});
});
console.log("Hello from Favourite Icon");
}
