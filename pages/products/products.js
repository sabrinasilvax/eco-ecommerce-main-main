document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  initializeCart();
});

let lastValidSubtotal = 0.00;

function renderProducts() {
  const container = document.getElementById("products-container");
  container.innerHTML = '';
  
  products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    const stars = Array.from({ length: 5 }).map((_, index) => {
      return `<span class="star">${index < Math.round(product.rating.rate) ? '★' : '☆'}</span>`;
    }).join('');

    productCard.innerHTML = `
    <div class="container-sale" style="${product.sale === 0 ? 'display: none;' : ''}"><p>-${product.sale}%</p></div>
    <img src="${product.image}" alt="${product.description}">
    <h2>${product.title}</h2>
    <div class="stars">${stars} (${product.rating.rate})</div>
    <p class="price">R$${product.price}</p>

    <div class="container-buttons">
    <button class="btn-hover-white">Ver mais</button>
    <div class="buttons">
      ${store.isProductInCart(product.id)
        ? `<button class="remove" onclick="handleRemoveFromCart(${product.id})"><span class="material-symbols-outlined">
        remove_shopping_cart
        </span></button>`
        : `<button class="add" onclick="handleAddToCart(${product.id})"><span class="material-symbols-outlined">
        add_shopping_cart
        </span></button>`}
    </div>
    </div>
  `;
    container.appendChild(productCard);
  });
}

function handleAddToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    store.addToCart(product);
    renderCart();
  }
}

function handleRemoveFromCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    store.removeFromCart(product);
    renderCart();
  }
}

function initializeCart() {
  const cartToggle = document.getElementById("cartToggle");
  const cartAside = document.getElementById("cartAside");
  const closeCartButton = document.querySelector(".close-button");

  closeCartButton.addEventListener("click", () => {
    cartAside.classList.remove("show");
  });

  cartToggle.addEventListener("click", () => {
    cartAside.classList.toggle("show");
  });

  renderCart();
}

function renderCart() {
  const cartList = document.getElementById("cartList");
  const subtotalElement = document.getElementById("subtotal-cartAside");
  cartList.innerHTML = '';
  
  let subtotal = 0;
  store.state.cart.forEach(product => {
    const cartItem = document.createElement("li");
    cartItem.innerHTML = `
    ${product.title} - R$${product.price} 
 
    <input type="number" min="1" value="${product.quantity}" class="quantity" data-id="${product.id}">
    
    <button class="remove" onclick="handleRemoveFromCart(${product.id})">X</button>
  `;
    cartList.appendChild(cartItem);
    subtotal += product.price * product.quantity;
  });

  if (isNaN(subtotal)) {
    subtotal = lastValidSubtotal; 
  } else {
    lastValidSubtotal = subtotal;
  }

  subtotalElement.textContent = `Subtotal: R$${subtotal.toFixed(2)}`;
  updateCartQuantities();
}

function updateCartQuantities() {
  const quantityInputs = document.querySelectorAll(".quantity");
  quantityInputs.forEach(input => {
    input.addEventListener("change", (e) => {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find(p => p.id === productId);
      if (product) {
        const quantity = parseInt(e.target.value);
        store.updateCartQuantity(product, quantity);
        renderCart();
      }
    });
  });
}


const store = {
  state: {
    cart: []
  },
  addToCart(product) {
    const cartProduct = this.state.cart.find(p => p.id === product.id);
    if (cartProduct) {
      cartProduct.quantity += 1;
    } else {
      this.state.cart.push({ ...product, quantity: 1 }); 
    }
  },
  removeFromCart(product) {
    this.state.cart = this.state.cart.filter(p => p.id !== product.id);
  },
  isProductInCart(productId) {
    return this.state.cart.some(p => p.id === productId);
  },
  updateCartQuantity(product, quantity) {
    const cartProduct = this.state.cart.find(p => p.id === product.id);
    if (cartProduct) {
      cartProduct.quantity = quantity;
    }
  }
};
