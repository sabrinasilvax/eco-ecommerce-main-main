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
     this.saveCart();
   },
   removeFromCart(product) {
     this.state.cart = this.state.cart.filter(p => p.id !== product.id);
     this.saveCart();
   },
   isProductInCart(productId) {
     return this.state.cart.some(p => p.id === productId);
   },
   updateCartQuantity(product, quantity) {
     const cartProduct = this.state.cart.find(p => p.id === product.id);
     if (cartProduct) {
       cartProduct.quantity = quantity;
     }
     this.saveCart();
   },
   saveCart() {
     localStorage.setItem('cart', JSON.stringify(this.state.cart));
   },
   loadCart() {
     const savedCart = localStorage.getItem('cart');
     if (savedCart) {
       this.state.cart = JSON.parse(savedCart);
     }
   }
   
 };
 store.loadCart();
 
 window.store = store;
 