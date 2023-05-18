const NomeUtente = prompt("Type your name");
const listName = ['Louis','Karen','Ciccio','Cupido','Kasha', 'Antonio'];


let IncludedName

for (let i = 0 ; i < listName.length ; i = i + 1 ){
    IncludedName = listName[i];
    if ( NomeUtente === IncludedName ) {
        console.log( IncludedName , 'è uguale al nome inserito da utente');
        document.getElementById('conclusione').innerHTML = 'Congratulazioni, il tuo nome rientra tra quelli degli invitati!' ;
    } else {
        console.log( IncludedName , 'non è uguale alla mail inserita da utente');
    }

}
