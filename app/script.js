
// Function to add an item to the pantry
function addItem() {
  var itemInput = document.getElementById("itemInput");
  var quantityInput = document.getElementById("quantityInput"); // Get quantity input field
  var item = itemInput.value.trim();
  var quantity = quantityInput.value.trim(); // Get quantity value

  if (item === "") {
      alert("Please enter an item.");
      return;
  }

  var itemList = document.getElementById("itemList");
  var listItem = document.createElement("li");
  listItem.textContent = item;

  // Create a span element for quantity and set its text content
  var quantitySpan = document.createElement("span");
  quantitySpan.textContent = "Quantity: " + quantity;
  quantitySpan.classList.add("quantity");
  listItem.appendChild(quantitySpan);

  // Add expiry date input
  var expiryInput = document.createElement("input");
  expiryInput.type = "date";
  expiryInput.classList.add("expiry-date");
  listItem.appendChild(expiryInput);

  var removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.classList.add("remove-btn");
  removeButton.onclick = function() {
      itemList.removeChild(listItem);
  };

  listItem.appendChild(removeButton);
  itemList.appendChild(listItem);

  itemInput.value = "";
  quantityInput.value = "1"; // Reset quantity input field after adding an item

  // Add event listener for expiry date change
  expiryInput.addEventListener("change", function() {
      // Logic to store expiry date (implementation not shown here)
      console.log("Expiry date selected:", expiryInput.value);
  });
}

// Function to toggle between light and dark mode
function toggleMode(mode) {
  const body = document.body;
  if (mode === 'light') {
      body.classList.remove('dark-mode');
  } else if (mode === 'dark') {
      body.classList.add('dark-mode');
  }
}

// Function to calculate and return the total quantity of items in the pantry
function getTotalQuantity() {
  var total = 0;
  var quantitySpans = document.querySelectorAll('.quantity');
  quantitySpans.forEach(function(span) {
      // Extract the quantity value from the text content of the span
      var quantity = parseInt(span.textContent.split(":")[1].trim());
      total += quantity;
  });
  return total;
}

// Function to navigate to the selected URL
function navigate(url) {
  window.location.href = url;
}