//Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.
const makePromise = (wordKept) => {
  const myPromise = new Promise((resolve, reject) => {
    wordKept
      ? resolve("I always keep my promises")
      : reject("Sorry, promises are only there to be broken");
  });
  myPromise.then(
    (value) => console.log(value),
    (reason) => console.log(reason)
  );
};
makePromise(false);

//Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.
const myFunction = (message) => console.log(message);
const myParameter = true;
const doStuff = (myParameter, myFunction) => {
  myParameter
    ? myFunction("The truth prevails")
    : myFunction("Another lying toad");
};
doStuff(myParameter, myFunction);

//Donats els objectes employees i salaries, crea una arrow function getEmployee() que retorni una Promise efectuant la cerca en l'objecte pel seu id.
let employees = [
  {
    id: 1,
    name: "Linux Torvalds",
  },
  {
    id: 2,
    name: "Bill Gates",
  },
  {
    id: 3,
    name: "Jeff Bezos",
  },
];

let salaries = [
  {
    id: 1,
    salary: 4000,
  },
  {
    id: 2,
    salary: 1000,
  },
  {
    id: 3,
    salary: 2000,
  },
];

const getEmployee = (id) => {
  const findEmployee = new Promise((resolve, reject) => {
    const employee = employees.find((elemement) => elemement.id === id);
    employee
      ? resolve(employee)
      : reject(`No employee found with id ${id}`);
  });
  findEmployee.then(
    (employee) => console.log(`Employee name: ${employee.name}`),
    (reason) => {
        throw new Error (reason)
    });
  
};

// Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee i retorni el seu salari.

const getSalary = (id) => {
  const retrieveSalary = new Promise((resolve, reject) => {
    const salary = salaries.find((s) => s.id === id);
    salary ? resolve(salary) : reject(`No employee found with id ${id}`);
  });
  retrieveSalary.then(
    (salary) => console.log(`Employee salary: ${salary.salary}`),
    (reason) => {
        throw new Error (reason)
    })
    // .catch((error)=>console.error(error.message)
    // );
};

//Invoca la primera funció getEmployee() i després getSalary() niant l'execució de les dues promises de manera que es retorni per la consola el nom de l'empleat/da i el seu salari.

const getFullEmployeeInfo = (id) => {
  try {
  getEmployee(id);
  getSalary(id)
  }
  catch {(e) => console.error(e.message)
}
};
getFullEmployeeInfo(22)

//Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri per la consola.