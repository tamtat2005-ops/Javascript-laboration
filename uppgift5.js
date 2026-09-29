/* Lösning till Uppgift 5. Av Tamara Tato, 2026 */
"use strict";

// Skapar en array med fem maträtter.
const meals = ["Pizza", "Tacos", "Pasta", "Sushi", "Hamburgare"];

// Skriver ut hela arrayen.
console.log("Alla maträtter:", meals);

// Skriver ut den första maträtten.
console.log("Första maträtten:", meals[0]);

// Skriver ut den sista maträtten.
console.log("Sista maträtten:", meals[meals.length - 1]);

// Lägger till en ny maträtt sist i arrayen.
meals.push("Lasagne");

// Tar bort den första maträtten i arrayen.
meals.shift();

// Skriver ut arrayen efter förändringarna.
console.log("Maträtter efter förändringarna:", meals);