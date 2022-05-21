const main = document.querySelector(".main");
const loader = document.querySelector(".loader");
const loading = (valor) => {
  valor ? main.appendChild(loader) : main.removeChild(loader);
};

export default loading;
