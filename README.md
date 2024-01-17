## Esercizio di oggi: 
# Snack Array Methods
### nome repo: js-snack-es6

## SNACK 1
Il Grande Gatsby ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
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

Per stampare il tutto,  la tipografia  vuole che le mandiamo una lista di ospiti in cui ogni ospite sia un oggetto javascript che ha come attributi: 
- nome del tavolo
- nome dell'ospite e posto occupato.

Generiamo questo array in una variabile guestsList e stampiamolo in console.

## SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
Per preparare l'aula di un nuovo corso, dobbiamo svolgere una serie di operazioni

1. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70

2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
3. Dobbiamo stampare le targhe col nome degli studenti:
- creare una lista contenente il loro nome tutto in maiuscolo ES (Marco della Rovere => MARCO DELLA ROVERE);

Questo è l'elenco degli studenti:

#### Id|Name|Grades

- 213|Marco della Rovere|78
- 110|Paola Cortellessa|96
- 250|Andrea Mantegna|48
- 145|Gaia Borromini|74
- 196|Luigi Grimaldello|68
- 102|Piero della Francesca|50
- 120|Francesca da Polenta|84


## --------------------------------------------------------- ##

# Snack Array Methods 2 (La vendetta)

## SNACK 3

Creare un array di oggetti:

- Ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
 - name e peso.

Stampare in console la bici con peso minore utilizzando il destructuring.

## SNACK 4

Creare un array di oggetti di squadre di calcio.

Ogni squadra avrà diverse proprietà: 
- nome
- punti fatti
- falli subiti.

nome sarà l’unica proprietà da inventare voi, le altre saranno tutte settate a 0.

Generare numeri random al posto degli 0 nelle proprietà punti fatti e falli subiti.

Infine, usando il destructuring, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.