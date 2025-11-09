let display = document.getElementById('display');

function appendValue(x) {
    display.value += x;
}

function clearValue() {
    display.value = '';
}

function deleteValue() {
    display.value = display.value.toString().slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
