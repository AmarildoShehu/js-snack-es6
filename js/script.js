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
