var items = []

function addItem() {
    var itemInput = document.getElementById("itemInput");
    var quantityInput = document.getElementById("quantityInput"); // Get quantity input field
    var item = itemInput.value.trim();
    var quantity = quantityInput.value.trim(); // Get quantity value

    if (item === "") {
        alert("Please enter an item.");
        return;
    }

    items.push(item)
    console.log(items)
    let food_elms = document.querySelectorAll('#itemList li')
    let ret = false;
    food_elms.forEach(v => {
        /** @type {string} */
        let innert = v.innerText
        if (innert.split('\n')[0] === item) {
            ret = true;
            let q = v.querySelector('.quantity .quantity-val')
            let qt = Number(q.textContent) + Number(quantity)
            q.textContent = qt
            itemInput.value = ''
        }
    })
    if (ret) return;

    var itemList = document.getElementById("itemList");
    var listItem = document.createElement("li");
    listItem.textContent = item;

    // Create a span element for quantity and set its text content
    var quantitySpan = document.createElement("span");
    quantitySpan.innerHTML = 'Quantity: <span class="quantity-val">' + quantity + "</span>";
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
    removeButton.onclick = function () {
        itemList.removeChild(listItem);
        delete items[item]
    };

    listItem.appendChild(removeButton);
    itemList.appendChild(listItem);

    itemInput.value = "";
    quantityInput.value = "1"; // Reset quantity input field after adding an item

    // Add event listener for expiry date change
    expiryInput.addEventListener("change", function () {
        // Logic to store expiry date (implementation not shown here)
        console.log("Expiry date selected:", expiryInput.value);
    });
}

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

async function getRecipeRecommendations() {
    //Generates recipes and instructions based on items in pantry
    try {
        var responses = await fetch('http://localhost:3000/recommendations', {
            body: {
                items: []
            }
        })

        if (responses.ok) {
            var json = await responses.json();
            var first_response = json[0].message.content
            document.getElementById('chatbot_text').innerText = first_response
        } else {
            alert("HTTP-Error: " + responses.status)
        }
    } catch (e) {
        console.error(e)
        document.getElementById('chatbot_text').innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
}

// Function to navigate to the selected URL
function navigate(url) {
    window.location.href = url;
}