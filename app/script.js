// Assume you have a function to make an API request called fetchData
function fetchData(pantryItems) {
    // Construct the API request URL based on pantry items
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `https://api.example.com/recipes?ingredients=${pantryItems.join(',')}&apiKey=${apiKey}`;

    // Make the API request
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Process the API response and display recommendations
            displayRecommendations(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Function to display recommendations
function displayRecommendations(recipes) {
    // Clear previous recommendations
    const recommendationList = document.getElementById("recommendationList");
    recommendationList.innerHTML = "";

    // Loop through recipes and create list items
    recipes.forEach(recipe => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = recipe.url;
        link.textContent = recipe.title;
        listItem.appendChild(link);
        recommendationList.appendChild(listItem);
    });
}

// Update the addItem function to call fetchData after adding an item
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

    // After adding an item, fetch recommendations
    const pantryItems = Array.from(itemList.children).map(item => item.textContent);
    fetchData(pantryItems);
}

const gpt3 = new OpenAIGPT3();

// Function to send a message to ChatGPT
async function sendMessage() {
    const userInput = document.getElementById("userInput");
    const message = userInput.value.trim();

    if (message === "") {
        return;
    }

    const chat = document.getElementById("chat");
    const userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.textContent = "You: " + message;
    chat.appendChild(userMessage);

    // Clear the user input
    userInput.value = "";

    // Get response from ChatGPT
    const response = await gpt3.send(message);
    const botMessage = document.createElement("div");
    botMessage.classList.add("bot-message");
    botMessage.textContent = "Chatbot: " + response.data.choices[0].text;
    chat.appendChild(botMessage);

    // Scroll to the bottom of the chat
    chat.scrollTop = chat.scrollHeight;
}

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

    // After adding an item, send message to ChatGPT
    sendMessage();
}

// On page load, send initial message to ChatGPT
window.onload = function() {
    sendMessage();
};
