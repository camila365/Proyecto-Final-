const carrito = [];

document.querySelectorAll('.agregar-carrito').forEach((button) => {
  button.addEventListener('click', (e) => {
    const nombre = e.target.dataset.nombre;
    const precio = parseFloat(e.target.dataset.precio);
    const cantidad = parseInt(e.target.previousElementSibling.value);

    if (cantidad > 0) {
      // Verificar si el producto ya está en el carrito
      const productoExistente = carrito.find((item) => item.nombre === nombre);

      if (productoExistente) {
        // Si existe, actualizar la cantidad
        productoExistente.cantidad += cantidad;
      } else {
        // Si no existe, agregarlo como nuevo
        carrito.push({ nombre, precio, cantidad });
      }

      actualizarCarrito();
    } else {
      alert('Por favor, selecciona una cantidad mayor a 0.');
    }
  });
});

function actualizarCarrito() {
  const listaCarrito = document.getElementById('lista-carrito');
  const total = document.getElementById('total');
  listaCarrito.innerHTML = '';

  let totalCarrito = 0;

  carrito.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - ${item.cantidad} x $${item.precio.toFixed(2)}`;
    listaCarrito.appendChild(li);

    totalCarrito += item.precio * item.cantidad;
  });

  total.textContent = `Total: $${totalCarrito.toFixed(2)}`;
}

function pagar() {
  alert('Redirigiendo a PayPal...');
  window.location.href = 'https://www.paypal.com';
}
