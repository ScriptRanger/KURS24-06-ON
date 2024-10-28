const fs = require('fs');
const readlineSync = require('readline-sync');

// 1. Den Benutzer nach einem Dateinamen fragen
const fileName = readlineSync.question('Gib den Namen der Datei ein: ');

// 2. Den Benutzer nach einer Nachricht fragen, die in die Datei geschrieben werden soll
const message = readlineSync.question('Gib die Nachricht ein, die hinzugefügt werden soll: ');

// 3. Nachricht anhängen oder in eine neue Datei schreiben
try {
  fs.appendFileSync(fileName, message + '\n');
  console.log('Nachricht erfolgreich hinzugefügt.');
} catch (err) {
  console.error('Fehler beim Schreiben in die Datei:', err);
}
