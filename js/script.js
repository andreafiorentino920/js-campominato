// Il computer deve generare 16 numeri casuali tra 1 e 100 (bombe).
// I numeri non possono essere duplicati.
// In seguito il giocatore clicca sulle celle numerate (non può cliccare più volte sulla stessa cella)
// La partita termina quando il giocatore clicca su un numero “vietato” o clicca su tutte le celle che non sono delle bombe.
// Al termine della partita il software deve comunicare il punteggio.

/**
 * FUNZIONI
 */

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


/**
 * PROGRAMMA PRINCIPALE
 */
var numeroCelle= 100;
var numeroBombe = 16;
var possibilita = numeroCelle - numeroBombe;
// Generare il campo
for (var i = 1; i <= numeroCelle; i++){
    document.getElementById("campo").innerHTML += "<div class=\"quadrato\">"+i+"</div>";
}
var arrayCliccati= [];
 // In seguito il giocatore clicca sulle celle numerate (non può cliccare più volte sulla stessa cella)
document.getElementById("campo").addEventListener("click",
	function(event){
		event.target.classList.add("red");
		var numeroCliccato = parseInt(event.target.innerHTML);
		console.log(numeroCliccato);
        //  Controllare se il numero cliccato è contenuto nei 16 numeri casuali, se si dire "hai perso".
		if (arrayCliccati.includes(numeroCliccato)){
			alert("Il numero è già stato cliccato");
		} else if (numeriRandom.includes(numeroCliccato)) {
            event.target.classList.add("bomba_img");
            alert("BOOM! !Hai perso, il tuo punteggio è", arrayCliccati.length);
            location.reload;
		}
        else{
			arrayCliccati.push(numeroCliccato);

            if(arrayCliccati.length == possibilita){
                alert("Hai vinto!! Il tuo punteggio è", arrayCliccati.length);
                location.reload;
            }
        }    
    }
)