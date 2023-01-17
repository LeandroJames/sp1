//Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await N1 E2.

import { myFunction, delayMessage } from "../app/e4-async_await.js";
jest.useFakeTimers()
jest.spyOn(global, 'setTimeout')
//jest.setTimeout(20000)

describe("Returns a promise which will return 'All good' upon its resolution, two seconds after its invocation", () => {
    it("should return 'All good' when called by an asynchronous function", () => {
        return delayMessage().then(m => {
            expect(m).toBe("All food")
        })
    })
    it("should return 'All good' when called by an asynchronous function", () => {
        return expect(delayMessage()).resolves.toEqual("All food")

        })
    })


        // let result = await delayMessage()
        // expect(result).toBe("All good")

        // return fetchData().then(data => {
        //     expect(data).toBe('peanut butter');
        //   });