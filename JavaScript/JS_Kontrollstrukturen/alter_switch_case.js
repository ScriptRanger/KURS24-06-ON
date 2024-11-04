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

    switch (true) {
        case (age < 18):
            console.log("Du bist minderjährig!");
//      case (age >= 18 && age <= 66);
//          console.log("Du bist erwachen!")
            break;
        case (age >= 67):
            console.log("Du bist im Rentenalter");
            break;
        default:
            console.log("Du bist erwachsen!");
    }

}
checkAge();