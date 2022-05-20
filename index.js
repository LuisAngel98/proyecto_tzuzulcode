import {
  setState,
  setStateMayorAMenor,
  setStateMenorAMayor,
} from "./js/createCard.js";
import getData from "./js/getData.js";
import loading from "./js/loading.js";
import media from "./js/mediaQuery.js";
import { render, stateCart, addItemToCart } from "./js/createCart.js";

const btnOnClick = (btns) => {
  btns.forEach((btn) => {
    btn.onclick = (e) => {
      addItemToCart(e.target.id);
    };
  });
};

document.addEventListener("DOMContentLoaded", render);

getData().then((data) => {
  localStorage.setItem("db", JSON.stringify(data));
  let localDB = JSON.parse(localStorage.getItem("db"));
  loading();
  setState(localDB);
  /************************/
  const btns = document.querySelectorAll(".btn");
  btnOnClick(btns);
  /************************/
});
let x = window.matchMedia("(min-width: 480px)");
media(x);

const filtrosSelect = document.getElementById("filtros-select");

filtrosSelect.onchange = (e) => {
  if (e.target.value === "mayor") {
    setStateMayorAMenor();
  } else {
    setStateMenorAMayor();
  }
};
/***/
window.addItemToCartGlobal = (id) => {
  let validar = stateCart.items.some((item) => item.id == id);
  if (validar) {
    // si ya existe solo cambiar su cantidad
    let index = stateCart.items.findIndex((i) => i.id == id);
    stateCart.items[index].qty += 1;
    render();
  } else {
    let localDB = JSON.parse(localStorage.getItem("db"));
    let data = localDB.find((item) => item.id == id);
    stateCart.items.push(data);
    render();
  }
};
window.deleteItemFromCart = (id) => {
  let index = stateCart.items.findIndex((i) => i.id == id);
  stateCart.items[index].qty -= 1;

  render();
};

const btnCart = document.getElementById("btn-cart");
const cartContent = document.getElementById("cart-content");
btnCart.onclick = (e) => {
  cartContent.classList.toggle("cerrarCart");
};
