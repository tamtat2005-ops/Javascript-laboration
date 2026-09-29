/* Lösning till Uppgift 9. Av Tamara Tato, 2026 */
"use strict";

// Skapar en array med tre personer.
const people = [
  {
    name: "Tamara",
    age: 21,
    city: "Malmö"
  },
  {
    name: "Fadi",
    age: 26,
    city: "Trelleborg"
  },
  {
    name: "Aleyah",
    age: 17,
    city: "Trollhättan"
  }
];

// Skriver ut information om en person.
function printPersonInfo(person) {
  console.log("Namn: " + person.name);
  console.log("Ålder: " + person.age);
  console.log("Stad: " + person.city);

  // Kontrollerar om personen är myndig.
  if (person.age >= 18) {
    console.log("Personen är myndig.");
  } else {
    console.log("Personen är inte myndig.");
  }

  console.log("----------------");
}

// Går igenom arrayen och skriver ut varje person.
for (const person of people) {
  printPersonInfo(person);
}