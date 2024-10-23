import boxen from 'boxen';
import chalk from 'chalk';

const message1 = chalk.green.bold('Esimene kast: Roheline ja paks tekst!');
const box1 = boxen(message1, {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'green'
});
const message2 = chalk.yellow('Teine kast: Kollane tekst!');
const box2 = boxen(message2, {
    padding: 1,
    margin: 1,
    borderStyle: 'double',
    borderColor: 'yellow'
});
const message3 = chalk.blue.underline('Kolmas kast: Sinine allajoonitud tekst!');
const box3 = boxen(message3, {
    padding: 1,
    margin: 1,
    borderStyle: 'classic',
    borderColor: 'blue'
});
const message4 = chalk.magenta('Neljas kast: Magenta tekst!');
const box4 = boxen(message4, {
    padding: 1,
    margin: 1,
    borderStyle: 'bold',
    borderColor: 'magenta'
});
const message5 = chalk.red.bold('Viies kast: Punane ja paks tekst!');
const box5 = boxen(message5, {
    padding: 1,
    margin: 1,
    borderStyle: 'arrow',
    borderColor: 'red'
});
console.log(box1);
console.log(box2);
console.log(box3);
console.log(box4);
console.log(box5);
