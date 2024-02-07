const consoleInput = document.querySelector('#consoleInput');
const consoleOutput = document.querySelector('#consoleOutputWrapper')

const createParagraph = () => {
    return document.createElement('p');
};

const insertAnswer = (text) => {
    console.log(text)
    const answer = createParagraph();
    answer.textContent = text;
    consoleOutput?.appendChild(answer);
};

const clearConsoleOutput = () => {
    consoleOutput.innerHTML = '';
};

const generateRandomQuote = async () => {
    const url = 'https://dummyjson.com/quotes/random';
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.quote);
        insertAnswer(data.quote);
    } catch(error) {
        const p = createParagraph();
        p.textContent = error.message;
        consoleOutput?.appendChild(p);
    }
};

const helpKomand = () => {
    const systemKeys = Object.keys(commands.systemCommands);
    const customKeys = Object.keys(commands.customCommands);

    const systemCommandsMessage = `System commands: ${systemKeys.join(', ')}`;
    const customCommandsMessage = `Custom commands: ${customKeys.join(', ')}`;

    insertAnswer(systemCommandsMessage)
    insertAnswer(customCommandsMessage)
}

const double = () => {
    const inputValue = consoleInput.value.trim().toLowerCase();
    return 
}

const commands = {
    systemCommands: {
        clear: clearConsoleOutput,
        help: helpKomand,
        quote: generateRandomQuote,
        double: double,
    },
    customCommands: {
        hello: {
            msg: 'Hello :)'
            },
    }
};

const executeCommand = (event) => {
    if (event.key === 'Enter') {
        const inputValue = event.target.value.trim().toLowerCase();
        const hasNumbers = /\d/.test(inputValue);
        let commandKey;
        let numberArgument = null;

        if (hasNumbers) {
            // Jeśli inputValue zawiera cyfry, wyodrębnij liczbę i przypisz ją do numberArgument
            const match = inputValue.match(/\d+/);
            numberArgument = match ? parseInt(match[0]) : null;
            
            // Usuń cyfry ze stringa, aby uzyskać klucz
            commandKey = inputValue.replace(/\d/g, '');
        } else {
            commandKey = inputValue;
        }

        if (commands.systemCommands.hasOwnProperty(commandKey)) {
            // Przekazujemy numberArgument jako argument do funkcji, jeśli istnieje
            commands.systemCommands[commandKey](numberArgument);
        } else {
            insertAnswer(`This command does not exist: "${inputValue}".`);
        }
        consoleInput.value = '';
    }
};

consoleInput?.addEventListener('keydown', executeCommand);
