const number = prompt("Type a number made by 4 digits");

if ( number.length > 4) {
    console.log( 'Utente ha inserito un numero composto da più di 4 cifre' );
    document.getElementById('somma').innerHTML = 'Hai inserito un numero composto da più di 4 cifre, ricarica la pagina e cambia numero inserito';
} else {
    const numberArray = number.split('');
console.log(numberArray);
const Digit1 = parseInt(numberArray[0]);
console.log(Digit1);
const Digit2 = parseInt(numberArray[1]);
console.log(Digit2);
const Digit3 = parseInt(numberArray[2]);
console.log(Digit3);
const Digit4 = parseInt(numberArray[3]);
console.log(Digit4);

const somma = Digit1 + Digit2 + Digit3 + Digit4;
console.log(somma);
document.getElementById('somma').innerHTML = 'La somma delle cifre che compongono il numero da te inserito è:' + ' ' + somma ;
    
}
