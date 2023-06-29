/* PROMPT*/
let nameUser= prompt("inserisci il tuo nome");
let surname= prompt("inserisci il tuo cognome");
let favoritecolor= prompt("iserisci il tuo colore preferito");
let selectnumber= prompt("inserisci un numero");
let selectsecondnumber= prompt("inserisci un secondo numero");

let dividednumber = selectnumber/selectsecondnumber



let passwordgenerated= nameUser+surname+favoritecolor+dividednumber;



console.log (passwordgenerated);

console.log (favoritecolor);




document.getElementById("password").innerHTML = passwordgenerated;



