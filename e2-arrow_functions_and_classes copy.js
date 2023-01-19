//Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.
console.log((num1, num2) => (num1 + num2)(5, 7));

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
  sayMyName = () => console.log(this.name);
}

const person1 = new Person("Wild Bill");
person1.sayMyName();

//Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.
class PersonalDetails {
  // email;
  // bankAccountNumber;
  constructor() {
    // this.email=email
    // this.bankAccountNumber=bankAccountNumber
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
//const kingCnut = new clonePersonalDetails("the_cnutty_king@email.com", "DN5879200145897");

// class ClonedPersonalDetails extends PersonalDetails {
//   constructor (email, bankAccountNumber) {
//     super()
//     this.email=email;
//     this.bankAccountNumber=bankAccountNumber
// }}
// Object.setPrototypeOf(ClonedPersonalDetails.prototype, PersonalDetails);
//   ClonedPersonalDetails.prototype.constructor = (email, bankAccountNumber) => {
//     (this.email = email), (this.bankAccountNumber = bankAccountNumber);
//   };

class AbstractClass {
  constructor() {
    //Les classes abstractes no es poden instanciar
    if (this.constructor === AbstractClass) {
      throw new Error("this class cannot be instantiated");
    }
  }
  //Funció classe abstracta
  display() {
    return "Employee name is: " + this.name;
  }
}

class clonePersonalDetails {
  constructor(email, bankAccountNumber) {
    this.email = email;
    this.bankAccountNumber = bankAccountNumber;
  }
}

clonePersonalDetails.prototype = Object.create(PersonalDetails.prototype);
const babyJane = new clonePersonalDetails("jane_the_babe@email.com", "ES250125358478925");
const kingCnut = new clonePersonalDetails("the_cnutty_king@email.com", "DN5879200145897");
console.log(
   `Baby Jane's email is ${babyJane.getEmail()} and her bank account number is ${babyJane.getBankAccountNumber()}`
);
console.log(
  `King Cnut's email is ${kingCnut.getEmail()} and his bank account number is ${kingCnut.getBankAccountNumber()}`
)