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