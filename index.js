import {
  setState,
  setStateMayorAMenor,
  setStateMenorAMayor,
} from "./js/createCard.js";
import getData from "./js/getData.js";
import loading from "./js/loading.js";
import media from "./js/mediaQuery.js";
import {
  template,
  deleteItemFromCart,
  addItemToCart,
} from "./js/createCart.js";
const btnOnClick = (btns) => {
  btns.forEach((btn) => {
    btn.onclick = (e) => {
      addItemToCart(e.target.id);
    };
  });
};

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
