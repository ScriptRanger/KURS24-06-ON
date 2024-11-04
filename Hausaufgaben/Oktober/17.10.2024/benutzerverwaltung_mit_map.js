// Aufgabe 1: Benutzerverwaltung mit Map

// 1.1 Erstellen der Map benutzerVerwaltung
const benutzerVerwaltung = new Map();

// 1.2 Hinzufügen von mindestens drei Benutzern zur Map
benutzerVerwaltung.set('benutzer123', {
    email: 'benutzer123@example.com',
    rolle: 'Admin'
});

benutzerVerwaltung.set('benutzer456', {
    email: 'benutzer456@example.com',
    rolle: 'User'
});

benutzerVerwaltung.set('benutzer789', {
    email: 'benutzer789@example.com',
    rolle: 'Gast'
});

// 1.3 Erstellen der Funktion zeigeBenutzer
function zeigeBenutzer(map) {
    map.forEach((details, benutzername) => {
        console.log(`${benutzername}: ${details.email}, ${details.rolle}`);
    });
}

// Aufrufen der Funktion zur Ausgabe der Benutzer und ihrer Details
zeigeBenutzer(benutzerVerwaltung);
