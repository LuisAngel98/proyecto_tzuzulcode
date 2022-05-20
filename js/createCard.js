const main = document.querySelector(".main");

if (localStorage.getItem("db")) {
  var state = JSON.parse(localStorage.getItem("db"));
} else {
  var state = [];
}

const template = () => {
  let cards = state
    .map((item) => {
      return `
      <div class="card-body">
        <div class="container-card-img">
          <img src=${item["img-min"]} class="card-img" />
        </div>
        <h5>${item.title}</h5>
        <p>$/. ${item.price}.00</p>
        <button class="btn btn-dark" id=${item.id}>Agregar</button>
      </div>
      `;
    })
    .join("");
  return cards;
};

//renderizar ui
const render = () => {
  main.innerHTML = template();
  localStorage.setItem("db", JSON.stringify(state));
};

//Actualizar el State
const setState = (arreglo) => {
  if (state.length < 1) {
    state.push.apply(state, arreglo);
  } else {
    state = arreglo;
  }
  render();
};
/*******************************************************************************************************/
const setStateMayorAMenor = () => {
  state.sort((o1, o2) => {
    if (o1.price > o2.price) {
      return -1;
    } else if (o2.price < o1.price) {
      return 1;
    } else {
      return 0;
    }
  });
  render();
};
const setStateMenorAMayor = () => {
  state.sort((o1, o2) => {
    if (o1.price < o2.price) {
      return -1;
    } else if (o2.price > o1.price) {
      return 1;
    } else {
      return 0;
    }
  });
  render();
};

export { setState, setStateMayorAMenor, setStateMenorAMayor };
