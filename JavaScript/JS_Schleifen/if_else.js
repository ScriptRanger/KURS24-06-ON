// Funktion, die ein zufälliges Alter zwischen 0 und 100 zurückgibt
function zufaelligesAlter() {
    return Math.floor(Math.random() * 101); // Alter zwischen 0 und 100
}

// Funktion, die eine Alterskategorie basierend auf dem Alter bestimmt
function bestimmeKategorie(alter) {
    if (alter >= 0 && alter <= 12) {
        return "Kind";
    } else if (alter >= 13 && alter <= 17) {
        return "Jugendlicher";
    } else if (alter >= 18 && alter <= 64) {
        return "Erwachsener";
    } else if (alter >= 65) {
        return "Senior";
    } else {
        return "Ungültiges Alter";
    }
}

// Hauptfunktion, die ein zufälliges Alter generiert und die Kategorie anzeigt
function zeigeKategorieZufaellig() {
    const alter = zufaelligesAlter();
    const kategorie = bestimmeKategorie(alter);
    console.log("Zufälliges Alter: " + alter + " - Kategorie: " + kategorie);
}

// Funktionsaufruf
zeigeKategorieZufaellig();
