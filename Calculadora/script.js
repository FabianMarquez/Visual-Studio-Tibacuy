// Variables para manejar la expresión de cálculo
let display = document.getElementById("display");
let expression = "";

// Función para añadir valores al display
function appendValue(value) {
    expression += value;
    display.value = expression;
}

// Función para manejar las operaciones
function operate(operator) {
    expression += ` ${operator} `;
    display.value = expression;
}

// Función para calcular el resultado
function calculateResult() {
    try {
        expression = eval(expression).toString();
        display.value = expression;
    } catch (error) {
        display.value = "Error";
        expression = "";
    }
}

// Función para limpiar el display
function clearDisplay() {
    expression = "";
    display.value = "";
}
