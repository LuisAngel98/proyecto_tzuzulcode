const main = document.querySelector(".main"); //nodo donde se renderiza todo

let state = []; //ESTADO QUE SE RENDERIZA

//crear template a partir del estado
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
        <button onclick="addItemToCartGlobal(this.id)" class="btn btn-dark" id=${item.id}>Agregar</button>
      </div>
      `;
    })
    .join("");
  return cards;
};

//renderizar el template
const render = () => {
  main.innerHTML = template();
};

//Actualizar el State
const setState = (data) => {
  if (state.length < 1) {
    state.push.apply(state, data);
  } else {
    state = data;
  }
  render();
};
//Actualizar el State de mayor a menor
const setStateMayorAMenor = (data) => {
  data.sort((o1, o2) => {
    if (o1.price > o2.price) {
      return -1;
    } else if (o2.price < o1.price) {
      return 1;
    } else {
      return 0;
    }
  });
  state = data;
  render();
};
//Actualizar el State de menor a meyor
const setStateMenorAMayor = (data) => {
  data.sort((o1, o2) => {
    if (o1.price < o2.price) {
      return -1;
    } else if (o2.price > o1.price) {
      return 1;
    } else {
      return 0;
    }
  });
  state = data;
  render();
};

export { setState, setStateMayorAMenor, setStateMenorAMayor };
