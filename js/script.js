//ES MAIL
// var mail = prompt('Inserisci l\'email');
// var lista = ['mario.rossi@boolean.com', 'pippo.franco@boolean.com', 'enrico.boldi@boolean.com', 'iva.zanicchi@boolean.com', 'beppe.fiore@boolean.com'];
// var trovata = false;
//
//
// for (var i = 0; i < lista.length; i++) {
//     if (lista[i] == mail){
//         trovata = true;
//     }
// }
//
// if (trovata == true){
//     alert('valida');
// } else {
//     alert('non valida');
// }

//ES DADI
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// con un dado ciascuno

// var dadoUtente = Math.floor(Math.random()*6) + 1;
// var dadoPc = Math.floor(Math.random()*6) + 1;
//
// alert('Il dado dell\'utente ha totalizzato: ' + dadoUtente);
// alert('Il dado del pc ha totalizzato: ' + dadoPc);
//
// if(dadoUtente > dadoPc){
//     alert('Giocatore vince');
// }else if (dadoUtente < dadoPc) {
//     alert('Pc vince');
// } else {
//     alert('Pari');
// }

// con due dadi ciascuno

// inizializzazioni var dadi
var dadoUtente1 = Math.floor(Math.random()*6) + 1;
var dadoUtente2 = Math.floor(Math.random()*6) + 1;
var dadoPc1 = Math.floor(Math.random()*6) + 1;
var dadoPc2 = Math.floor(Math.random()*6) + 1;

//somma dei due dadi sia dell'utente che del pc
var sommaUtente = dadoUtente1 + dadoUtente2;
var sommaPc = dadoPc1 + dadoPc2;

//alert del risultato ottenuto
alert('I dadi del giocatore hanno totalizzato: ' + sommaUtente);
alert('I dadi del pc hanno totalizzato: ' + sommaPc);

//valutazione vincitore
if(sommaUtente > sommaPc){
    alert('Vince il giocatore');
} else if(sommaUtente < sommaPc){
    alert('Vince il pc');
} else {
    alert('Pari');
}
