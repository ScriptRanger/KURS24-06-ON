// Aufgabe 2: Eindeutige Einträge mit Set

// 2.1 Erstellen des Sets besuchteSeiten
const besuchteSeiten = new Set();

// 2.2 Hinzufügen von mindestens fünf Seitennamen zum Set, mit zwei Duplikaten
besuchteSeiten.add('Startseite');
besuchteSeiten.add('Profil');
besuchteSeiten.add('Einstellungen');
besuchteSeiten.add('Startseite'); // Duplikat
besuchteSeiten.add('Kontakt');
besuchteSeiten.add('Profil'); // Duplikat

// 2.3 Ausgabe der Anzahl der eindeutigen Seiten
console.log(`Anzahl der eindeutigen Seiten: ${besuchteSeiten.size}`);

// 2.4 Erstellen der Funktion zeigeSeiten
function zeigeSeiten(set) {
    set.forEach(seite => {
        console.log(`Besuchte Seite: ${seite}`);
    });
}

// Aufrufen der Funktion zur Ausgabe aller besuchten Seiten
zeigeSeiten(besuchteSeiten);
