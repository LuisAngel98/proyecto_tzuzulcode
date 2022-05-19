//estado del carrito de compras
let stateCart = {
  items: [],
  get totalPagar() {
    return this.items.reduce(
      (acc, currentValue) => acc + currentValue.price * currentValue.qty,
      0
    );
  },
};
const template = () => {
  let cartItems = stateCart.items
    .map((item) => {
      return `
        <tr>
        <td><img src=${item["img-min"]} alt="xd" /></td>
        <td>${item.title}</td>
        <td>${item.qty}</td>
        <td><button id=${item.id} onclick="(e)=>console.log('hola')">+</button></td>
        <td><button id=${item.id} onclick="(e)=>deleteItemFromCart(e.target.id)">-</button></td>
        <td>${stateCart.totalPagar}</td>
        </tr>
        `;
    })
    .join("");
  return cartItems;
};

const cartItem = document.getElementById("cartItem");
const render = () => {
  cartItem.innerHTML = template();
};
const addItemToCart = (id) => {
  let validar = stateCart.items.some((item) => item.id == id);
  if (validar) {
    // si ya existe solo cambiar su cantidad
    let index = stateCart.items.findIndex((i) => i.id == id);
    stateCart.items[index].qty += 1;
    console.log(stateCart.items[index]);
    render();
  } else {
    let localDB = JSON.parse(localStorage.getItem("db"));
    let data = localDB.find((item) => item.id == id);
    stateCart.items.push(data);
    console.log(stateCart); //render aca
    render();
  }
};
const deleteItemFromCart = (id) => {
  let index = stateCart.items.findIndex((i) => i.id == id);
  if (stateCart.items[index].qty < 0) {
    stateCart.items[index].qty -= 1;
    console.log(stateCart.items);
    render();
  } else {
    let newStateCart = stateCart.items.filter((item) => item.id !== id);
    stateCart = newStateCart;
    console.log(stateCart);
    render();
  }
};
export { template, addItemToCart, deleteItemFromCart };
