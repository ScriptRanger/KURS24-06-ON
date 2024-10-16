// String-Manipulation
// 1. Sting-Verkettung
name = "Ahmet";
greeting = "Hallo";
console.log("Willkommen, " + name)
console.log("Willkommen, " + name + "möchtest du " + greeting + " sagen");

// 2. Template-Strings
// Backticks `...`erlauben das Einfügen von Variablen mit ${}
name = "Ünal";
gruss = `Willkommen Herr ${name}`;
console.log(gruss);
zahl1 = 5;
zahl2 = 7;
erg = (zahl1 + zahl2)
console.log (`Das Ergebnis ist ${erg}`);
console.log ("Das Ergebnis ist " + erg);

// 3. String-Methoden
strl = "Hallo Kurs TEILNEHMER! ";
formattedStrL = strl.trim().toLowerCase();
console.log(formattedStrL);
formattedStrU = strl.trim().toUpperCase();
console.log(formattedStrU);

// 4. String-Interpolation in Funktionen
function mehrwertSteuerpreis(preis) {
    const steuersatz = 0.19;
    gesamtpreis = preis * (1 + steuersatz);
    return `Der Gesamtpreis beträgt: €${gesamtpreis.toFixed(2)}`;
}

console.log(mehrwertSteuerpreis(100));

// 5. Verwendung von replace()

text = "Ich habe ein Haustier. Es ist ein Kater. Sein Namen ist Gojo"
neuerText = text.replace("Gojo", "Mojo")
console.log(neuerText)