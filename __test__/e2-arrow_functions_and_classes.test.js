// Crea un mock que comprovi les crides al constructor de la classe Persona i al seu mètode. dirNom() en l'exercici Classes & Arrow Functions - N2 E2 i testeja que funcionen.

import { Person } from "../app/e2-arrow_functions_and_classes.js";
jest.mock("../app/e2-arrow_functions_and_classes.js")
beforeEach(() => {
    Person.mockClear();
  })

describe ("creates object with attribute 'name' and method 'sayMyName", ()=>{
    it("should create an object with attribute 'name'", () => {
        new Person ("Johnny 'the Gun'");
        expect(Person).toHaveBeenCalledTimes(1)
    })
    it("should call method 'sayMyName'", () => {
        const johnnyTheGun = new Person ("Johnny 'the Gun'")
        johnnyTheGun.sayMyName()
        expect(Person.sayMyName()).toHaveBeenCalledTimes(1)
    })
})