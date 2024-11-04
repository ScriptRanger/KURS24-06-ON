// Erstelle ein Array mit den Namen von fünf verschiedenen Städten
const staedte = ["Berlin", "Hamburg", "München", "Köln", "Frankfurt"];

// Iteriere über das Array und gib jede Stadt in Großbuchstaben aus
staedte.forEach(stadt => {
    console.log(stadt.toUpperCase()); // .toUpperCase() gibt die Stadt in Großbuchstaben aus
});

// Erstelle ein neues Array, das die Anzahl der Buchstaben in jedem Stadtnamen speichert
const buchstabenAnzahl = staedte.map(stadt => stadt.length); // .map() erzeugt ein neues Array mit der Länge jedes Stadtnamens
console.log("Anzahl der Buchstaben in jeder Stadt:", buchstabenAnzahl); // Ausgabe des neuen Arrays
