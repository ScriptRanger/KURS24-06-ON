// Funktion zur Summierung der geraden Zahlen von 1 bis 100
function summeGeradeZahlenDoWhile() {
    let sum = 0; // Initialisiere die Summe mit 0
    let i = 1; // Beginne bei 1

    do {
        if (i % 2 == 0) { // Überprüfe, ob die Zahl gerade ist
            sum += i; // Addiere die gerade Zahl zur Summe
        }
        i++; // Erhöhe i um 1
    } while (i <= 100); // Wiederhole bis i 100 erreicht

    return sum; // Gebe die Summe zurück
}

// Aufruf der Funktion und Ausgabe des Ergebnisses
console.log("Summe der geraden Zahlen (Do-While-Schleife):", summeGeradeZahlenDoWhile());
