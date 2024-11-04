const fs = require('fs').promises;

async function readandwrite() {
    try{

        // 1. Leaden der Datei
        const data = await fs.readFile('beispiel.txt', 'utf8');
        // 2. Inhalt ändern
        const modifiedData = data.replace(data, 'neuer Text');
        // 3. geänderte Inhalt in die Datei geschrieben wird
        await fs.writeFile('beispiel.txt', modifiedData, 'utf8');

    } catch(err) {
        console.error('Es gab einen Fehler beim Bearbeiten der Datei', err);
    }

};

readandwrite();


    


// const content = 'Dies ist der Inhalt';

// fs.writeFile('beispiel.txt', content, 'utf8', err => {
//     if(err) {
//         
//         return;
//     }
//     console.log('Datei wurde erfolgreich beschrieben');
//     });


// fs.readFile('beispiel.txt', 'utf8', (err, data) => {
//     if(err) {
//         console.error('Es gab einen Fehler beim lesen der Datei', err); 
//         return;
//     }
//     console.log('erfolgreich');
// }) 

