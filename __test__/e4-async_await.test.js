//Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await N1 E2.

import { addUpDoubles, delayedDouble, delayMessage } from "../app/e4-async_await.js";
jest.useFakeTimers() / jest.spyOn(global, "setTimeout");

describe("Returns a promise which will return 'All good' upon its resolution, two seconds after its invocation", () => {
  it('should return "All good"', async () => {
    delayMessage().then((data) => {
      expect(data).toBe("All good");
    });
  });
});

//Verifica mitjançant tests l'execució de l'exercici Async / Await N2 E1 utilitzant Jest Fake Timers.

describe("function should return double of input after two seconds", () => {
  it("should return double", () => {
    delayedDouble(2).then((data) => {
      jest.runAllTimers()
      expect(data).toBe(4)
      });
  });
  it("should throw error given something other than a number", () => {
    delayedDouble(true).catch((error) => {
      expect(error.message).toBe("Parameters must be numbers");
    });
  });
  it("should throw error given something other than a number", () => {
    delayedDouble("fifty").catch((error) => {
      expect(error.message).toBe("Parameters must be numbers");
    });
  })
  it("should throw error given no parameter", () => {
    delayedDouble().catch((error) => {
      expect(error.message).toBe("Please give the function 3 parameters");
    });
  })
});

describe("returns the sum of the doubles of three numbers given as parameters", ()=> {
  it("should return 10 when given parameters 1, 1, 3", ()=> {
    addUpDoubles(1, 1, 3).then(
      (result) => {
        jest.runAllTimers()
        expect(result).toBe(10)
      }
    )
  })
  it("should throw error when given parameters true, 1, 3", ()=> {
    addUpDoubles(true, 1, 3).catch(
      (error) => {
        // jest.runAllTimers()
        expect(error.message).toBe("Parameters must be numbers")
      })
  })
  it("should throw error when given only two parameters", ()=> {
    addUpDoubles(1, 3).catch(
      (error) => {
        // jest.runAllTimers()
        expect(error.message).toBe("Please give the function 3 parameters")
      })
  })
})
// 
