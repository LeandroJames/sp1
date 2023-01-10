//Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.
const addNumbers = (num1, num2) => num1 + num2;
console.log(addNumbers(5, 7));

//Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.

const setCarBrand = (brand) => {
  let car = { brand: brand };
  return car;
};
console.log(setCarBrand("Seat"));

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

//Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.
class PersonalDetails {
  #address;
  #email;
  #bank_account_number;
  constructor() {
    if (this.constructor == PersonalDetails) {
      throw Error(
        "This information is private and you, my dear, are allowed no access"
      );
    }
  }
}
console.log(new PersonalDetails());
