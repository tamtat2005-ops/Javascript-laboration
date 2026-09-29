/* Lösning till Uppgift 8. Av Tamara Tato, 2026 */
"use strict";

// Skapar ett objekt som beskriver en bok.
const book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  year: 1937
};

// Skriver ut information om en bok.
function printBookInfo(bookObject) {
  console.log("Titel: " + bookObject.title);
  console.log("Författare: " + bookObject.author);
  console.log("Utgivningsår: " + bookObject.year);
}

// Anropar funktionen med bokobjektet.
printBookInfo(book);