//Crea els tests corresponents per verificar el funcionament de les funcions de l'exercici Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() i getSalary()).

import { getSalary, getEmployee } from "../app/e3-promises_and_callbacks.js";

describe("get employee salary", () => {
  it("should throw an error given a non-existent employee ID", () => {
    let id = 7;
    let message = `No employee found with id ${id}`;
    getSalary(id).catch((error) => expect(error.message).toBe(message));
  });
  it("should throw an error given a string employee ID", () => {
    let id = "Pete the Beast";
    let message = "Employee IDs are made up exclusively of numbers. Please check your input";
    getSalary(id).catch((error) => expect(error.message).toBe(message));
  });
  it("should return employee salary given an existent ID", () => {
    let id = 2;
    getSalary(id).then((value) => expect(value.salary).toBe(1000));
  });
})

describe("get employee name", () => {
    it("should throw an error given a non-existent employee ID", () => {
      let id = 7;
      let message = `No employee found with id ${id}`;
      getEmployee(id).catch((error) => expect(error.message).toBe(message));
    });
    it("should throw an error given a string employee ID", () => {
      let id = "Pete the Beast";
      let message = "Employee IDs are made up exclusively of numbers. Please check your input";
      getEmployee(id).catch((error) => expect(error.message).toBe(message));
    });
    it("should return employee salary given an existent ID", () => {
      let id = 2;
      getEmployee(id).then((value) => expect(value.name).toBe("Bill Gates"));
    });
  })