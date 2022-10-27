// palindromo
function palindromo(){
    let word = prompt("inserisci una parola");
    let comparator1 = word.split("");
    let comparator2 = word.split("").reverse();
    let x = comparator1.length;
    let y = 0;
    for (let i = 0; i < x; i++) {
        if(comparator1[i] === comparator2[i]){
            y += 1;
        }
    }
    if(y === comparator1.length){
        alert("la parola é palindroma");
    }
    else{
        alert("la parola non é palindroma");
    }
}
document.getElementById('snack1').addEventListener("click", palindromo);

// pari o dispari

function valore(risultato){
 return risultato;
}

function murra(){
    let userChoice = 2;
   
    do{
        userChoice = parseInt(prompt('inserisci 0 per scegliere "pari", inserisci 1 per scegliere "dispari"'));
    }while(userChoice != 1 && userChoice != 0);
    
    let userNumber;

    do{
        userNumber = parseInt(prompt('inserisci un numero tra 1 e 5'));
    }while(userNumber != 5 && userNumber != 4 && userNumber != 3 && userNumber != 2 && userNumber != 1);
    
    let aiNumber = Math.floor(Math.random() * 5) + 1;

    if((aiNumber + userNumber) % 2 == userChoice){
        alert('hai vinto');
    }
    else{
        alert('hai perso');
    }

}
document.getElementById('snack2').addEventListener("click", murra);

