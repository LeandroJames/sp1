import { fetchData } from "../app/jest_example.js";
jest.useFakeTimers()
test('the data is peanut butter', () => {
    return fetchData().then(data => {
      expect(data).toBe('peanut butter');
    });
  });
  test('the data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
  });

  test('the data is peanut butter', async () => {
    await expect(fetchData()).resolves.toBe('peanut butter');
  });
  
  
//   test('the data is peanut butter', async () => {
//     jest.runAllTimers();
//     expect(await delayMessage()).toBe('All good');
//   });

//   test('the data is peanut butter', async () => {
//     await expect(delayMessage()).resolves.toBe('All good');
//   });

// describe("Returns a promise which will return 'All good' upon its resolution, two seconds after its invocation", () => {
//     it("should return 'All good' when called by an asynchronous function", () => {
//         return delayMessage().then(m => {
//             expect(m).toBe("All food")
//         })
//     })
//     it("should return 'All good' when called by an asynchronous function", () => {
//         return expect(delayMessage()).resolves.toEqual("All food")

//         })
//     })

// let result = await delayMessage()
// expect(result).toBe("All good")

// return fetchData().then(data => {
//     expect(data).toBe('peanut butter');
//   });
