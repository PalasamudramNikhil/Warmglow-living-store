const container = document.getElementById("product-list");
const searchInput = document.getElementById("searchInput");
const priceFilter = document.getElementById("priceFilter");

// Render products to the page
function renderProducts(productList) {
  container.innerHTML = "";

  if (productList.length === 0) {
    container.innerHTML = "<p>No products found.</p>";
    return;
  }

  productList.forEach((product) => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
      <button onclick="handleBuy(${product.id})">Buy</button>
    `;
    container.appendChild(div);
  });
}

// Initial load
renderProducts(products);

function addToCart(productId) {
  const email = localStorage.getItem("currentUser");
  if (!email) {
    alert("Please login first.");
    window.location.href = "login.html";
    return;
  }

  const cart = JSON.parse(localStorage.getItem(`cart_${email}`)) || [];
  const selected = products.find(p => p.id === productId);
  cart.push(selected);
  localStorage.setItem(`cart_${email}`, JSON.stringify(cart));
  alert(`${selected.name} added to cart!`);
}


// Filter logic
function applyFilters() {
  let filtered = [...products];
  const searchText = searchInput.value.toLowerCase();
  const priceValue = priceFilter.value;

  if (searchText) {
    filtered = filtered.filter(product =>
      product.name.toLowerCase().includes(searchText) ||
      product.description.toLowerCase().includes(searchText)
    );
  }

  if (priceValue === "below1000") {
    filtered = filtered.filter(product => product.price < 1000);
  } else if (priceValue === "above1000") {
    filtered = filtered.filter(product => product.price >= 1000);
  }
  else if (priceValue === "below500") {
    filtered = filtered.filter(product => product.price < 500);
  }
  else if (priceValue === "above500") {
    filtered = filtered.filter(product => product.price >= 500);
  }
  renderProducts(filtered);
}

// Event listeners
searchInput.addEventListener("input", applyFilters);
priceFilter.addEventListener("change", applyFilters);

// Dropdown category filter
function filterByCategory(category) {
  let filtered = [...products];
  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }
  renderProducts(filtered);
}
let selectedProduct = null;

function handleBuy(productId) {
  selectedProduct = products.find(p => p.id === productId);
  if (!selectedProduct) return;

  document.getElementById("modal-image").src = selectedProduct.image;
  document.getElementById("modal-name").textContent = selectedProduct.name;
  document.getElementById("modal-desc").textContent = selectedProduct.description;
  document.getElementById("modal-price").textContent = selectedProduct.price;
  document.getElementById("buyModal").style.display = "block";
}

function closeModal() {
  document.getElementById("buyModal").style.display = "none";
}
function confirmBuy() {
  const email = localStorage.getItem("currentUser");
  if (!email) {
    alert("Please login first.");
    return;
  }

  const address = document.getElementById("userAddress").value.trim();
  if (!address) {
    alert("Please enter your delivery address.");
    return;
  }

  const purchases = JSON.parse(localStorage.getItem(`purchasedProducts_${email}`)) || [];

  // Attach address to the selected product
  const productWithAddress = {
    ...selectedProduct,
    address: address,
    purchaseDate: new Date().toLocaleString()
  };

  purchases.push(productWithAddress);
  localStorage.setItem(`purchasedProducts_${email}`, JSON.stringify(purchases));

  closeModal();
  window.location.href = "purchase-details.html";
}

const users = JSON.parse(localStorage.getItem("users")) || {};
const currentEmail = localStorage.getItem("currentUser");

if (currentEmail && users[currentEmail]) {
  const username = users[currentEmail].name;
  document.getElementById("welcomeUser").textContent = `Welcome, ${username}!`;
}


