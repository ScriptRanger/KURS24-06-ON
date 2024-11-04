// Funktion zur Berechnung der Ziffernsumme einer Zahl
function ziffernsummeDoWhile(n) {
    let sum = 0; // Initialisiere die Ziffernsumme mit 0

    do {
        sum += n % 10; // Füge die letzte Ziffer zur Summe hinzu
        n = Math.floor(n / 10); // Entferne die letzte Ziffer von n
    } while (n > 0); // Wiederhole bis n 0 ist

    return sum; // Gebe die Ziffernsumme zurück
}

// Aufruf der Funktion mit Beispiel und Ausgabe des Ergebnisses
console.log("Ziffernsumme von 357 (Do-While-Schleife):", ziffernsummeDoWhile(357));
