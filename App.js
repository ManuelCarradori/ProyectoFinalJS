import { agregarAlCarrito, renderProductosCarrito } from "./carrito.js";
import { productos } from "./stock.js";

renderProductosCarrito();

const mostrarProductos = (productos) => {

  const contenedorProductos = document.getElementById("producto-contenedor");
  productos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML += `<div class="card-image">
                        <img src=${producto.img}>
                        <span class="card-title">${producto.nombre}</span>
                        <a class="btn-floating halfway-fab wabes-effect waves-light red padding-card" id=boton${producto.id}><i class="material-icons">add_shopping_cart</i></a>
                      </div>
                      <div class="card-content">
                          <p>${producto.desc}</p>
                          <p> Precio: $ ${producto.precio}</p>
                      </div>
                      `
    contenedorProductos.appendChild(div);
    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Agregaste un producto al carrito!',
        showConfirmButton: false,
        timer: 1600
      });
      agregarAlCarrito(producto.id);
    });
  });
};

const productosSeleccionados = window.location.pathname.split('/').reverse()[0].split(".")[0];
switch (productosSeleccionados) {
  case "carnesRojas":
    mostrarProductos(productos.filter(producto => producto.tipo === "CarneRoja"));
    break;
  case "carnesBlancas":
    mostrarProductos(productos.filter(producto => producto.tipo === "CarneBlanca"));
    break;
  case "carnesCerdo":
    mostrarProductos(productos.filter(producto => producto.tipo === "CarneCerdo"));
    break;
  case "frutas":
    mostrarProductos(productos.filter(producto => producto.tipo === "Frutas"));
    break;
  case "verduras":
    mostrarProductos(productos.filter(producto => producto.tipo === "Verduras"));
    break;
  case "ProducAfeitarse":
    mostrarProductos(productos.filter(producto => producto.tipo === "ProteAfeitarse"));
    break;
  case "proteccionFem":
    mostrarProductos(productos.filter(producto => producto.tipo === "proteFEM"));
    break;
  case "desodoranteAyC":
    mostrarProductos(productos.filter(producto => producto.tipo === "desdorantAyC"));
  default:
    break;
}