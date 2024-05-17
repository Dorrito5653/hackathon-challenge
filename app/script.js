
// Function to add an item to the pantry
function chat() {
    /** @type {HTMLDivElement} */
    let div = document.querySelector('.chatbot_chat');
    div.style.display = 'flex'
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
    quantitySpans.forEach(function (span) {
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