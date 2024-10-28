const fs = require('fs').promises;
const readline = require('readline');

// 1. Erstelle ein Interface für die Benutzereingabe
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Funktion zur Abfrage von Dateiname und Nachricht
function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function appendToFile() {
  try {
    // 2. Den Benutzer nach einem Dateinamen fragen
    console.log('Starte Abfrage nach Dateiname...');
    const fileName = await askQuestion('Gib den Namen der Datei ein: ');

    // 3. Den Benutzer nach einer Nachricht fragen
    console.log('Starte Abfrage nach Nachricht...');
    const message = await askQuestion('Gib die Nachricht ein, die hinzugefügt werden soll: ');

    // 4. Nachricht anhängen oder in eine neue Datei schreiben
    console.log(`Schreibe Nachricht in Datei ${fileName}...`);
    await fs.appendFile(fileName, message + '\n');
    console.log('Nachricht erfolgreich hinzugefügt.');

  } catch (err) {
    console.error('Fehler beim Schreiben in die Datei:', err);
  } finally {
    rl.close();
  }
}

appendToFile();
