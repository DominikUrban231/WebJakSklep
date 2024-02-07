const url = 'https://dummyjson.com/products/search?q=XXX&limit=5&delay=1000';
const input = document.getElementById('searchInput');
const suggestionsList = document.getElementById('suggestionsList');

input.addEventListener('input', displaySuggestions);

async function displaySuggestions() {
    const searchText = input.value.trim();

    if (searchText === '') {
        suggestionsList.innerHTML = '';
        return;
    }
    const suggestions = await getSuggestions(searchText);
    suggestionsList.innerHTML = '';

    suggestions.forEach(suggestion => {
        const listItem = document.createElement('div');
        const listItemName = document.createElement('div');
        const listItemPrice = document.createElement('div');
        
        listItemPrice.textContent = `$${suggestion.price}`;
        listItemName.textContent = suggestion.title;
        listItem.appendChild(listItemName).appendChild(listItemPrice);
        listItem.classList.add('listItem');

        suggestionsList.appendChild(listItem);
    });
}

async function getSuggestions(text) {
    const apiUrl = `https://dummyjson.com/products/search?q=${text}&limit=5&delay=1000`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error('Błąd podczas pobierania podpowiedzi:', error);
        return [];
    }
}