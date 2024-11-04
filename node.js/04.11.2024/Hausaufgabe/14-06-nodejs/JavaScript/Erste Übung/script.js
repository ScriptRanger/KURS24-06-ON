console.log("JavaScript läuft!");

// Deklariert eine Variable mit 'let' (Datentyp: Zahl)
let alter = 45;
console.log("Alter:", alter);

// Deklariert eine Konstante mit 'const' (Datentyp: String)
const name = "Marcel";
console.log("Name:", name);

// Deklariert eine Variable mit 'var' (Datentyp: Boolean)
var optimistisch = true;
console.log("optimistisch:", optimistisch);


// Number: Anzahl der Netzwerkswitches
let anzahlNetzwerkSwitches = 5;
console.log("Anzahl der Netzwerk-Switches:", anzahlNetzwerkSwitches);

// String: Lieblingsprojekt
const lieblingsprojekt = "IT-Sicherheitskonzept erstellen";
console.log("Lieblingsprojekt:", lieblingsprojekt);

// Boolean: Interesse an Heimautomation
let interesseAnHeimautomation = true;
console.log("Interesse an Heimautomation:", interesseAnHeimautomation);

// Array: Namen der Katzen
let haustiere = ["Nala", "Molly"];
console.log("Haustiere:", haustiere);

// Object: Details eines 3D-Druckers
let druckerDetails = {
    modell: "Bambu Lab X1 Carbon",
    material: ["PLA", "ABS", "PETG"],
    ams: true
};
console.log("3D-Drucker Details:", druckerDetails);

// Zwei Zahlen vergleichen
let zahl1 = 5;
let zahl2 = "5"; // String statt Zahl, um den Unterschied zu verdeutlichen

// Vergleich mit == (vergleicht nur den Wert)
if (zahl1 == zahl2) {
    console.log("Mit ==: Die Werte sind gleich.");
} else {
    console.log("Mit ==: Die Werte sind nicht gleich.");
}

// Vergleich mit === (vergleicht den Wert und den Datentyp)
if (zahl1 === zahl2) {
    console.log("Mit ===: Die Werte und Datentypen sind gleich.");
} else {
    console.log("Mit ===: Die Werte oder Datentypen sind nicht gleich.");
}

// Punktzahl eines Tests
let punktzahl = 85;

// Überprüfung der Punktzahl und Ausgabe der entsprechenden Nachricht
if (punktzahl >= 90) {
    console.log("Ausgezeichnet");
} else if (punktzahl >= 70) {
    console.log("Gut gemacht");
} else {
    console.log("Mehr Übung erforderlich");
}


for (let i = 1; i <= 10; i++) {
    console.log(i);
}


let j = 0;
while (j <= 5) {
    console.log(j);
    j++;
}


// Funktion, die einen Namen als Parameter akzeptiert und eine Begrüßung zurückgibt
function begruessung(name) {
    return "Hallo, " + name + "!";
}

// Teste die Funktion mit verschiedenen Namen
console.log(begruessung("Melanie")); // Ausgabe: Hallo, Melanie!
console.log(begruessung("Marcel")); // Ausgabe: Hallo, Marcel!
console.log(begruessung("Sóley")); // Ausgabe: Hallo, Sóley!
console.log(begruessung("Shakira")); // Ausgabe: Hallo, Shakira!


// Array mit Lieblingsfrüchten
let lieblingsfruechte = ["Ananas", "Bananen", "Erdbeeren"];

// Zugriff auf den ersten Eintrag im Array
console.log("Erste Lieblingsfrucht:", lieblingsfruechte[0]);

// Objekt mit Informationen über eine Person
let person = {
    name: "Marcel",
    alter: 45,
    beruf: "Entwickler"
};

// Ausgabe des Namens der Person
console.log("Name der Person:", person.name);


// Zufällige Zahl zur Überprüfung
let zahl = 9; // Du kannst diesen Wert ändern, um das Verhalten zu testen

// Überprüfen, ob die Zahl größer als 10 ist
if (zahl >10) {
    console.log("Whoa! 🚀 Diese Zahl ist größer als 10! Zieh dir einen Helm an, wir gehen ab!");
} else {
    console.log("Hmm... Diese Zahl ist unter 10. Versuch's nochmal, wir brauchen mehr Power! 💪");
}
