//estado del carrito

if (localStorage.getItem("cartDb")) {
  var stateCart = JSON.parse(localStorage.getItem("cartDb"));
} else {
  //estado del carrito de compras
  var stateCart = {
    items: [],
    get totalPagar() {
      return this.items.reduce(
        (acc, currentValue) => acc + currentValue.price * currentValue.qty,
        0
      );
    },
  };
}
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
    } class="tdadd" onclick="addItemToCartGlobal(this.id)">+</button></td>
    <td><button id=${
      item.id
    } class="tdmenos"  onclick="deleteItemFromCart(this.id)">-</button></td>
    <td>$/.${item.qty * item.price}</td>
    </tr>
    `;
    })
    .join("");
  return cartItem;
};

const cartItem = document.getElementById("cartItem");
const tdTotal = document.getElementById("td-total");
const tdCantidad = document.getElementById("td-cantidad");
const render = () => {
  cartItem.innerHTML = template();
  tdTotal.innerText = "$/." + stateCart.totalPagar;
  tdCantidad.innerText = stateCart.items.reduce(
    (acc, item) => acc + item.qty,
    0
  );
  localStorage.setItem("cartDb", JSON.stringify(stateCart));
};

//hacerblogal

const addItemToCart = (id) => {
  let validar = stateCart.items.some((item) => item.id == id);
  if (validar) {
    // si ya existe solo cambiar su cantidad
    let index = stateCart.items.findIndex((i) => i.id == id);
    stateCart.items[index].qty += 1;
    render();
  } else {
    let localDB = JSON.parse(localStorage.getItem("db"));
    let data = localDB.find((item) => item.id == id);
    stateCart.items.push(data);
    render();
  }
};
export { stateCart, render, template, addItemToCart };
