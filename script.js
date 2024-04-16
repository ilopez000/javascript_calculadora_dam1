// Variables para almacenar los operandos y la operación actual
let operandoActual = '';
let operandoPrevio = '';
let operacion = null;

/**
 * Agrega un número a la entrada actual.
 * @param {string} numero El número a agregar
 */
function agregarNumero(numero) {
    // Concatena el número a la cadena del operando actual
    operandoActual += numero;
    // Actualiza el valor mostrado en la pantalla de la calculadora
    actualizarPantalla();
    mostrar_valores_en_consola();
}

/**
 * Establece la operación a realizar y prepara los operandos.
 * @param {string} op El operador para la operación matemática
 */
function elegirOperacion(op) {
    // No hace nada si operandoActual está vacío
    if (operandoActual === '') return;
    // Si ya hay un operando previo, realiza la operación
    if (operandoPrevio !== '') calcular();
    // Guarda el operador y actualiza los operandos
    operacion = op;
    operandoPrevio = operandoActual;
    operandoActual = '';
    mostrar_valores_en_consola();
}

/**
 * Calcula el resultado de la operación seleccionada.
 */
function calcular() {
    let calculo;
    const previo = parseFloat(operandoPrevio); // Convierte el operando previo a número
    const actual = parseFloat(operandoActual); // Convierte el operando actual a número
    // Si alguno de los operandos no es un número, no hace nada
    if (isNaN(previo) || isNaN(actual)) return;

    switch (operacion) { // Realiza la operación basada en el tipo de operador
        case '+':
            calculo = previo + actual;
            break;
        case '-':
            calculo = previo - actual;
            break;

        default:
            return; // No realiza ninguna operación si no se reconoce el operador
    }
    // Almacena el resultado como operando actual para nuevas operaciones
    operandoActual = calculo;
    operacion = undefined;
    operandoPrevio = '';
    // Actualiza la pantalla con el resultado
    actualizarPantalla();
    mostrar_valores_en_consola();
}

/**
 * Actualiza la pantalla de la calculadora.
 */
function actualizarPantalla() {
    // Establece el valor del elemento 'pantalla' al operando actual
    document.getElementById('pantalla').value = operandoActual;
}

/**
 * Reinicia la calculadora a su estado inicial.
 */
function reiniciar() {
    // Limpia todos los operandos y la operación
    operandoActual = '';
    operandoPrevio = '';
    operacion = null;
    // Restablece la pantalla
    actualizarPantalla();
}

function mostrar_valores_en_consola(){
    console.log("operandoActual "+operandoActual);
    console.log("operandoPrevio "+operandoPrevio);
    console.log("operacion "+operacion);

}
