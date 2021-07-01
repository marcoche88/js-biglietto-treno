/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere 
e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (con massimo due decimali,
per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/


// input km e età
var travelDistance = parseInt(prompt("Inserire numero Km del viaggio"));
var passengerAge = parseInt(prompt("Inserire età del passeggero"));

console.log("travelDistance",travelDistance, typeof travelDistance);
console.log("passengerAge", passengerAge, typeof passengerAge);

// calcolo prezzo biglietto intero 
var kmPrice = 0.21;
var ticketPrice = travelDistance * kmPrice;

console.log("ticketPrice", ticketPrice, typeof ticketPrice);

// verifica sconto per età passegero
var discount = 0;

if (passengerAge < 18) {
    discount = 20;

} else if (passengerAge > 65) {
    discount = 40;
}

console.log("discount", discount, typeof discount);

// calcolo prezzo scontato
var ticketDiscount = ticketPrice - (ticketPrice * discount / 100);

console.log("ticketDiscount", ticketDiscount, typeof ticketPrice);

// stampa prezzo scontato
var price = document.getElementById("price");
price.innerHTML = "Il prezzo del biglietto è: " + ticketDiscount.toFixed(2) + " €";