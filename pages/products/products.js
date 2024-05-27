document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  initializeCart();
});

let lastValidSubtotal = 0.0;

function renderProducts() {
  const container = document.getElementById("products-container");
  container.innerHTML = "";

  const urlParams = new URLSearchParams(window.location.search);
  const productCategory = urlParams.get("category");

  const product = products.find(
    (product) => product.category === productCategory
  );

  if (product) {
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";

      const stars = Array.from({ length: 5 })
        .map((_, index) => {
          return `<span class="star">${
            index < Math.round(product.rating.rate) ? "★" : "☆"
          }</span>`;
        })
        .join("");

      productCard.innerHTML = `
    <div class="container-sale" style="${
      product.sale === 0 ? "display: none;" : ""
    }"><p>-${product.sale}%</p></div>
    <img src="${product.image}" alt="${product.description}">
    <h2>${product.title}</h2>
    <div class="stars">${stars} (${product.rating.rate})</div>
    <p class="price">R$${product.price}</p>

    <div class="container-buttons">
    <a href="../product-details/product-details.html?id=${
      product.id
    }"><button class="btn-hover-white")>Ver mais</button></a>
    <div class="buttons">
        <button class="add" onclick="handleAddToCart(${
          product.id
        })"><span class="material-symbols-outlined">
        add_shopping_cart
        </span></button>
    </div>
    </div>
  `;
      container.appendChild(productCard);
    });
  } else {
    container.innerHTML = "<p>Produto não encontrado.</p>";
  }
}

function handleAddToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    store.addToCart(product);
    renderCart();
    showPopup("Item adicionado ao carrinho!", true);
  }
}

function handleRemoveFromCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    store.removeFromCart(product);
    renderCart();
    showPopup("Item removido do carrinho!", false);
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
  cartList.innerHTML = "";

  let subtotal = 0;
  store.state.cart.forEach((product) => {
    const cartItem = document.createElement("li");
    cartItem.innerHTML = `
    <section>
      <div>
        <h3 class="product-title-cart">${product.title}</h3> <p class="product-price-cart">R$${product.price}</p>
        <div class="quantidade">
          <p class="text-quantidade">Quantidade</p>
          <input type="number" min="1" value="${product.quantity}" class="quantity" data-id="${product.id}">
        </div>
      </div>
      <button class="remove" onclick="handleRemoveFromCart(${product.id})">X</button>
    </section>
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
  quantityInputs.forEach((input) => {
    input.addEventListener("change", (e) => {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      if (product) {
        const quantity = parseInt(e.target.value);
        store.updateCartQuantity(product, quantity);
        renderCart();
      }
    });
  });
}

function showPopup(message, isAdd) {
  var popup = document.getElementById("cartPopup");
  popup.textContent = message;

  if (isAdd) {
    popup.classList.add("cartadd");
    popup.classList.remove("cartremove");
  } else {
    popup.classList.add("cartremove");
    popup.classList.remove("cartadd");
  }

  popup.classList.add("show");
  setTimeout(function () {
    popup.classList.remove("show");
  }, 3000);
}
