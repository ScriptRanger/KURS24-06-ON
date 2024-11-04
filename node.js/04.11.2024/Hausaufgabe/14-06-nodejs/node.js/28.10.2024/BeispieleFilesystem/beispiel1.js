const fs = require('fs');

const content = 'Dies ist der Inhalt';

fs.writeFile('beispiel.txt', content, 'utf8', err => {
    if(err) {
        console.error('Es gab einen Fehler beim schreiben der Datei', err);
        return;
    }
    console.log('Datei wurde erfolgreich beschrieben');
    });


fs.readFile('beispiel.txt', 'utf8', (err, data) => {
    if(err) {
        console.error('Es gab einen Fehler beim lesen der Datei', err); 
        return;
    }
    console.log('erfolgreich');
}) 

