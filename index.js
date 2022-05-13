import pintarCard from "./js/createCard.js";
import getData from "./js/getData.js";
import loading from "./js/loading.js";

getData().then((data) => {
  pintarCard(data);
  loading();
});
