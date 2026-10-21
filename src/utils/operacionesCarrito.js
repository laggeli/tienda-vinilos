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

export function obtenerEnvio() {
  if (carrito.length === 0) return 0;
  // Busco el producto más barato y lo guardo en masBarato
  const masBarato = carrito.reduce((min, item) =>
    item.price < min.price ? item : min
  );

  // Ejemplo de cálculo: 5% del precio del más barato
  const porcentajeEnvio = 0.05;
  return masBarato.price * porcentajeEnvio;
}