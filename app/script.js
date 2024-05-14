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

    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");
    removeButton.onclick = function() {
        itemList.removeChild(listItem);
    };

    listItem.appendChild(removeButton);
    itemList.appendChild(listItem);

    itemInput.value = "";
}

window.onload = function() {
    // You can add initial items here if you want
};