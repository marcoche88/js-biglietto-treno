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

// variabili
var kmPrice = 0.21;
var discount = 0;
var km = document.getElementById("km");
var age = document.getElementById("age");
var fullPrice = document.getElementById("full-price");
var discountPrice = document.getElementById("discount-price");
var price = document.getElementById("price");

// input km e età
var travelDistance = parseFloat(prompt("Inserire numero Km del viaggio").trim());
var passengerAge = parseInt(prompt("Inserire età del passeggero").trim());

console.log("travelDistance",travelDistance, typeof travelDistance);
console.log("passengerAge", passengerAge, typeof passengerAge);

// validazione input
if (isNaN(travelDistance) || travelDistance < 1) {
    alert("Distanza non valida");
    window.location.reload();
}

if (isNaN(passengerAge) || passengerAge < 1) {
    alert("Età non valida");
    window.location.reload();
}

// calcolo prezzo biglietto intero 
var ticketPrice = travelDistance * kmPrice;

console.log("ticketPrice", ticketPrice, typeof ticketPrice);

// verifica sconto per età passegero
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
km.innerHTML = travelDistance.toFixed(2) + " Km";
age.innerHTML = passengerAge + " anni";
fullPrice.innerHTML = ticketPrice.toFixed(2) + " €";
discountPrice.innerHTML = discount + "%";
price.innerHTML = "PREZZO FINALE: " + ticketDiscount.toFixed(2) + " €";