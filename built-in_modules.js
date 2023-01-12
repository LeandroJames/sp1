//Crea una funció que, en executar-la, escrigui una frase en un fitxer.

const fs = require("fs");
const sentence ="What a day to be alive"
const location = "fascinating_stuff.txt"
const writeSentenceNewFile = (sentence, location) => {
  fs.appendFile(location, sentence, (error) => {
    if (error) throw error;
    //console.log("File saved!");
  });
};
writeSentenceNewFile(sentence, location)

// // Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.

const readFile = (path) => {
   fs.readFile(path, "utf8", (error, contents)=>{
    if (error) throw error;
    //console.log(contents)
    //return contents
  })
}
readFile(location)

// Crea una funció que comprimeixi el fitxer del nivell 1.

// const zlib = require("zlib")
// const original = fs.createReadStream(location)
// const destination = fs.createWriteStream(`${location}.gz`)
// original.pipe(zlib.createGzip().on("error", (error)=>console.log(error))).pipe(destination)

// Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.
// const repeatEndlessly = async (message) => {
//   while (true) {
//     await new Promise((resolve)=>setTimeout (()=>resolve(console.log(message)), 1000))
//   }
// }
// const message = "I never repeat myself"
// repeatEndlessly(message)

//Crea una funció que llisti per la consola el contingut del directori d'usuari/ària de l'ordinador utilizant Node Child Processes.
// const { exec } = require("node:child_process");
// const listDirectory = () => {
// exec("dir", (error, stdout, stderr) => {
//   if (error) {
//     console.error(error);
//     return;
//   }
//   console.log(stdout);
//   console.error(stderr);
// });
// };
// listDirectory()

//Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer del nivell 1.

//console.log(readFile(location))

const codeInHexAnd64 = (file) => {
  const content=String(readFile(file))
  const buff = new Buffer.from(content)
  const contentBase64 = buff.toString("base64")
  const contentHexBase = buff.toString('hex')
  writeSentenceNewFile(contentBase64, "fascinating_base64.txt")
  writeSentenceNewFile(contentHexBase, "fascinating_hexbase.txt")  
}

codeInHexAnd64(location)

