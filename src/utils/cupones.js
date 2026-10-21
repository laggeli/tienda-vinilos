export const CUPONES_VALIDOS = {
  "GITANO15": {
    mensaje: "¡15% OFF en la discografía de Sandro aplicado!",
    calcularDescuento: (carrito) => {
      const subtotalSandro = carrito.reduce((acc, item) => item.dameFuego ? acc + (item.price * item.cantidad) : acc, 0);
      return subtotalSandro * 0.15;
    }
  },
  "ROCK20": {
    mensaje: "¡20% OFF en todos los vinilos de Rock!",
    calcularDescuento: (carrito) => {
      const subtotalRock = carrito.reduce((acc, item) => item.category == "Rock" ? acc + (item.price * item.cantidad) : acc, 0);
      return subtotalRock * 0.20;
    }
  },
  "BIENVENIDA": {
    mensaje: "¡10% OFF en toda tu compra!",
    calcularDescuento: (carrito) => {
      const total = carrito.reduce((acc, item) => acc + (item.price * item.cantidad), 0);
      return total * 0.10;
    }
  }
};