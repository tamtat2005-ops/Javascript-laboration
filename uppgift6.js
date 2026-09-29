/* Lösning till Uppgift 6. Av Tamara Tato, 2026 */
"use strict";

// Skapar en funktion som beräknar arean av en rektangel.
function calculateArea(width, height) {
    // Multiplicerar bredden med höjden.
    const area = width * height;

    // Returnerar resultatet.
    return area;
}

// Anropar funktionen med tre olika värden.
console.log("Arean är " + calculateArea(4, 5));
console.log("Arean är " + calculateArea(6, 7));
console.log("Arean är " + calculateArea(10, 10));
