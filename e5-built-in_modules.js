/* ### READ ME! ###
Cada exercici té el seu enunciat a sobre. Totes les funcions estan invocades abaix del tot, perquè puguin ser més fàcilment comentades. Cada cop que s'executa el codi, s'hauria d'esborrar els arxius que crea. Si no, donarà error: l'algoritme d'encriptació canvia cada cop que s'executa, raó per la qual pot donar lloc a problemes amb la desencriptació.
*/

//Crea una funció que, en executar-la, escrigui una frase en un fitxer.

const fs = require("fs");
const zlib = require("zlib")
const { exec } = require("node:child_process");
const crypto = require("crypto");
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

// Crea una funció que comprimeixi el fitxer del nivell 1.
const compress = () => {
const original = fs.createReadStream(location)
const destination = fs.createWriteStream(`${location}.gz`)
original.pipe(zlib.createGzip().on("error", (error) => console.log(error))).pipe(destination)
}

//Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.
const repeatEndlessly = async (message) => {
  while (true) {
    await new Promise((resolve)=>setTimeout (()=>resolve(console.log(message)), 1000))
  }
}
const message = "I never repeat myself"

//Crea una funció que llisti per la consola el contingut del directori d'usuari/ària de l'ordinador utilizant Node Child Processes.
const listDirectory = () => {
  exec("dir", (error, stdout, stderr) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(stdout);
    console.error(stderr);
  });
};

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

//Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algoritme aes-192-cbc, i esborri els fitxers inicials.

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
  })
}

// Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial.


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

const decode64 = (codedText) => {
  return new Buffer.from(codedText, "base64").toString("utf-8")
}
const decodeHex = (codedText) => {
  return new Buffer.from(codedText, "hex").toString("utf-8")
}

// Aquesta funció comprova que els passos anteriors funcionen

const checkWorking = () => {
  createAndRead(location)
  compress()
  codeInHexAnd64(location)
  setTimeout(async () => {
    encryptAndDelete("fascinating_base64.txt")
    encryptAndDelete("fascinating_hexbase.txt")
    fs.unlink("fascinating_stuff.txt", ((error) => {
      if (error) console.error(error)
    }))
  }, 1000)

  setTimeout(async () => {
    await decrypt("encrypted_fascinating_base64.txt").then(
      (content) => writeSentenceNewFile(decode64(content), "decoded_decrypted_fascinating_stuff(64).txt")
    )
    await decrypt("encrypted_fascinating_hexbase.txt").then(
      (content) => writeSentenceNewFile(decodeHex(content), "decoded_decrypted_fascinating_stuff(hex).txt")
    )
  }, 5000)
}

// Aquesta funció mostra el directori per la consola:
//listDirectory()

// Aquesta funció repeteix un missatge cada segon
//repeatEndlessly(message)

//Aquesta funció invoca totes les que tenen a veure amb crear fitxers, comprimir, esborrar, codificar, decodificar, encriptar i desencriptar:
//checkWorking()