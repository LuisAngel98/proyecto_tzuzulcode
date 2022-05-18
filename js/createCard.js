const main = document.querySelector(".main");

let state = [];

const template = () => {
  let cards = state
    .map((item) => {
      return `
      <div class="card-body">
        <div class="container-card-img">
          <img src=${item["img-min"]} class="card-img" />
        </div>
        <h5>${item.title}</h5>
        <p>${item.price}</p>
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
  const db = JSON.parse(localStorage.getItem("db"));
  db.sort((o1, o2) => {
    if (o1.price > o2.price) {
      return -1;
    } else if (o2.price < o1.price) {
      return 1;
    } else {
      return 0;
    }
  });
  localStorage.setItem("db", JSON.stringify(db));
  setState(db);
  render();
};
const setStateMenorAMayor = () => {
  const db = JSON.parse(localStorage.getItem("db"));
  db.sort((o1, o2) => {
    if (o1.price < o2.price) {
      return -1;
    } else if (o2.price > o1.price) {
      return 1;
    } else {
      return 0;
    }
  });
  localStorage.setItem("db", JSON.stringify(db));
  setState(db);
  render();
};

export { setState, setStateMayorAMenor, setStateMenorAMayor };
