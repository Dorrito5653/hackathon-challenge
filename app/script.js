// In your main.js file
const pantryItems = [
    { name: 'Spices', image: 'spices.jpg' },
    { name: 'Canned Goods', image: 'canned-goods.jpg' },
    // Add more items
];

function displayPantryItems() {
    const pantrySection = document.getElementById('pantry-items');
    pantryItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('pantry-item');
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <p>${item.name}</p>
        `;
        pantrySection.appendChild(itemElement);
    });
}

displayPantryItems();