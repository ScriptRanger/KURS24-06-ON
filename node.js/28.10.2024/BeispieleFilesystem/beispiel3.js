const fs = require('fs');

async function readandwrite() {
    try{

        // 1. Leaden der Datei
        const data = fs.readFileSync('beispiel.txt', 'utf8');
        // 2. Inhalt ändern
        const modifiedData = data.replace(data, 'neuer Text');
        // 3. geänderte Inhalt in die Datei geschrieben wird
        fs.writeFileSync('beispiel.txt', modifiedData, 'utf8');
        console.log("Es war alles Erfolgreich");

    } catch(err) {
        console.error('Es gab einen Fehler beim Bearbeiten der Datei', err);
    }

};

readandwrite();


