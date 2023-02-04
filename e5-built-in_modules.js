/* ### READ ME! ###
Cada exercici té el seu enunciat a sobre. Totes les funcions estan invocades abaix del tot, perquè puguin ser més fàcilment comentades. Cada cop que s'executa el codi, s'hauria d'esborrar els arxius que crea. Si no, donarà error: l'algoritme d'encriptació canvia cada cop que s'executa, raó per la qual pot donar lloc a problemes amb la desencriptació.
*/

//Crea una funció que, en executar-la, escrigui una frase en un fitxer.

import * as fs from "fs";
import * as zlib from "node:zlib";
import exec from "node:child_process";
import * as crypto from "crypto";
const sentence = "What a day to be alive!";
const location = "fascinating_stuff.txt";
const writeSentenceNewFile = async (sentence, location) => {
  fs.writeFile(location, sentence, (error) => {
    if (error) {
      console.log(sentence);
      console.log(error);
    }
    console.log("File saved!");
  });
};
// Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.

const readFile = async (path) => {
  return new Promise((resolve) =>
    fs.readFile(path, "utf8", (error, contents) => {
      if (error) console.error(error);
      resolve(contents)
    }))
}

const showFileInLocation = async (location) => {
  console.log(await readFile(location));
};
const createAndRead = async (location) => {
  await writeSentenceNewFile(sentence, location);
  await showFileInLocation(location);
};

// Crea una funció que comprimeixi el fitxer del nivell 1.
const compress = async () => {
  const original = fs.createReadStream(location);
  const destination = fs.createWriteStream(`${location}.gz`);
  original
    .pipe(zlib.createGzip().on("error", (error) => console.log(error)))
    .pipe(destination);
};

//Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.
const repeatEndlessly = async (message) => {
  while (true) {
    await new Promise((resolve) =>
      setTimeout(() => resolve(console.log(message)), 1000)
    );
  }
};
const message = "I never repeat myself";

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
  const content = await readFile(file);
  const buff = new Buffer.from(String(content));
  const contentBase64 = buff.toString("base64");
  const contentHexBase = buff.toString("hex");
  await writeSentenceNewFile(contentBase64, "fascinating_base64.txt");
  await writeSentenceNewFile(contentHexBase, "fascinating_hexbase.txt");
  console.log(contentHexBase)
};

//Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algoritme aes-192-cbc, i esborri els fitxers inicials.

const algorithm = "aes-192-cbc";
const key = crypto.randomBytes(24);
const iv = crypto.randomBytes(16);
const encrypt = async (text) => {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
};

const encryptAndDelete = async (path) => {
  const contents = await readFile(path);
  const encryptedContents = await encrypt(String(contents));
  console.log(contents);
  await writeSentenceNewFile(encryptedContents, `encrypted_${path}`);
  fs.unlink(path, (error) => {
    if (error) console.error(error);
  });
};

// Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial.

const decrypt = async (file) => {
  let content = await readFile(file);
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  return decipher.update(String(content), "hex", "utf8");
};

const decode64 = async (codedText) => {
  return new Buffer.from(codedText, "base64").toString("utf-8");
};
const decodeHex = async (codedText) => {
  return new Buffer.from(codedText, "hex").toString("utf-8");
};

const deleteFile = async (file) => {
  fs.unlink(file, (error) => {
    if (error) console.error(error);
  });
};

// Aquesta funció comprova que els passos anteriors funcionen

const checkWorking = async () => {
  await createAndRead(location);
  await compress();
  await codeInHexAnd64(location);
  await encryptAndDelete("fascinating_base64.txt");
  await encryptAndDelete("fascinating_hexbase.txt");
  await deleteFile("fascinating_stuff.txt");
  let decrypted64 = await decrypt("encrypted_fascinating_base64.txt");
  let decoded64 = await decode64(decrypted64);
  await writeSentenceNewFile(
    decoded64,
    "decoded_decrypted_fascinating_stuff(64).txt"
  );
  let decryptedHex = await decrypt("encrypted_fascinating_hexbase.txt");
  let decodedHex = await decodeHex(decryptedHex);
  await writeSentenceNewFile(
    decodedHex,
    "decoded_decrypted_fascinating_stuff(hex).txt"
  );
  // //decrypted = await depr
  // await decrypt("encrypted_fascinating_hexbase.txt").then((content) =>
  //   writeSentenceNewFile(
  //     decodeHex(content),
  //     "decoded_decrypted_fascinating_stuff(hex).txt"
  //   )
  // );
};

// Aquesta funció mostra el directori per la consola:
//listDirectory()

// Aquesta funció repeteix un missatge cada segon
//repeatEndlessly(message)

//Aquesta funció invoca totes les que tenen a veure amb crear fitxers, comprimir, esborrar, codificar, decodificar, encriptar i desencriptar:
checkWorking();
