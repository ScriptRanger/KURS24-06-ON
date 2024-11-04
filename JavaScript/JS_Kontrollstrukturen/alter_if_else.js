//function = leitet eine Funktion in JS ein
function getAge() {
    // flour = macht aus Kommazahlen Ganzzahlen indem
    // die Nachkommastellen gestrichen werden.
    // random = ermittelt eine Zufallszahl zwischen 0.0 und 0.99 (1).
    return Math.floor(Math.random() * 100);
}

function checkAge() {
    //Holt sich den Wert aus der Funktion getAge()
    age = getAge();
    console.log('Dein Alter ist:' + age);

    if (age< 18) {
        console.log("Du bist minderjaehrig!")
    } else if(age >= 67){
        console.log("Du bist hoffentlich Rentner!")
    }
    else {
        console.log("Du bist volljaerig!")
    }

}
// Funktionsaufruf (Hiermit sieht die console.log-Befehle im Terminal)
checkAge();