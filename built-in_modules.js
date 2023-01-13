//Crea una funció que, en executar-la, escrigui una frase en un fitxer.

const fs = require("fs");
const sentence = "What a day to be alive"
const location = "fascinating_stuff.txt"
const writeSentenceNewFile = (sentence, location) => {
  fs.appendFile(location, sentence, (error) => {
    if (error) throw error;
    console.log("File saved!");
  });
};
// Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.

const readFile = async (path) => {
  return new Promise((resolve) =>
    fs.readFile(path, "utf8", (error, contents) => {
      if (error) throw error;
      resolve(contents)
    }))
}
const showFileInLocation = async (location) => {
  console.log(await readFile(location))
}
const createAndRead = async (location) => {
  writeSentenceNewFile(sentence, location)
  showFileInLocation(location)
}
createAndRead(location)

// Crea una funció que comprimeixi el fitxer del nivell 1.

const zlib = require("zlib")
const original = fs.createReadStream(location)
const destination = fs.createWriteStream(`${location}.gz`)
original.pipe(zlib.createGzip().on("error", (error) => console.log(error))).pipe(destination)

// //Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.
// const repeatEndlessly = async (message) => {
//   while (true) {
//     await new Promise((resolve)=>setTimeout (()=>resolve(console.log(message)), 1000))
//   }
// }
// const message = "I never repeat myself"
// repeatEndlessly(message)

// //Crea una funció que llisti per la consola el contingut del directori d'usuari/ària de l'ordinador utilizant Node Child Processes.
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

const codeInHexAnd64 = async (file) => {
  await readFile(file).then((content) => {
    const buff = new Buffer.from(String(content))
    const contentBase64 = buff.toString("base64")
    const contentHexBase = buff.toString('hex')
    writeSentenceNewFile(contentBase64, "fascinating_base64.txt")
    writeSentenceNewFile(contentHexBase, "fascinating_hexbase.txt")
  })
}

codeInHexAnd64(location)

//Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algoritme aes-192-cbc, i esborri els fitxers inicials.

const crypto = require("crypto");
const algorithm = "aes-192-cbc"
const key = crypto.randomBytes(24)
const iv = crypto.randomBytes(16)
const encrypt = (text) => {
  const cipher = crypto.createCipheriv(algorithm, key, iv)
  let encrypted = cipher.update(text, "utf8", "hex")
  encrypted += cipher.final("hex")
  return encrypted
}

const encryptAndDelete = async (path) => {
  await readFile(path).then((contents) => {
    const encryptedContents = encrypt(String(contents))
    writeSentenceNewFile(encryptedContents, `encrypted_${path}`)
    fs.unlink(path, ((error) => {
      if (error) console.error(error)
    }))
    fs.unlink("fascinating_stuff.txt", ((error) => {
      if (error) console.error(error)
    }))
  })
}
//encryptAndDelete("fascinating_hexbase.txt")

//const encrypted = encrypt("Adiós, mundo cruel")
//console.log(encrypted)

// Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial.

//console.log(await readFile("encrypted_fascinating_base64.txt"))

const decrypt = (file) => {
  return new Promise(async (resolve) => {
    await readFile(file).then((content) => {
      console.log(content)
      const decipher = crypto.createDecipheriv(algorithm, key, iv)
      let decrypted = decipher.update(String(content), "hex", "utf8")
      decrypted += decipher.final("utf8")
      console.log(decrypted)
      resolve(decrypted)
    })
  })
}
const checkWorking = () => {
  setTimeout(async () => {
    encryptAndDelete("fascinating_base64.txt")
    //await decrypt("encrypted_fascinating_base64.txt").then(
    //  (content) => console.log(decode64(content))
    //)
  }, 1000)

  setTimeout(async () => {
  await decrypt("encrypted_fascinating_base64.txt").then(
    (content) => console.log(decode64(content))
  )
}, 10000)}
checkWorking()


// const decrypted64 = decrypt("encrypted_fascinating_base64.txt")
// const decryptedHex = decrypt("encrypted_fascinating_hexbase.txt")
const decode64 = (codedText) => {
  return new Buffer.from(codedText, "base64").toString("utf-8")
}
//console.log(decrypted64)
//console.log(decode64(decrypted64))

// // Create a buffer from the string
// let bufferObj = Buffer.from(base64string, "base64");

// // Encode the Buffer as a utf8 string
// let decodedString = bufferObj.toString("utf8");


//const decrypted = decrypt(encrypted)
//console.log(decrypted)