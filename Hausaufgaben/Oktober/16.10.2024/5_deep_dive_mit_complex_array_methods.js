// Erstelle ein Array von Objekten, das Informationen über mehrere Bücher enthält
const buecher = [
    { titel: "Der Alchemist", autor: "Paulo Coelho", seiten: 208 },
    { titel: "Die Verwandlung", autor: "Franz Kafka", seiten: 104 },
    { titel: "Harry Potter und der Stein der Weisen", autor: "J.K. Rowling", seiten: 332 },
    { titel: "Krieg und Frieden", autor: "Leo Tolstoi", seiten: 1225 },
    { titel: "Der Hobbit", autor: "J.R.R. Tolkien", seiten: 310 }
];

// Sortiere das Array basierend auf der Anzahl der Seiten von höchstens nach mindestens
buecher.sort((a, b) => b.seiten - a.seiten); // .sort() sortiert absteigend nach der Seitenanzahl
console.log("Nach Seitenanzahl sortierte Bücher:", buecher);

// Erzeuge ein neues Array, das nur die Titel der Bücher enthält, die mehr als 300 Seiten haben
const titelUeber300Seiten = buecher
    .filter(buch => buch.seiten > 300) // .filter() wählt nur Bücher mit mehr als 300 Seiten
    .map(buch => buch.titel); // .map() extrahiert nur die Titel der gefilterten Bücher
console.log("Titel der Bücher mit mehr als 300 Seiten:", titelUeber300Seiten);
