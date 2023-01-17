//Data
const firstName = "Juani"
const surname = "Pérez"

//Crea una funció que mostri per consola el nom d'usuari/ària en invocar-la passant-li el nom com a paràmetre:
const showName = (name) => console.log(name)
showName (firstName)

// Mostra per consola el nom i cognoms de l'usuari/ària mitjançant template literals, guardant-los en variables i referenciant-les en la impressió del missatge:
const showFullName = (firstName, surname) => console.log(`My full name is ${firstName} ${surname}`)
showFullName (firstName, surname)

//Invoca una funció que retorni un valor des de dins d'una template literal:
const returnSurname = (surname) => surname
const returnFullName = (firstName, surname) => `${firstName} ${surname}`
console.log(`My name is ${returnSurname(surname)}, ${returnFullName(firstName, surname)}`)

//Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti del 0 al 9 per la consola. Invoca cada funció de l'array iterativament. Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades:
const compulsiveCounting = []
const countToNine = () => {
    for (i=0; i<10; i++){
        console.log(i)
    }
}
for (i=0; i<10; i++){
    compulsiveCounting.push(countToNine)
}
compulsiveCounting.forEach(element => element())

//Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari/ària a rebut com a paràmetre:
const username = "Perico de los Palotes"
const showUsername = ((username) => console.log(username))(username)