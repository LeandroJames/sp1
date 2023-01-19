// Crea un mock que comprovi les crides al constructor de la classe Persona i al seu mètode. dirNom() en l'exercici Classes & Arrow Functions - N2 E2 i testeja que funcionen.

import {
  Person,
  PersonalDetails,
  clonePersonalDetails,
} from "../app/e2-arrow_functions_and_classes.js";

describe("creates object with attribute 'name' and method 'sayMyName", () => {
  const johnnyTheGun = new Person("Johnny 'the Gun'");
  it("should call method 'sayMyName'", () => {
    expect(johnnyTheGun.name).toBe("Johnny 'the Gun'");
  });
  it("should create an object with attribute 'name'", () => {
    expect(typeof johnnyTheGun.sayMyName).toBe("function");
  });
  test("sayMyName() returns undefined when called", () => {
    expect(johnnyTheGun.sayMyName()).toBeUndefined();
  });
  test("sayMyName() is effectively called", () => {
    const sayMyNameSpy = jest.spyOn(johnnyTheGun, "sayMyName");
    johnnyTheGun.sayMyName();
    expect(sayMyNameSpy).toHaveBeenCalled();
  });
});

describe("PersonalDetails should always throw errors as it is an abstract class", () => {
  it("should throw an error when instantiated", () => {
    try {
      new PersonalDetails();
    } catch (error) {
      expect(error.message).toBe(
        "This information is private and you, my dear, have been granted no access"
      );
    }
  });
});

describe ("clonePersonalDetails should allow the creation of objects using the PersonalDetails prototype", ()=>{
    const ellieTheElephant = clonePersonalDetails("the_ellyphant78@email.com", "GB51498521952")
    it ("should create an object with email attribute", () => {
        expect(ellieTheElephant.email).toBe("the_ellyphant78@email.com")
    })
    it ("should create an object with bank account attribute", () => {
        expect(ellieTheElephant.bankAccountNumber).toBe("GB51498521952")
    })
    it ("should be able to call parent method 'getEmail", ()=>{
        expect(ellieTheElephant.getEmail()).toBe("the_ellyphant78@email.com")
    })
    it ("should be able to call parent method 'getBankAccountNumber", ()=>{
        expect(ellieTheElephant.getBankAccountNumber()).toBe("GB51498521952")
    })
})