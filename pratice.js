let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    display.textContent = currentInput;
}

function appendOperator(op) {
    if (currentInput === '') return;
    currentInput += op;
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.textContent = '0';
}

function calculate() {
    if (currentInput === '') return;

    // Clear display and show "Thinking" text
    display.textContent = 'Thinking';


    const dotContainer = document.createElement('span');
    for (let i = 0; i < 3; i++) {
        const dot = document.createElement('span');
        dot.classList.add('thinking-dot');
        dotContainer.appendChild(dot);
    }
    display.appendChild(dotContainer);

    setTimeout(() => {
        display.textContent = '';
        try {
            let result = eval(currentInput);
            display.textContent = result;
            currentInput = result.toString();
        } catch (e) {
            display.textContent = 'Error';
            currentInput = '';
        }
    }, 2000);
}