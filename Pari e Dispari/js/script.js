//pari o dispari
let scelta = prompt('Scegliere pari o dispari:');
console.log ('Scelta utente:' , scelta);

const consentiti = ["pari" , "dispari"];
console.log ('scelte corrette:' , consentiti);
if (scelta == consentiti[0]) {
    console.log ('consentiti:' , scelta)
}
else if (scelta == consentiti[1]) {
    console.log ('consentiti:' , scelta)
}
else {
    console.log ('Non valido' , consentiti)
    alert ('Inserire solo pari o dispari')
}


//scelta del numero
let num = prompt('Inserire numero da 1 a 5:');
console.log ('numero scelto:' , num);

if (num > 5) {
    console.log('numero inserito non valido:', num);
    alert ('Si prega di inserire un numero compreso fra 1 a 5', num);
}
else if (num < 1) {
    console.log ('numero inserito non valido:', num);
    alert ('Si prega di inserire un numero compreso fra 1 a 5', num)
}

//numero random
function numRandom () {
    let risultatocasuale = Math.floor(Math.random() *6); 

    return risultatocasuale;
}

//somma valori
let somma = num + numRandom;
    if (somma %2 == 0) {
        console.log ('Il risultato è pari:', somma)
        return true;
}
    else {
        console.log ('il risultato è dispari:', somma)
        return false;
    }
