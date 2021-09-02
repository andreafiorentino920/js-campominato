// Il computer deve generare 16 numeri casuali tra 1 e 100 (bombe).
// I numeri non possono essere duplicati.
// In seguito il giocatore clicca sulle celle numerate (non può cliccare più volte sulla stessa cella)
// La partita termina quando il giocatore clicca su un numero “vietato” o clicca su tutte le celle che non sono delle bombe.
// Al termine della partita il software deve comunicare il punteggio.

for (var i = 1; i <= 100; i++){
    document.getElementById("campo").innerHTML += "<div class=\"quadrato\">"+i+"</div>";
}
document.getElementById("campo").addEventListener("click",
function(event){
    event.target.classList.toggle("red");
    alert(event.target.innerHTML);
})

function getDistinctRandomIntForArray(array, range){
    var n = Math.floor((Math.random() * range));
    if(array.indexOf(n) == -1){        
     return n; 
    } else {
     return getDistinctRandomIntForArray(array, range); 
    }
 }
 function generateArrayOfRandomInts(count, range) {
    var array = []; 
    for ((i=0); i<count; ++i){
     array[i] = getDistinctRandomIntForArray(array, range);
    };
    return array; 
 }
 console.log(generateArrayOfRandomInts(16,100));