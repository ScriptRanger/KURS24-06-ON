// Erstelle ein Array mit den Zahlen 1 bis 10
const zahlenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Ursprüngliches Array:", zahlenArray); // Ausgabe des ursprünglichen Arrays

// Füge die Zahl 11 am Ende des Arrays hinzu
zahlenArray.push(11); // .push() fügt ein Element am Ende des Arrays hinzu
console.log("Nach Hinzufügen von 11:", zahlenArray); // Ausgabe nach Hinzufügen von 11

// Entferne die erste Zahl aus dem Array
zahlenArray.shift(); // .shift() entfernt das erste Element aus dem Array
console.log("Nach Entfernen des ersten Elements:", zahlenArray); // Ausgabe nach Entfernen des ersten Elements

// Finde und gib die Position der Zahl 5 im Array aus
const positionVon5 = zahlenArray.indexOf(5); // .indexOf() gibt die Position eines Elements zurück
console.log(`Die Position der Zahl 5 ist: ${positionVon5}`); // Ausgabe der Position der Zahl 5

// Überprüfe, ob die Zahl 7 im Array enthalten ist
const ist7Enthalten = zahlenArray.includes(7); // .includes() prüft, ob ein Element im Array vorhanden ist
console.log(`Ist die Zahl 7 im Array enthalten? ${ist7Enthalten}`); // Ausgabe des Ergebnisses der Überprüfung
