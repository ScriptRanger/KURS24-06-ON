// Pakete importieren
import catFacts from 'cat-facts';
import inquirer from 'inquirer';
import boxen from 'boxen';
import chalk from 'chalk';

// Funktion zur Anzeige eines zufälligen Katzenfakts
function showCatFact() {
  const fact = catFacts.random(); // Zufälliger Katzenfakt
  const factBox = boxen(chalk.blue(fact), {
    padding: 1,
    margin: 1,
    borderStyle: 'double',
  });
  console.log(factBox);
}

// Funktion zur Abfrage des Benutzernamens
async function askForUsername() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'username',
      message: 'Wie lautet dein Name?',
      default: 'Gast',
    },
  ]);
  return answers.username;
}

// Benutzerinteraktion für neue Katzenfakten
async function askForNewCatFact() {
  const answers = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'getFact',
      message: 'Möchtest du einen weiteren Katzenfakt sehen?',
      default: true,
    },
  ]);
  
  if (answers.getFact) {
    showCatFact();
    await askForNewCatFact(); // Fragt erneut nach einem weiteren Katzenfakt
  } else {
    console.log(chalk.yellow('Danke, dass du das Programm genutzt hast!'));
    process.exit(0); // Programm beenden
  }
}

// Hauptfunktion
async function main() {
  const username = await askForUsername(); // Benutzernamen abfragen
  console.log(chalk.magenta(`Willkommen, ${username}, zu deinem Katzenfakt-Tool!`));
  showCatFact();
  await askForNewCatFact();
}

// Hauptfunktion aufrufen
main();
