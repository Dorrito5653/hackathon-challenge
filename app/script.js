function addItem() {
    var itemInput = document.getElementById("itemInput");
    var item = itemInput.value.trim();
  
    if (item === "") {
      alert("Please enter an item.");
      return;
    }
  
    var itemList = document.getElementById("itemList");
    var listItem = document.createElement("li");
    listItem.textContent = item;
  
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
  
    // Add event listener for expiry date change
    expiryInput.addEventListener("change", function() {
      // Logic to store expiry date (implementation not shown here)
      console.log("Expiry date selected:", expiryInput.value);
    });
  }
  
  function toggleMode(mode) {
    const body = document.body;
    if (mode === 'light') {
      body.classList.remove('dark-mode');
    } else if (mode === 'dark') {
      body.classList.add('dark-mode');
    }
  }
  