'use strict';
/**
 * Функция складывает переданные параметры.
 * @param {number} a 
 * @param {number} b 
 * @returns {number} сумма "a" и "b".
 */
function addition(a, b) {
    return a + b;
}

/**
 * Функция из параметра "a" вычитает параметр "b".
 * @param {number} a 
 * @param {number} b 
 * @returns {number} разность "a" и "b".
 */
function subtraction(a, b) {
    return a - b;
}

/**
 * Функци делит параметр "a" на параметр "b".
 * @param {number} a 
 * @param {number} b 
 * @returns {number} 
 */
function division(a, b) {
    return a / b;
}

/**
 * Функция умножает параметр "a" на параметр "b".
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function multiplication(a, b) {
    return a * b;
}

/**
 * Функция получает два числа и осуществляет над ними математическую операцию.
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation может быть "+", "-", "/", "*".
 * @throws {Error} если переданна не предусмотренная операция, то будет выброшена ошибка.
 * @returns {number}
 */
function matOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addition(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "/":
            return division(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
        default:
            throw new Error("Операция " + operation + "не предусмотрена.");
    }
}

console.log(matOperation(2, 3, "+"));
console.log(matOperation(2, 3, "-"));
console.log(matOperation(2, 3, "/"));
console.log(matOperation(2, 3, "*"));
console.log(matOperation(2, 3, "lorem"));