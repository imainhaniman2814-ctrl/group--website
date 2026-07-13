<script>
let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelectorAll('.btn-primary').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    let productName = this.parentElement.querySelector('h3').innerText;
    let productPrice = this.getAttribute("data-price");

    // Check kalau item dah ada → tambah quantity
    let existingItem = cart.find(item => item.name === productName);
    if(existingItem){
      existingItem.quantity += 1;
    } else {
      cart.push({name: productName, price: parseFloat(productPrice), quantity: 1});
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // Update popup
    let cartList = document.getElementById('cartItems');
    cartList.innerHTML = "";
    cart.forEach(item => {
      let li = document.createElement('li');
      li.textContent = `${item.name} - RM${item.price} x ${item.quantity}`;
      cartList.appendChild(li);
    });

    document.getElementById('cartModal').style.display = 'block';
  });
});

// Close modal
document.querySelector('.close').onclick = function() {
  document.getElementById('cartModal').style.display = 'none';
};
</script>
