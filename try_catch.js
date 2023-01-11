const myPromise = new Promise((resolve, reject) =>
  false ? resolve(5) : reject(new Error("HERROR"))
);
myPromise.then((value) => console.log(value)).catch((error)=>console.error(error.message));
