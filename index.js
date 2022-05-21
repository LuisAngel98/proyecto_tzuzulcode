import {
  setState,
  setStateMayorAMenor,
  setStateMenorAMayor,
} from "./js/createCard.js"; //ok
import { setStateCart, delItemFromCart, render } from "./js/createCart.js";
import getData from "./js/getData.js"; //ok
import loading from "./js/loading.js"; //ok
import media from "./js/mediaQuery.js"; //ok

document.addEventListener("DOMContentLoaded", () => {
  render();
  loading(true);
  getData().then((data) => {
    loading(false);
    setState(data);
  });
});

const filtrosSelect = document.getElementById("filtros-select");

filtrosSelect.onchange = (e) => {
  if (e.target.value === "mayor") {
    loading(true);
    getData().then((data) => {
      loading(false);
      setStateMayorAMenor(data);
    });
  } else {
    loading(true);
    getData().then((data) => {
      loading(false);
      setStateMenorAMayor(data);
    });
  }
};
window.addItemToCartGlobal = (id) => {
  getData().then((data) => {
    let obj = data.find((item) => item.id == id);
    setStateCart(obj);
  });
};
window.deleteItemFromCart = (id) => {
  delItemFromCart(id);
};
let x = window.matchMedia("(min-width: 480px)");
media(x);
/******************************************************/
let filtrado = []; //global
let checBoxs = document.querySelectorAll(".nav input");
checBoxs.forEach((cbox) => {
  cbox.onclick = (e) => {
    if (cbox.checked) {
      filtrado.push(e.target.id);
    } else {
      let newfiltrado = filtrado.filter((el) => el != e.target.id);
      filtrado = newfiltrado;
    }
    getData().then((data) => {
      let reg = new RegExp(filtrado.join("|"), "gmi");
      let newdata = data.filter((el) => reg.test(el.title));
      setState(newdata);
    });
  };
});
const btnCart = document.getElementById("btn-cart");
const cartContent = document.getElementById("cart-content");
btnCart.onclick = (e) => {
  cartContent.classList.toggle("cerrarCart");
};
