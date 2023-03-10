//Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.

const makePromise = (wordKept) => {
  return new Promise((resolve, reject) => {
    wordKept
      ? () => resolve("I always keep my promises")
      : () => reject("Sorry, promises are only there to be broken");
  });
};

makePromise(false).then(
  (value)=>console.log(value),
  (reason)=>console.log(reason)
  );

//Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.
export const messageToCaps = (message) => {
  if (typeof(message)!=="string") throw new Error ("Please make sure the first parameter is a string")
  else return message.toUpperCase()
};
export const doStuff = (myParameter, myFunction) => {
  if (typeof(myFunction)!=="function") throw new Error ("Please make sure the second parameter is a function")
  else return myParameter
    ? myFunction("The truth prevails")
    : myFunction("Another lying toad");
};
console.log(doStuff(true, messageToCaps));
console.log(doStuff(false, messageToCaps));

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
  {
    id: 4,
    name: "Hermenegildo Pérez",
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

export const getEmployee = (id) => {
  return new Promise((resolve, reject) => {
    const employee = employees.find((elemement) => elemement.id === id);
    isNaN(id)
      ? reject(
          new Error(
            "Employee IDs are made up exclusively of numbers. Please check your input"
          )
        )
      : employee
      ? resolve(employee)
      : reject(new Error(`No employee found with id ${id}`));
  });
};

// Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee i retorni el seu salari.

export const getSalary = (employee) => {
  return new Promise((resolve, reject) => {
    const salary = salaries.find((s) => s.id === employee.id);
    salary
      ? resolve(salary.salary)
      : reject(new Error(`No employee found with id ${id}`));
  });
};

//Invoca la primera funció getEmployee() i després getSalary() niant l'execució de les dues promises de manera que es retorni per la consola el nom de l'empleat/da i el seu salari.

const employeeID = 2;

getEmployee(employeeID)
  .then((e) => {
    let employee = e;
    getSalary(employee).then((salary) => {
      console.log(`EMPLOYEE ~ Name: ${employee.name}, Salary: ${salary}`);
    });
  })
  .catch((reason) => console.error(reason.message));

//Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri per la consola.
