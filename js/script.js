var mail = prompt('Inserisci l\'email');
var lista = ['mario.rossi@boolean.com', 'pippo.franco@boolean.com', 'enrico.boldi@boolean.com', 'iva.zanicchi@boolean.com', 'beppe.fiore@boolean.com'];
var controlla;


for (var i = 0; i < lista.length; i++) {
    if (lista[i] == mail){
        controlla = 'valida';
    }
    else {
        controlla = 'non valida';
    }
}

console.log(controlla);
