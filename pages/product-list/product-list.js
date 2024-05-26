document.addEventListener("DOMContentLoaded", () => {
  renderCheckoutCart();
});

function renderCheckoutCart() {
  const cartList = document.getElementById("cartList");
  const subtotalElement = document.getElementById("subtotal-cartAside");
  cartList.innerHTML = '';

  let subtotal = 0;
  store.state.cart.forEach(product => {
    const cartItem = document.createElement("li");
    cartItem.innerHTML = `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.title}" class="cart-item-image">
        <div class="cart-item-details">
          <h3 class="product-title-cart">${product.title}</h3>
          <h3 class="product-price-cart">R$${product.price.toFixed(2)}</h3>
          <p class="text-quantidade">Quantidade</p>
          <input type="number" min="1" value="${product.quantity}" class="quantity" data-id="${product.id}">
        </div>
        <button class="remove" onclick="handleRemoveFromCart(${product.id})">X</button>
      </div>
    `;
    cartList.appendChild(cartItem);
    subtotal += product.price * product.quantity;
  });

  subtotalElement.textContent = `Subtotal: R$${subtotal.toFixed(2)}`;
  updateCartQuantities();
}

function handleRemoveFromCart(productId) {
  const product = store.state.cart.find(p => p.id === productId);
  if (product) {
    store.removeFromCart(product);
    renderCheckoutCart();
    showPopup("Item removido do carrinho!", false);
  }
}

function updateCartQuantities() {
  const quantityInputs = document.querySelectorAll(".quantity");
  quantityInputs.forEach(input => {
    input.addEventListener("change", (e) => {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = store.state.cart.find(p => p.id === productId);
      if (product) {
        const quantity = parseInt(e.target.value);
        if (quantity > 0) {
          store.updateCartQuantity(product, quantity);
          renderCheckoutCart();
        }
      }
    });
  });
}

function showPopup(message, isAdd) {
  var popup = document.getElementById('cartPopup');
  popup.textContent = message;
  
  if (isAdd) {
      popup.classList.add('cartadd');
      popup.classList.remove('cartremove');
  } else {
      popup.classList.add('cartremove');
      popup.classList.remove('cartadd');
  }
  
  popup.classList.add('show');
  setTimeout(function() {
      popup.classList.remove('show');
  }, 3000);
}
