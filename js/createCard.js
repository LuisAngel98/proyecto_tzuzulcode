const fragment = document.createDocumentFragment();
const templateCard = document.getElementById("template-card").content;
const cards = document.querySelector(".main");

const pintarCard = (data) => {
  data.forEach((prod) => {
    console.log(data);
    templateCard.querySelector("h5").textContent = prod.title;
    templateCard.querySelector("p").textContent = "$/. " + prod.price;
    templateCard.querySelector("img").setAttribute("src", prod["img-min"]);
    templateCard.querySelector(".btn-dark").dataset.id = prod.id;
    const clon = templateCard.cloneNode(true);
    fragment.appendChild(clon);
  });
  cards.appendChild(fragment);
};

export default pintarCard;
