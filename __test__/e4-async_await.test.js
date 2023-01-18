//Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await N1 E2.

import { delayedDouble, delayMessage } from "../app/e4-async_await.js";
jest.useFakeTimers() / jest.spyOn(global, "setTimeout");
//jest.setTimeout(20000)

describe("Returns a promise which will return 'All good' upon its resolution, two seconds after its invocation", () => {
  it('should return "All good"', async () => {
    delayMessage().then((data) => {
      expect(data).toBe("All good");
    });
  });
//   it("should receive nothing if function called synchronously", ()=> {
//     delayMessage().then((data) => {
//         expect(data).toBe("{}");
//       })
//   })
  it("should receive nothing if function called synchronously", async ()=> {
    delayMessage().then((data) => {
        jest.runAllTimers()
        expect(data).toBe("All good");
      })
  })
    test('the data is peanut butter', async () => {
    jest.runAllTimers();
    expect(await delayMessage()).toBe('All good');
  });

  test('the data is peanut butter', async () => {
    await expect(delayMessage()).resolves.toBe('All good');
  });
});

//Verifica mitjançant tests l'execució de l'exercici Async / Await N2 E1 utilitzant Jest Fake Timers.

describe("function should return double of input after two seconds", ()=> {
    it("should return double", () => {
        delayedDouble(2).then((data)=>
            // jest.runAllTimers(),
            expect(data).tobe(4)
        )
    })
    it("should return error", () => {
        delayedDouble(true).catch((error)=>
            // jest.runAllTimers(),
            expect(error).tobe(4)
        )
    })
})
