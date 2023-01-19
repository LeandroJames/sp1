//Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.
console.log((num1, num2) => (num1 + num2)(5, 7));

//Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.

const setCarBrand = (brand) => {
  let car = { brand: brand };
  return car;
};
console.log(setCarBrand("Seat"));

//Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe.
export class Person {
  name;
  constructor(name) {
    this.name = name;
  }
  sayMyName = () => console.log(this.name);
}

const person1 = new Person("Wild Bill");
person1.sayMyName();

//Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.
export class PersonalDetails {
  constructor() {
    if (this.constructor == PersonalDetails) {
      throw Error(
        "This information is private and you, my dear, have been granted no access"
      );
    }
  }
  getEmail() {
    return this.email;
  }
  getBankAccountNumber() {
    return this.bankAccountNumber;
  }
}


//Below are different attempts at creating an instance of the abstract class:
//console.log(new PersonalDetails());
//console.log(new PersonalDetails("johnsnow@thenorth.org"));
//const babyJane = new PersonalDetails("jane_the_babe@email.com", "ES250125358478925")

export const clonePersonalDetails = (email, bankAccountNumber) => {
  let clonedPersonalDetails = Object.create(PersonalDetails.prototype)
  clonedPersonalDetails.email = email
  clonedPersonalDetails.bankAccountNumber = bankAccountNumber
  return clonedPersonalDetails 
}
const babyJane = clonePersonalDetails("jane_the_babe@email.com", "ES250125358478925");
const kingCnut = clonePersonalDetails("the_cnutty_king@email.com", "DN5879200145897");
console.log(
   `Baby Jane's email is ${babyJane.getEmail()} and her bank account number is ${babyJane.getBankAccountNumber()}`
);
console.log(
  `King Cnut's email is ${kingCnut.getEmail()} and his bank account number is ${kingCnut.getBankAccountNumber()}`
)