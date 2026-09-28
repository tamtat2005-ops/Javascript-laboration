/* Lösning till Uppgift 2. Av Tamara Tato 2026   */
"use strict";

// Skapar variabler för produktens pris och antal.
const price = 100;
const quantity = 3;

// Beräknar totalpriset utan moms.
const totalPrice = price * quantity;

// Beräknar priset inklusive 25 % moms.
const totalWithVAT = totalPrice * 1.25;

// Skriver ut resultaten.
console.log("Pris: " + price + " kr");
console.log("Antal: " + quantity);
console.log("Totalt: " + totalPrice + " kr");
console.log("Totalt inklusive moms: " + totalWithVAT + " kr");