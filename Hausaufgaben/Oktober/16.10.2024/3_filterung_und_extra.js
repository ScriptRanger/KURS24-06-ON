// Erstelle ein Array mit zufälligen Zahlen zwischen 1 und 100 (mindestens 20 Zahlen)
const zahlenArray = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1);
console.log("Originales Array:", zahlenArray); // Ausgabe des Arrays mit zufälligen Zahlen

// Filtern Sie alle geraden Zahlen in einem neuen Array heraus
const geradeZahlen = zahlenArray.filter(zahl => zahl % 2 === 0); // .filter() wählt alle geraden Zahlen aus
console.log("Gerade Zahlen:", geradeZahlen); // Ausgabe des gefilterten Arrays mit geraden Zahlen

// Berechne die Summe aller gefilterten geraden Zahlen
const summeGeradeZahlen = geradeZahlen.reduce((summe, zahl) => summe + zahl, 0); // .reduce() berechnet die Summe der geraden Zahlen
console.log("Summe der geraden Zahlen:", summeGeradeZahlen); // Ausgabe der Summe
