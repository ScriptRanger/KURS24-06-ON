// Aufgabe 1: Wiederholung - Arrays
// /* 
// 1.1 Erstellen Sie ein Array namens autos
const autos = ['BMW', 'Audi', 'Mercedes'];

// 1.2 Greifen Sie auf das zweite Element zu und geben Sie es aus.
console.log(autos[1]);

// 1.3 Fügen Sie das Auto 'Volkswagen' hinzu und geben Sie das gesamte Array aus.
autos.push('Volkswagen');
console.log(autos);

// 1.4 Iterieren Sie über das Array und geben Sie jedes Auto in Großbuchstaben aus.
autos.forEach(auto => console.log(auto.toUpperCase()));
// */

// Aufgabe 2: Erste Schritte mit Map
/*
// 2.1 Erstellen Sie eine Map namens stadtMap.
const stadtMap = new Map();

// 2.2 Fügen Sie Paare hinzu: 'Berlin' : 'Deutschland', 'Paris' : 'Frankreich'.
stadtMap.set('Berlin', 'Deutschland');
stadtMap.set('Paris', 'Frankreich');

// 2.3 Greifen Sie auf den Wert des Schlüssels 'Berlin' zu und geben Sie ihn aus.
console.log(stadtMap.get('Berlin'));

// 2.4 Überprüfen Sie, ob der Schlüssel 'Rom' in der Map existiert.
console.log(stadtMap.has('Rom'));
*/

// Aufgabe 3: Iteration über Map
/*
// 3.1 Erweitern Sie die stadtMap um 'Rom' : 'Italien'.
stadtMap.set('Rom', 'Italien');

// 3.2 Iterieren Sie mit .forEach() und geben Sie jedes Paar im Format "Stadt: Land" aus.
stadtMap.forEach((land, stadt) => console.log(`Stadt: ${stadt}, Land: ${land}`));
*/

// Aufgabe 4: Erste Schritte mit Set
/*
// 4.1 Erstellen Sie ein Set namens buchstabenSet und fügen Sie 'A', 'B' und 'C' hinzu.
const buchstabenSet = new Set(['A', 'B', 'C']);

// 4.2 Überprüfen Sie, ob der Buchstabe 'D' im Set existiert.
console.log(buchstabenSet.has('D'));

// 4.3 Fügen Sie 'A' erneut hinzu und geben Sie die Anzahl der Elemente im Set aus.
buchstabenSet.add('A');
console.log(buchstabenSet.size);
*/

// Aufgabe 5: Iteration über Set
/*
// 5.1 Erstellen Sie ein Set namens farbenSet mit den Farben 'Gelb', 'Grün' und 'Blau'.
const farbenSet = new Set(['Gelb', 'Grün', 'Blau']);

// 5.2 Iterieren Sie mit einer for...of Schleife und geben Sie jede Farbe im Format "Farbe: [Farbe]" aus.
for (let farbe of farbenSet) {
    console.log(`Farbe: ${farbe}`);
}
*/

// Aufgabe 6: Praktische Anwendung - Map für Bücher
/*
// 6.1 Erstellen Sie eine Map namens buecherMap mit drei Büchern.
const buecherMap = new Map([
    ['Der Alchemist', {autor: 'Paulo Coelho', seiten: 198}],
    ['Sapiens', {autor: 'Yuval Noah Harari', seiten: 443}],
    ['1984', {autor: 'George Orwell', seiten: 328}]
]);

// 6.2 Greifen Sie auf die Seitenanzahl des Buches 'Der Alchemist' zu und geben Sie sie aus.
console.log(buecherMap.get('Der Alchemist').seiten);

// 6.3 Iterieren Sie über die buecherMap und geben Sie jedes Buch und seine Eigenschaften aus.
buecherMap.forEach((info, titel) => {
    console.log(`Titel: ${titel}, Autor: ${info.autor}, Seiten: ${info.seiten}`);
});
*/

// Aufgabe 7: Praktische Anwendung - Set für Sportarten
/*
// 7.1 Erstellen Sie ein Set namens sportartenSet mit 'Fußball', 'Basketball' und 'Tennis'.
const sportartenSet = new Set(['Fußball', 'Basketball', 'Tennis']);

// 7.2 Überprüfen Sie die Anzahl der einzigartigen Sportarten im Set.
console.log(sportartenSet.size);

// 7.3 Entfernen Sie 'Basketball' und geben Sie die aktualisierte Größe des Sets aus.
sportartenSet.delete('Basketball');
console.log(sportartenSet.size);
*/

// Aufgabe 8: Zusammenfassung und Anwendung
/*
// 8.1 Erstellen Sie eine Funktion namens zeigeBuecher
function zeigeBuecher(buecherMap) {
    buecherMap.forEach((info, titel) => {
        console.log(`Titel: ${titel}, Autor: ${info.autor}, Seiten: ${info.seiten}`);
    });
}

// 8.2 Testen Sie die Funktion mit der buecherMap aus Aufgabe 6.
zeigeBuecher(buecherMap);
*/
