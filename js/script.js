console.log('js OK');

/*
## SNACK 1
Il Grande Gatsby ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla 
sua mega festa vip.
Ci ha lasciato il nome del tavolo  e la lista degli invitati in ordine di posto.

const tableName = 'Tavolo Vip';

const guests = [
  'Brad Pitt',
  'Johnny Depp',
  'Lady Gaga',
  'Cristiano Ronaldo',
  'Georgina Rodriguez',
  'Chiara Ferragni',
  'Fedez',
  'George Clooney',
  'Amal Clooney',
  'Maneskin'
];

Per stampare il tutto,  la tipografia  vuole che le mandiamo una lista di ospiti 
in cui ogni ospite sia un oggetto javascript che ha come attributi: 
- nome del tavolo
- nome dell'ospite e posto occupato.

Generiamo questo array in una variabile guestsList e stampiamolo in console.
*/

/*
1. Creiamo il tavolo vip array
2.creare attributi ospiti e creiamo il nuovo array guestList
*/

const tableName = 'Tavolo Vip';

const guests = [
  'Brad Pitt',
  'Johnny Depp',
  'Lady Gaga',
  'Cristiano Ronaldo',
  'Georgina Rodriguez',
  'Chiara Ferragni',
  'Fedez',
  'George Clooney',
  'Amal Clooney',
  'Maneskin'
];

console.log(guests);

const guestsList = guests.map((guest, positionTable) => ({
    tableName: tableName,
    guestName: guest,
    seatNumber: positionTable + 1
}));

console.log(guestsList);

/*
 * ## SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da id,
 Nome e somma totale dei loro voti di esame...
Per preparare l'aula di un nuovo corso, dobbiamo svolgere una serie di operazioni

1. Dobbiamo creare una lista di tutti gli studenti che hanno un 
totale di voti superiore a 70
2. Dobbiamo creare una lista di tutti gli studenti che hanno un 
totale di voti superiore a 70 e id superiore a 120
3. Dobbiamo stampare le targhe col nome degli studenti:
- creare una lista contenente il loro nome tutto in maiuscolo 
ES (Marco della Rovere => MARCO DELLA ROVERE);

Questo è l'elenco degli studenti:

#### Id|Name|Grades

- 213|Marco della Rovere|78
- 110|Paola Cortellessa|96
- 250|Andrea Mantegna|48
- 145|Gaia Borromini|74
- 196|Luigi Grimaldello|68
- 102|Piero della Francesca|50
- 120|Francesca da Polenta|84
 */

// Elenco degli studenti
const students = [
    { id: 213, name: 'Marco della Rovere', grades: 78 },
    { id: 110, name: 'Paola Cortellessa', grades: 96 },
    { id: 250, name: 'Andrea Mantegna', grades: 48 },
    { id: 145, name: 'Gaia Borromini', grades: 74 },
    { id: 196, name: 'Luigi Grimaldello', grades: 68 },
    { id: 102, name: 'Piero della Francesca', grades: 50 },
    { id: 120, name: 'Francesca da Polenta', grades: 84 }
];
console.log(students);
/*
 1. Dobbiamo creare una lista di tutti gli studenti che hanno un 
 totale di voti superiore a 70
*/

const studentsOver70 = students.filter(students => students.grades > 70);
console.log("Gli studenti con grado superiore a 70 sono :", studentsOver70);

/*
 2. Dobbiamo creare una lista di tutti gli studenti che hanno un 
totale di voti superiore a 70 e id superiore a 120
*/

const studentsOver70Id120= students.filter(students => students.grades > 70 && students.id > 120 );
console.log("Gli studenti con grado superiore a 70 ed ID maggiore di 120 sono:", studentsOver70Id120);

/*
3. Dobbiamo stampare le targhe col nome degli studenti:
- creare una lista contenente il loro nome tutto in maiuscolo 
ES (Marco della Rovere => MARCO DELLA ROVERE);
*/

const namesInUppercase = students.map(students => students.name.toUpperCase());
console.log(namesInUppercase);


/* ## SNACK 3
Creare un array di oggetti:
  - Ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
  - name e peso.
Stampare in console la bici con peso minore utilizzando il destructuring.
*/

// Array bici da corsa
const racingBikes = [
  { name: 'Bianchi Oltre XR4', weight: 7.2 },
  { name: 'Specialized Tarmac SL7', weight: 6.8 },
  { name: 'Trek Madone SLR', weight: 7.1 },
  { name: 'Cervelo R5', weight: 6.7 },
  { name: 'Colnago C64', weight: 7.3 }
];

/*
let weightFirstBike = racingBikes[0].weight;
let lightestBike = racingBikes[0];

// Ciclo dal primo array 
for (let i = 1; i < racingBikes.length; i++) {
  const bike = racingBikes[i];

  // Confronto i pesi per trovare n peso minore
  if (bike.weight < weightFirstBike) {
    weightFirstBike = bike.weight;
    lightestBike = bike;
  }
}
*/

// # DESTRUCTURING

let [firstBike, ...restBikes] = racingBikes;
let { weight: lightestWeight, ...restLightestBike } = firstBike;

for (const { weight, ...restBike } of restBikes) {
  // Confronto i pesi per trovare il peso minore
  if (weight < lightestWeight) {
    lightestWeight = weight;
    restLightestBike = restBike;
  }
}

// Ricostuire l'oggetto lightestBike
const lightestBike = { weight: lightestWeight, ...restLightestBike };

// Stampo la bici con il peso minore
console.log("La bici con peso minore é:", lightestBike);

/*

## SNACK 4

Creare un array di oggetti di squadre di calcio.

Ogni squadra avrà diverse proprietà: 
- nome
- punti fatti
- falli subiti.

nome sarà l’unica proprietà da inventare voi, le altre saranno tutte settate a 0.

Generare numeri random al posto degli 0 nelle proprietà punti fatti e falli subiti.

Infine, usando il destructuring, creiamo un nuovo array i cui elementi contengono 
solo nomi e falli subiti e stampiamo tutto in console.

*/

const footballTeams = [
  { nome: 'Juventus', puntiFatti: 0, falliSubiti: 0 },
  { nome: 'Milan', puntiFatti: 0, falliSubiti: 0 },
  { nome: 'Inter', puntiFatti: 0, falliSubiti: 0 },
  { nome: 'Liverpool', puntiFatti: 0, falliSubiti: 0 },
  { nome: 'Ajax', puntiFatti: 0, falliSubiti: 0 },
  { nome: 'Real Madrid', puntiFatti: 0, falliSubiti: 0 },
  { nome: 'Barcelona', puntiFatti: 0, falliSubiti: 0 },
  { nome: 'PSG', puntiFatti: 0, falliSubiti: 0 },
  { nome: 'Bayer Munchen', puntiFatti: 0, falliSubiti: 0 },
  { nome: 'Manchster City', puntiFatti: 0, falliSubiti: 0 },
  // Aggiungi altre squadre se necessario
];
