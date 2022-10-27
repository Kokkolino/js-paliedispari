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
document.getElementById('snack1').addEventListener("click", palindromo)