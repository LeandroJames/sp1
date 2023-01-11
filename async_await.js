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
  return new Promise((resolve, reject) => {
    const employee = employees.find((elemement) => elemement.id === id);
    employee ? resolve(employee) : reject(new Error(`No employee found with id ${id}`));
  });
};

const getSalary = (id) => {
  return new Promise((resolve, reject) => {
    const salary = salaries.find((s) => s.id === id);
    salary ? resolve(salary) : reject(new Error(`No employee found with id ${id}`));
  });
};

//Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi per pantalla el nom de l'empleat/da i el seu salari, usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior.

const getFullEmployeeInfo = async (soughtEmployee) => {
  getEmployee(soughtEmployee).then(
    (employee) => {
      let name = employee.name
      getSalary(soughtEmployee, name).then(
        (salary) => {
          console.log(`EMPLOYEE ~ Name: ${name}, Salary: ${salary.salary}`)
        }
      )
    })
    .catch((reason) => console.error(reason.message))
}
getFullEmployeeInfo(20);

//Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació.
const myFunction = async () => console.log(await delayMessage());

const delayMessage = () => {
  return new Promise((resolve) => setTimeout(() => resolve("All good"), 2000))
};
myFunction();

//Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.
//Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.

const delayedDouble = (number) => {
  return new Promise((resolve, reject) => {
    isNaN(number)
      ? reject(new Error("Parameters must be numbers"))
      : setTimeout(() => resolve(number * 2), 2000)
  });
};

const addUpDoubles = async (number1, number2, number3) => {
  const first_double = await delayedDouble(number1)
    .catch((err) => console.error(err.message))
  const second_double = await delayedDouble(number2)
    .catch((err) => console.error(err.message))
  const third_double = await delayedDouble(number3)
    .catch((err) => console.error(err.message))
  return new Promise((resolve, reject) => {
      const total = first_double + second_double + third_double
      isNaN(total)
      ? reject (new Error ("Unable to provide result as parameters are not numbers"))
      : resolve (total)
  })
}
addUpDoubles(1, 3, "b").then(
  (total) => console.log(total))
  .catch((error)=>console.error(error.message));

//Força i captura tants errors com puguis dels nivells 1 i 2.
