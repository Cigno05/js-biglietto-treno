/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
oppure applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va stampato in console in forma “umana” cioè con al massimo due decimali, per indicare centesimi sul prezzo. Questo richiederà un minimo di ricerca.*/


/* dichiarare variante con numero di km impostata dall'utente*/

const km = prompt('Inserire numero di Km che si vogliono percorrere'); //string

console.log('Kilometri ' + km);

/*calcolare prezzo in base ai km (0.21 € / km) */

const priceForKm = km * 0.21; //number

console.log('Costo Km dichiarati ' + priceForKm + ' €');



/* dichiariare variante con età impostata dall'utente */

const age = prompt('Inserire età'); //string

console.log('Età dichiarata ' + age + ' anni' ); //string




/*---------sconti sul prezzo del biglietto------------*/

const discount20 = (priceForKm - (priceForKm * 0.2));
const discount40 = (priceForKm - (priceForKm * 0.4));



/* calcolo prezzo del biglietto in base agli sconti*/


if (age < 18) {
    console.log('Prezzo under 18 ' +  discount20.toFixed(2)); //number
} else if (age > 65) {
    console.log('Prezzo over 65 ' + discount40.toFixed(2)); //number
} else {
    console.log('Prezzo Intero ' + priceForKm.toFixed(2)); //number
}










