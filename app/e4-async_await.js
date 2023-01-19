// READ ME!!
// Totes les funcions estan invocades abaix, perquè puguin ser comentades més fàcilment. S'han d'importar dues funcions de l'entrega anterior

import { getEmployee, getSalary } from "./e3-promises_and_callbacks.js";

//Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi per pantalla el nom de l'empleat/da i el seu salari, usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior.

const getFullEmployeeInfo = async (soughtEmployee) => {
  try {
    const employee = await getEmployee(soughtEmployee)
    try {
      const salary = await getSalary(employee)
      console.log(`EMPLOYEE ~ Name: ${name}, Salary: ${salary}`)
    }catch{
      console.error(error.message)
      console.log(`Employee name: ${name}`)
    }
  } catch (error) {
        console.error(error.message);
  }
};

//Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació.
export const myFunction = async () => console.log(await delayMessage());

export const delayMessage = () => {
  return new Promise((resolve) => setTimeout(()=>resolve("All good"), 2000));
};

//Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.
//Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.

export const delayedDouble = (number) => {
  return new Promise ((resolve, reject) => {
   isNaN(number) | (typeof number == "boolean")
    ? reject(new Error("Parameters must be numbers"))
    : setTimeout(()=>resolve(number * 2), 2000)
  })};

export const addUpDoubles = async (number1, number2, number3) => {
  if (!(number1 && number2 && number3)) throw new Error ("Please provide three parameters")
  const first_double = await delayedDouble(number1);
  const second_double = await delayedDouble(number2);
  const third_double = await delayedDouble(number3);
  return first_double + second_double + third_double;
};

//Força i captura tants errors com puguis dels nivells 1 i 2.

//Invocació de les funcions
// getFullEmployeeInfo("Pep");
// myFunction();
// delayedDouble(5).then(
//   (values)=> console.log(values)
// )
// try {
//     console.log(await addUpDoubles("Bananas", 3, true))
// } catch (error) {
//   console.error(error.message)
// }

