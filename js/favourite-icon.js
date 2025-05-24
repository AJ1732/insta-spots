export function favouriteIcon() {

const favouriteIcons = document.querySelectorAll("#favourite-icon");


favouriteIcons.forEach(icon => {
  
  icon.classList.add("favourite-icon");

  icon.addEventListener("click", () => {
    
  
  if (icon.classList.contains("liked")) {
    icon.classList.remove("liked");
    icon.classList.add("favourite-icon");
    icon.style.fill = "";

  } else {
    icon.classList.add("liked");
    icon.style.fill = "#ff0000";
    icon.classList.remove("favourite-icon");
  }
});
});

}
