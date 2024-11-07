let cart = [];

function addItem() {
  const itemName = document.getElementById("itemName").value;
  const itemPrice = parseFloat(document.getElementById("itemPrice").value);

  // Validasi input
  if (itemName === "" || isNaN(itemPrice) || itemPrice <= 0) {
    alert("Masukkan nama barang dan harga yang valid.");
    return;
  }

  // Tambah barang ke dalam array keranjang
  cart.push({ name: itemName, price: itemPrice });

  // Bersihkan input
  document.getElementById("itemName").value = "";
  document.getElementById("itemPrice").value = "";

  updateCart();
}

function updateCart() {
  const itemList = document.getElementById("itemList");
  itemList.innerHTML = "";

  // Tampilkan daftar barang
  cart.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${item.name} - Rp ${item.price} 
                              <button onclick="removeItem(${index})">Hapus</button>`;
    itemList.appendChild(listItem);
  });

  calculateTotal();
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function clearCart() {
  cart = [];
  updateCart();
}

function calculateTotal() {
  let subtotal = 0;
  cart.forEach((item) => (subtotal += item.price));

  let discount = 0;
  if (subtotal > 2000000) {
    discount = subtotal * 0.15;
  } else if (subtotal > 1000000) {
    discount = subtotal * 0.1;
  }

  if (cart.length > 5) {
    discount += subtotal * 0.05;
  }

  const total = subtotal - discount;

  document.getElementById("subtotal").innerText = subtotal.toFixed(2);
  document.getElementById("discount").innerText = discount.toFixed(2);
  document.getElementById("total").innerText = total.toFixed(2);
}
