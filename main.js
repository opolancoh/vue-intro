const app = new Vue({
  el: '#app',
  data: {
    brand: 'Vue Mastery',
    product: 'Socks',
    selectedVariant: 0,
    inventory: 5,
    details: ['80% cotton', '20% ployester', 'Gender-neutral'],
    variants: [
      {
        id: 1,
        color: 'green',
        image: './assets/vmSocks-green-onWhite.jpg',
        quantity: 10
      },
      {
        id: 2,
        color: 'blue',
        image: './assets/vmSocks-blue-onWhite.jpg',
        quantity: 0
      }
    ],
    cart: 0
  },
  methods: {
    addToCart: function() {
      this.cart += 1;
    },
    updateProduct: function(index) {
      this.selectedVariant = index;
      console.log(index);
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock(){
        return this.variants[this.selectedVariant].quantity
    }
  }
});
