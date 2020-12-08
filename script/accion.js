const brand_image = document.querySelector("#brand_image");
const nav_options = document.querySelector('.nav_options');

const ipad = window.matchMedia("screen and (max-width: 767px)");

ipad.addListener(validation); 

validation(ipad);

function validation(event) {
  if (event.matches) {
    brand_image.addEventListener("click", hideShow);
  } else {
    brand_image.removeEventListener("click", hideShow); 
  }
}


function hideShow() {
  if (nav_options.classList.contains("is-active")) {
    nav_options.classList.remove('is-active');
  } else {
    nav_options.classList.add('is-active');
  }
  // nav_options.classList.toggle('is-active');
}