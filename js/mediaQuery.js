const nav = document.querySelector(".nav");
const container = document.querySelector(".container");
const main = document.querySelector(".main");
const navButtonReset = document.querySelector(".nav-button-reset");
const filtro1 = document.getElementById("filtro1");

filtro1.onclick = () => {
  nav.style.left = "0";
};
navButtonReset.onclick = () => {
  nav.style.left = "-105%";
};

const media = (x) => {
  if (x.matches) {
    nav.style.position = "static";
    nav.style.width = "30%";
    nav.style.height = "400px";
    container.insertBefore(nav, main);
  }
};
export default media;
