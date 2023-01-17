//Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. Testeja la correcta execució d'aquestes funcions.
const checkInput = (a, b) => {
  if (isNaN(a | b)) throw new Error("Input must be a number")
  if (!a | !b) {
    if (a!==0 && b!==0) throw new Error("Two inputs are needed for this function")
  }else return true;
};
export const add = (a, b) => {
  if (checkInput(a, b)) return a + b;
};
export const substract = (a, b) => {
  if (checkInput(a, b)) return a - b;
};
export const multiply = (a, b) => {
  if (checkInput(a, b)) return a * b;
};
export const divide = (a, b) => {
 if (b === 0) throw new Error("Divisor must be other than 0");
 if (isNaN(a | b)) throw new Error("Input must be a number")
 else return a / b
};