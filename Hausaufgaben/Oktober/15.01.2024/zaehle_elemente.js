// Funktion zum Zählen der Elemente, die größer als ein Schwellenwert sind (for-Schleife)
function zaehleGroesserFor(array, threshold) {
    let count = 0; // Initialisiere den Zähler mit 0
    for (let i = 0; i < array.length; i++) { // Durchlaufe das Array
        if (array[i] > threshold) { // Überprüfe, ob das Element größer als der Schwellenwert ist
            count++; // Erhöhe den Zähler
        }
    }
    return count; // Gebe die Anzahl zurück
}

// Funktion zum Zählen der Elemente, die größer als ein Schwellenwert sind (while-Schleife)
function zaehleGroesserWhile(array, threshold) {
    let count = 0; // Initialisiere den Zähler mit 0
    let i = 0; // Beginne bei Index 0
    while (i < array.length) { // Wiederhole, solange i kleiner ist als die Array-Länge
        if (array[i] > threshold) { // Überprüfe, ob das Element größer als der Schwellenwert ist
            count++; // Erhöhe den Zähler
        }
        i++; // Erhöhe i um 1
    }
    return count; // Gebe die Anzahl zurück
}

// Funktion zum Zählen der Elemente, die größer als ein Schwellenwert sind (do-while-Schleife)
function zaehleGroesserDoWhile(array, threshold) {
    let count = 0; // Initialisiere den Zähler mit 0
    let i = 0; // Beginne bei Index 0
    
    do {
        if (array[i] > threshold) { // Überprüfe, ob das Element größer als der Schwellenwert ist
            count++; // Erhöhe den Zähler
        }
        i++; // Erhöhe i um 1
    } while (i < array.length); // Wiederhole bis i die Array-Länge erreicht

    return count; // Gebe die Anzahl zurück
}

// Beispiel-Array und Schwellenwert
const dataArray = [15, 22, 36, 47, 53, 62, 73, 84, 91]; // Neues Beispiel-Array
const threshold = 50; // Der Schwellenwert

// Aufrufe der Funktionen und Ausgabe der Ergebnisse
console.log("Anzahl der Elemente größer als 50 (For-Schleife):", zaehleGroesserFor(dataArray, threshold)); // Ausgabe der Anzahl der Elemente größer als 50 (for)
console.log("Anzahl der Elemente größer als 50 (While-Schleife):", zaehleGroesserWhile(dataArray, threshold)); // Ausgabe der Anzahl der Elemente größer als 50 (while)
console.log("Anzahl der Elemente größer als 50 (Do-While-Schleife):", zaehleGroesserDoWhile(dataArray, threshold)); // Ausgabe der Anzahl der Elemente größer als 50 (do-while)
