const url = 'https://dummyjson.com/products/search?q=XXX&limit=5&delay=1000';
const input = document.getElementById('searchInput');
const label = document.querySelector('.searchbarLabel');
const suggestionsList = document.getElementById('suggestionsList');
const loadingImg = document.querySelector('#searchbar::before');

input.addEventListener('focus', () => {
    label.classList.toggle('active_label', true);
});

input.addEventListener('blur', () => {
    if (input.value === '') {
        label.classList.remove('active_label');
    }
});

input.addEventListener('input', () => {
    // loadingImg.classList.add('showLoading');
    displaySuggestions();
});

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
        listItem.appendChild(listItemName);
        listItem.appendChild(listItemPrice);
        listItem.classList.add('listItem');

        suggestionsList.appendChild(listItem);
    });
    document.querySelector('#searchbar::before').classList.remove('showLoading');
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