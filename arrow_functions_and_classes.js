//Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.
const addNumbers = (num1, num2) => num1 + num2;
console.log(addNumbers(5, 7));

//Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.

const setCarBrand = (brand) => {
    let car = {brand: brand}
    return car
} 
console.log(setCarBrand("Seat"))

//Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe.
class Person {
  name;
  constructor(name) {
    this.name = name;
  }
  sayMyName = () => this.name;
}

const name = "Wild Bill";
const person1 = new Person(name);
console.log(person1.sayMyName());

