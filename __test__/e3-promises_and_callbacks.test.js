
import { getSalary, getEmployee, doStuff, messageToCaps } from "../app/e3-promises_and_callbacks.js";

//Crea els tests corresponents per verificar el funcionament de les dues funcions de l'exercici Promises i Callbacks N1 E2.

describe("returns a string in caps", () => {
  it("should throw an error given something other than a string", () => {
    try {
      messageToCaps((a) => a * 2)
    } catch (error) {
      expect(error.message).toBe("Please make sure the first parameter is a string")
    }
  });
  it("should return a message in caps given any string input", () => {
    expect(messageToCaps("bananas")).toBe("BANANAS")
  });
})

describe("calls the function received as second parameter with different values depending on the truthiness of the first parameter", () => {
  it("should throw an error given something other than a function as second parameter", () => {
    try {
      doStuff(8, 9)
    } catch (error) {
      expect(error.message).toBe("Please make sure the second parameter is a function")
    }
  });
  it("should return a apply the function to 'THE TRUTH PREVAILS' given a truthy first input", () => {
    expect(doStuff(1, messageToCaps)).toBe("THE TRUTH PREVAILS")
  })
  it("should return a apply the function to 'ANOTHER LYING TOAD' given a truthy first falsey", () => {
    expect(doStuff(undefined, messageToCaps)).toBe("ANOTHER LYING TOAD")
  });
})

//Crea els tests corresponents per verificar el funcionament de les funcions de l'exercici Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() i getSalary()).

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