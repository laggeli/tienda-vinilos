import { CUPONES_VALIDOS } from "../utils/cupones";
let carrito = [];

export function agregarProducto(producto) {
  const existe = carrito.find(item => item.id === producto.id);
  if (existe) {
    existe.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }
}

export function incrementarCantidad(id) {
  carrito = carrito.map(item =>
    item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
  );
}

export function restarCantidad(id) {
  carrito = carrito.map(item =>
    item.id === id && item.cantidad > 1
      ? { ...item, cantidad: item.cantidad - 1 }
      : item
  );
}

export function eliminarProducto(id) {
  carrito = carrito.filter(item => item.id !== id);
}

export function obtenerCarrito() {
  return carrito;
}

export function cantidadTotal() {
  return carrito.reduce((total, item) => total + item.cantidad, 0);
}

export function totalPesos() {
  return carrito.reduce(
    (acumulador, item) => acumulador + item.cantidad * item.price,
    0
  );
}

export function calcularDescuento(cuponActivo, carrito) {
  if (cuponActivo && CUPONES_VALIDOS[cuponActivo]) {
    return CUPONES_VALIDOS[cuponActivo].calcularDescuento(carrito);
  }
  return 0;
}