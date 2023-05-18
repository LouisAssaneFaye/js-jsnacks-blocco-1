let NumeriDispari = [];

for (let i = 0 ; i < 6 ; i = i + 1 ){
    const n  = parseInt(prompt("Type a number"));
if ( n % 2 !==0 ) {
    NumeriDispari.push(n);
    console.log( n , 'è dispari quindi array è:');
    console.log(NumeriDispari);
} else {
    console.log( n , 'è pari quindi array è:');
    console.log(NumeriDispari);
}

}

document.getElementById('conclusione').innerHTML =  NumeriDispari;

