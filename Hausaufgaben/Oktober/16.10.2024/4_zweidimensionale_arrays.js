// Erstelle ein 2D-Array, das eine 3x3-Matrix repräsentiert und mit den Zahlen 1 bis 9 gefüllt ist
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Ursprüngliche Matrix:", matrix);

// Funktion zur Berechnung der Diagonalsumme (von oben links nach unten rechts)
function berechneDiagonalsumme(matrix) {
    let diagonalsumme = 0;
    for (let i = 0; i < matrix.length; i++) {
        diagonalsumme += matrix[i][i]; // Summiere die Elemente auf der Hauptdiagonale
    }
    return diagonalsumme;
}

// Ausgabe der Diagonalsumme
console.log("Diagonalsumme:", berechneDiagonalsumme(matrix));

// Verwandle die Matrix in eine 3x3-Matrix mit Nullen in den Ecken
matrix[0][0] = 0; // Obere linke Ecke
matrix[0][2] = 0; // Obere rechte Ecke
matrix[2][0] = 0; // Untere linke Ecke
matrix[2][2] = 0; // Untere rechte Ecke

// Ausgabe der veränderten Matrix
console.log("Matrix mit Nullen in den Ecken:", matrix);
