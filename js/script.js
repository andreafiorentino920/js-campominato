// Il computer deve generare 16 numeri casuali tra 1 e 100 (bombe).
// I numeri non possono essere duplicati.
// In seguito il giocatore clicca sulle celle numerate (non può cliccare più volte sulla stessa cella)
// La partita termina quando il giocatore clicca su un numero “vietato” o clicca su tutte le celle che non sono delle bombe.
// Al termine della partita il software deve comunicare il punteggio.

// FUNZIONI
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




// PROGRAMMA PRINCIPALE
// Generare il campo
for (var i = 1; i <= 100; i++){
    document.getElementById("campo").innerHTML += "<div class=\"quadrato\">"+i+"</div>";
}
var arrayClick= [];
 // In seguito il giocatore clicca sulle celle numerate (non può cliccare più volte sulla stessa cella)
document.getElementById("campo").addEventListener("click",
	function(event){
		event.target.classList.add("red");
		var numeroCliccato = parseInt(event.target.innerHTML);
		console.log(numeroCliccato);
        //  Controllare se il numero cliccato è contenuto nei 16 numeri casuali, se si dire "hai perso".
		if (arrayClick.includes(numeroCliccato)){
			alert("Il numero è già stato cliccato");
		} else if (numeriRandom.includes(numeroCliccato)) {
            event.target.classList.add("bomba_img");
            console.log("Il tuo punteggio è", arrayClick.length);
            alert("BOOM! !Hai perso, ricarica la pagina!");
		} else {
			arrayClick.push(numeroCliccato);
		}
	}
)

// La partita termina quando il giocatore clicca su un numero “vietato” o clicca su tutte le celle che non sono delle bombe.
// Al termine della partita il software deve comunicare il punteggio.
// creo due array, uno contenente tutti i numeri da 1 a 100 e uno contenente solo i numeri randomici
// se al primo array ho eliminato tutti i numeri del secondo array allora la partita termina e ho vinto, stampo un messaggio con scritto "hai vinto", e mostro il punteggio
// se scoppia la bomba e perdo oltre a stampare il messaggio "Ho perso" devo anche comunicare il punteggio
// il punteggio lo posso calcolare creando una variabile punteggio che incrementerò di uno ogni volta che schiaccio su una casella, non scoppia la bomba e non deve essere ripetuta 
