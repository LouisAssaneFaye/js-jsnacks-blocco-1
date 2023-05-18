const n1 = parseInt(prompt("Type a number"));
const n2 = parseInt(prompt("Type a second number"));
const n3 = parseInt(prompt("Type a third number"));
const n4 = parseInt(prompt("Type a fourth number"));
const n5 = parseInt(prompt("Type a fifth number"));
const n6 = parseInt(prompt("Type a sixth number"));
const n7 = parseInt(prompt("Type a seventh number"));
const n8 = parseInt(prompt("Type a eighth number"));
const n9 = parseInt(prompt("Type a ninth number"));
const n10 = parseInt(prompt("Type a tenth number"));

let somma

if ( isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4) || isNaN(n5) || isNaN(n6) || isNaN(n7) || isNaN(n8) || isNaN(n9) || isNaN(n10) ) {
        console.log('ERRORE: Uno degli input non è un numero');
        document.getElementById('risultato-somma').innerHTML = 'ERRORE: Uno degli input non è un numero' ;
    } else {
        somma = n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10 ;
        console.log(somma);
        document.getElementById('risultato-somma').innerHTML = somma ;
    }