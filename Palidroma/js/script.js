let word = prompt('Inserisci parola:');

let wordDivision = word.split('');
console.log ('parola divisa:' , wordDivision);

wordDivision = wordDivision.reverse('');

let wordInverted = wordDivision.join('');

//condizione
if (word == wordInverted) {
    console.log ('Parola invertita:' , wordInverted);
}
else {
    console.log ('La parola non è palidroma')
}



