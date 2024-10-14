// Funktion, die eine zufällige Wetterlage zurückgibt
function zufaelligesWetter() {
    const wetterLagen = ["Sonnig", "Regnerisch", "Schnee", "Windig"];
    const zufallIndex = Math.floor(Math.random() * wetterLagen.length);
    return wetterLagen[zufallIndex];
}

// Funktion, die eine Wetterlage interpretiert und eine Aktivität vorschlägt
function interpretiereWetter(wetterlage) {
    switch (wetterlage) {
        case "Sonnig":
            console.log("Gehe spazieren");
            break;
        case "Regnerisch":
            console.log("Bleibe zu Hause und lese ein Buch");
            break;
        case "Schnee":
            console.log("Baue einen Schneemann");
            break;
        case "Windig":
            console.log("Fliege einen Drachen");
            break;
        default:
            console.log("Keine Vorschläge für diese Wetterlage");
    }
}

// Hauptfunktion, die ein zufälliges Wetter auswählt und interpretiert
function wetterAktivitaet() {
    const wetterlage = zufaelligesWetter();
    console.log("Das Wetter ist: " + wetterlage);
    interpretiereWetter(wetterlage);
}

// Funktionsaufruf
wetterAktivitaet();
