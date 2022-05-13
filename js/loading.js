const main = document.querySelector(".main");
const loader = document.querySelector(".loader");
const loading = () => {
  main.removeChild(loader);
};

export default loading;
