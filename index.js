const input = document.getElementById('inputtext');
const buttons = document.querySelectorAll('button');
function calculate(expression) {
    console.log(expression);
    try {
        return new Function('return ' + expression)();
    } catch (error) {
        return 'Invalid. Try the valid number.';
    }
}
function operation(buttonValue) {
    if (buttonValue === 'C')
    {
        input.value = '';
    }
    else if (buttonValue === 'DEL')
    {
        input.value = input.value.slice(0, -1);
    }
    else if (buttonValue === '=')
    {
        input.value = calculate(input.value);
    }
    else if (buttonValue === '%')
    {
        input.value = calculate(input.value * 0.01);
    }
    
    else {
        input.value += buttonValue;
    }
}
buttons.forEach(button => {
    let buttonValue = button.innerText;
    button.addEventListener('click', () => operation(buttonValue));
    });



