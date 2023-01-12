//Crea una funció que, en executar-la, escrigui una frase en un fitxer.

// const fs = require("fs");
// const sentence ="What a day to be alive"
// const location = "fascinating_stuff.txt"
// const writeSentenceNewFile = (sentence, location) => {
//   fs.appendFile(location, sentence, (error) => {
//     if (error) throw error;
//     console.log("File saved!");
//   });
// };
// writeSentenceNewFile(sentence, location)

// // Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.

// const readFile = (path) => {
//   fs.readFile(path, "utf8", (error, contents)=>{
//     if (error) throw error;
//     console.log(contents)
//   })
// }
// readFile(location)

// Crea una funció que comprimeixi el fitxer del nivell 1.

// const zlib = require("zlib")
// const original = fs.createReadStream(location)
// const destination = fs.createWriteStream(`${location}.gz`)
// original.pipe(zlib.createGzip().on("error", (error)=>console.log(error))).pipe(destination)

// Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.
const delayMessage = (message) => {
return new Promise((resolve)=>setTimeout (()=>resolve(message), 1000))
}
const repeatEndlessly = async (message) => {
  while (true) {
    console.log(await delayMessage(message))
  }
}
const message = "I never repeat myself"
repeatEndlessly(message)