//Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await N1 E2.

import { myFunction, delayMessage } from "../app/e4-async_await.js";
jest.useFakeTimers() / jest.spyOn(global, "setTimeout");
//jest.setTimeout(20000)

describe("Returns a promise which will return 'All good' upon its resolution, two seconds after its invocation", () => {
  test('should return "All good"', async () => {
    delayMessage().then((data) => {
      expect(data).toBe("All good");
    });
  });
  test("should receive nothing if function called synchronously", ()=> {
    delayMessage().then((data) => {
        expect(data).toBe("{}");
      })
  })
});
