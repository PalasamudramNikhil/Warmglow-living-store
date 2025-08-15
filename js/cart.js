const email = localStorage.getItem("currentUser");

if (!email) {
  alert("Please login to view your cart.");
  window.location.href = "login.html";
}

const cartItems = JSON.parse(localStorage.getItem(`cart_${email}`)) || [];
const cartContainer = document.getElementById("cart-items");
const totalElement = document.getElementById("total");
let total = 0;

if (cartItems.length === 0) {
  cartContainer.innerHTML = "<p>Your cart is empty.</p>";
  totalElement.textContent = "Total: ₹0";
} else {
  cartItems.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p>₹${item.price}</p>
      <button onclick="removeFromCart(${index})">Remove</button>
      <button onclick="handleCartBuy(${index})">Buy</button>
    `;
    cartContainer.appendChild(div);
    total += item.price;
  });

  totalElement.textContent = `Total: ₹${total}`;
}

// Remove item
function removeFromCart(index) {
  cartItems.splice(index, 1);
  localStorage.setItem(`cart_${email}`, JSON.stringify(cartItems));
  location.reload();
}

let selectedCartItemIndex = null;

function handleCartBuy(index) {
  selectedCartItemIndex = index;
  const product = cartItems[index];
  document.getElementById("modal-image").src = product.image;
  document.getElementById("modal-name").textContent = product.name;
  document.getElementById("modal-desc").textContent = product.description;
  document.getElementById("modal-price").textContent = product.price;
  document.getElementById("delivery-address").value = ""; // Clear previous input
  document.getElementById("buyModal").style.display = "block";
}

function closeModal() {
  document.getElementById("buyModal").style.display = "none";
}

function confirmCartBuy() {
  const address = document.getElementById("delivery-address").value.trim();
  if (!address) {
    alert("Please enter a delivery address.");
    return;
  }

  const purchased = JSON.parse(localStorage.getItem(`purchasedProducts_${email}`)) || [];
  const boughtItem = cartItems[selectedCartItemIndex];

  // Add address and purchase date
  const productWithDetails = {
    ...boughtItem,
    address: address,
    purchaseDate: new Date().toLocaleString()
  };

  purchased.push(productWithDetails);
  localStorage.setItem(`purchasedProducts_${email}`, JSON.stringify(purchased));

  cartItems.splice(selectedCartItemIndex, 1);
  localStorage.setItem(`cart_${email}`, JSON.stringify(cartItems));

  closeModal();
  window.location.href = "purchase-details.html";
}

function buyAllCartItems() {
  const address = prompt("Enter delivery address for all items:");
  if (!address || address.trim() === "") {
    alert("Delivery address is required.");
    return;
  }

  if (cartItems.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  const purchased = JSON.parse(localStorage.getItem(`purchasedProducts_${email}`)) || [];

  const updatedPurchases = cartItems.map(item => ({
    ...item,
    address: address,
    purchaseDate: new Date().toLocaleString()
  }));

  purchased.push(...updatedPurchases);
  localStorage.setItem(`purchasedProducts_${email}`, JSON.stringify(purchased));
  localStorage.setItem(`cart_${email}`, JSON.stringify([]));

  alert("All products purchased successfully!");
  window.location.href = "purchase-details.html";
}
