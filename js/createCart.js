const cartItem = document.getElementById("cartItem"); //nodo donde se renderiza todo

if (localStorage.getItem("cartDb")) {
  var stateCart = JSON.parse(localStorage.getItem("cartDb"));
} else {
  //estado del carrito de compras
  var stateCart = {
    items: [],
    totalPagar: 0,
    totalCantidad: 0,
  };
}
//crear template a partir del estado
/** */
/** */
const template = () => {
  let cartItem = stateCart.items
    .filter((item) => item.qty != 0)
    .map((item) => {
      return `
    <tr>
    <td><img src=${item["img-min"]} alt="xd" /></td>
    <td>${item.title}</td>
    <td>${item.qty}</td>
    <td><button id=${
      item.id
    } onclick="addItemToCartGlobal(this.id)">+</button></td>
    <td><button id=${
      item.id
    } onclick="deleteItemFromCart(this.id)">-</button></td>
    <td>${item.qty * item.price}</td>
    </tr>
    `;
    })
    .join("");
  return cartItem;
};

const tdTotal = document.getElementById("td-total");
const tdCantidad = document.getElementById("td-cantidad");
//renderizar template
const render = () => {
  stateCart.totalPagar = stateCart.items.reduce(
    (acc, currentValue) => acc + currentValue.price * currentValue.qty,
    0
  );
  stateCart.totalCantidad = stateCart.items.reduce(
    (acc, currentValue) => acc + currentValue.qty,
    0
  );
  tdTotal.textContent = stateCart.totalPagar; //actualizar el total a pagar en el estado del carrito
  tdCantidad.textContent = stateCart.totalCantidad; //actualizar la catnidad en el estado del carrito
  cartItem.innerHTML = template();
  localStorage.setItem("cartDb", JSON.stringify(stateCart));
};

//sctualizar estado del carrito
const setStateCart = (objeto) => {
  let validar = stateCart.items.some((item) => item.id == objeto.id); //si exsite en el carrito solo modificar su cantidad
  let index = stateCart.items.findIndex((i) => i.id == objeto.id);
  if (validar) {
    stateCart.items[index].qty += 1;
  } else {
    stateCart.items.push(objeto);
  }
  console.log(stateCart);
  render();
};
const delItemFromCart = (id) => {
  let index = stateCart.items.findIndex((i) => i.id == id);
  stateCart.items[index].qty -= 1;
  render();
};

export { setStateCart, delItemFromCart, render };
