// READ ME!!
// Totes les funcions estan invocades abaix, perquè puguin ser comentades més fàcilment. S'han d'importar dues funcions de l'entrega anterior

import { getEmployee, getSalary} from "./e3-promises_and_callbacks.js";

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
        .catch(
          (error) => console.error(error.message),
          console.log(`Employee name: ${name}`)
        )
    })
    .catch((reason) => console.error(reason.message))
}

//Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació.
export const myFunction = async () => console.log(await delayMessage());

export const delayMessage = () => {
  return new Promise((resolve) => {setTimeout(() => resolve("All good"), 2000)})
};

//Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.
//Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.

const delayedDouble = (number) => {
  return new Promise((resolve, reject) => {
    number
      ? isNaN(number) | typeof number == "boolean" 
        ? reject(new Error("Parameters must be numbers"))
        : setTimeout(() => resolve(number * 2), 2000)
      : reject(new Error("Please give the function 3 parameters"))
  });
};

const addUpDoubles = async (number1, number2, number3) => {
  const first_double = await delayedDouble(number1)
  const second_double = await delayedDouble(number2)
  const third_double = await delayedDouble(number3)
  return new Promise((resolve, reject) => {
    const total = first_double + second_double + third_double
    isNaN(total)
      ? reject(new Error("Unable to provide result as not all parameters are numbers"))
      : resolve(total)
  })
}

//Força i captura tants errors com puguis dels nivells 1 i 2.


//Invocació de les funcions
getFullEmployeeInfo("Pep");
myFunction();
addUpDoubles(1, 5, true).then(
  (total) => console.log(total))
  .catch((error) => console.error(error.message));