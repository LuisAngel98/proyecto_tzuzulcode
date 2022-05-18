import {
  setState,
  setStateMayorAMenor,
  setStateMenorAMayor,
} from "./js/createCard.js";
import getData from "./js/getData.js";
import loading from "./js/loading.js";
import media from "./js/mediaQuery.js";

getData().then((data) => {
  localStorage.setItem("db", JSON.stringify(data));
  let localDB = JSON.parse(localStorage.getItem("db"));
  loading();
  setState(localDB);
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
