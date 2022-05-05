import { getData  } from "./getData.js";

const contadorCarrito = document.getElementById('contador-carrito');
const precioTotal = document.getElementById('precioTotal');

const actualizarPreciosCarrito = (carrito) => {
  contadorCarrito.innerText = carrito.reduce((acc, el) => acc + el.cantidad, 0);
  precioTotal.innerText = carrito.reduce((acc, el) => acc + (el.precio * el.cantidad), 0);
}

export const agregarAlCarrito = (id) => {
  let carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];

  const producto = getData.find(producto => producto.id === id);
  const productoEnCarrito = carrito.find(producto => producto.id === id);
  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
  } else {
    producto.cantidad = 1;
    carrito.push(producto);
  }
  localStorage.setItem("carrito", JSON.stringify(carrito));
  renderProductosCarrito();
}

export const renderProductosCarrito = () => {
  let carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];

  const contenedorCarrito = document.getElementById('carrito-contenedor');
  contenedorCarrito.innerHTML = "";
  carrito.forEach(producto => {
    let itemEnCarrito = document.createElement('div');
    itemEnCarrito.classList.add('productoEnCarrito');
    itemEnCarrito.innerHTML = `<p>${producto.nombre}</p>
                      <p>Precio: $ ${producto.precio}</p>
                      <p id=cantidad${producto.id}>Cantidad:${producto.cantidad}</p>
                      <button id=eliminar${producto.id} class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
    `;
    contenedorCarrito.appendChild(itemEnCarrito);
    document.getElementById(`eliminar${producto.id}`).addEventListener('click', () => {
      eliminarDelCarrito(producto.id);
    })
  });
  actualizarPreciosCarrito(carrito);
}

const eliminarDelCarrito = (productoId) => {
  let carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
  Swal.fire({
    title: 'Estas seguro que quieres eliminarlo?',
    text: 'Estas por eliminar un producto de tu carrito',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminar!',
    cancelButtonText: 'No, cancelar!',
    reverseButtons: false
  }).then((result) => {
    if (result.isConfirmed) {
      carrito = carrito.filter(el => el.id != productoId);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      renderProductosCarrito();
      Swal.fire(
        'Eliminado',
        'Tu producto fue eliminado del carrito',
        'success'
      )
    } else if (result.dismiss === Swal.DismissReason.cancel){
      Swal.fire(
        'Cancelado',
        'Tu producto no se elimino',
        'error'
      )
    }
  })
}