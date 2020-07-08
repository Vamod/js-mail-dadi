var mail = prompt('Inserisci l\'email');
var lista = ['mario.rossi@boolean.com', 'pippo.franco@boolean.com', 'enrico.boldi@boolean.com', 'iva.zanicchi@boolean.com', 'beppe.fiore@boolean.com'];
var trovata = false;


for (var i = 0; i < lista.length; i++) {
    if (lista[i] == mail){
        trovata = true;
    }
}

if (trovata == true){
    alert('valida');
} else {
    alert('non valida');
}
