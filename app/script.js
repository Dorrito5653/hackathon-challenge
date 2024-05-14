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
    itemList.appendChild(listItem);

    itemInput.value = "";
}

window.onload = function() {
    // You can add initial items here if you want
};