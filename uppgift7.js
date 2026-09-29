/* Lösning till Uppgift 7. Av Tamara Tato, 2026 */
"use strict";

// Skapar en array med sex tal.
const numbers = [5, 7, 10, 3, 8, 9];

// Skapar en funktion som räknar ut summan av talen.
function calculateSum(array) {
    // Börjar summan på 0.
    let sum = 0;

    // Går igenom alla tal i arrayen.
    for (let i = 0; i < array.length; i++) {
        // Lägger till det aktuella talet i summan.
        sum += array[i];
    }

    // Returnerar den färdiga summan.
    return sum;
}

// Anropar funktionen och skriver ut resultatet.
console.log("Summan är " + calculateSum(numbers));