// Il computer deve generare 16 numeri casuali tra 1 e 100 (bombe).
// I numeri non possono essere duplicati.
// In seguito il giocatore clicca sulle celle numerate (non può cliccare più volte sulla stessa cella)
// La partita termina quando il giocatore clicca su un numero “vietato” o clicca su tutte le celle che non sono delle bombe.
// Al termine della partita il software deve comunicare il punteggio.

// Generare il campo
for (var i = 1; i <= 100; i++){
    document.getElementById("campo").innerHTML += "<div class=\"quadrato\">"+i+"</div>";
}

// Generare 16 numeri casuali da 1 a 100
function getDistinctRandomIntForArray(array, range){
    var n = Math.floor((Math.random() * range)+1);
    if(array.indexOf(n) == -1){        
     return n; 
    } else {
     return getDistinctRandomIntForArray(array, range); 
    }
}

 function generateArrayOfRandomInts(count, range) {
    var array = []; 
    for (i=0; i<count; ++i){
     array[i] = getDistinctRandomIntForArray(array, range);
    };
    return array;
 }
 var numeriRandom = generateArrayOfRandomInts(16,100);
 console.log(numeriRandom);

 // In seguito il giocatore clicca sulle celle numerate (non può cliccare più volte sulla stessa cella)
//  Controllare se il numero cliccato è contenuto nei 16 numeri casuali, se si dire "hai perso".

document.getElementById("campo").addEventListener("click",
function(event){
    event.target.classList.add("red");
    var numeroCliccato = parseInt(event.target.innerHTML);
    console.log(numeroCliccato);
        if (numeriRandom.includes(numeroCliccato)) {
            alert("BOOM! Hai perso!");        
    }
    var arrayClick= [];
    if (arrayClick.includes(numeroCliccato)){
        alert("Il numero è già stato cliccato");
 } else if (numeriRandom.includes(numeroCliccato)) {
        alert("Hai perso! ricarica la pagina!");
 } else {
        arrayClick.push(numeroCliccato);
 }
}
)
