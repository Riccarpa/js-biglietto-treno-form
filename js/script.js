// links to html 

// data input
var nameInput = document.getElementById('name');
var kms = document.getElementById('kms');
var ageInput = document.getElementById('age');
var generate = document.getElementById('generate');
var reset = document.getElementById('reset');

// data output

var nameOutput = document.getElementById('name-on-ticket');
var tarif = document.getElementById('tarif');
var vagon = document.getElementById('vagon');
var trainCode = document.getElementById('train-code');
var priceElement = document.getElementById('price');
var ticketSection = document.getElementById('ticket');

// data input collect on click

generate.addEventListener('click', function() {


    //recuperare valori dal form

    var nameValue = nameInput.value;
    var kmsValue = kms.value;
    var ageValue = ageInput.value;

    // calcolo prezzo biglietto

    price = 0.21 * kmsValue;

    //verifico l'età 

    var discount = 'tariffa ordinaria';
    if (ageValue === 'min') {
        price *= 0.8;
        discount = 'tariffa under 18'

    }

    if (ageValue === 'over65') {
        price *= 0.6;
        discount = 'tariffa over 65'
    }

    //preparazione prezzo da stampare

    price = price.toFixed(2) + ' €';

    //numero carrozza casuale

    var vagonValue = Math.floor(Math.random() * 12) + 1;

    // codice del treno

    trainCodeValue = 'A-12345';

    // stampare i risultati

    nameOutput.innerHTML = nameValue;
    tarif.innerHTML = discount;
    vagon.innerHTML = vagonValue;
    trainCode.innerHTML = trainCodeValue;
    priceElement.innerHTML = price;

    //mostrare la sezione ticket

    ticketSection.classList.remove('hidden');
});
reset.addEventListener('click', function() {

    //selezionare gli elementi di ticket e svuotarli

    var placeholdersElements = document.getElementsByClassName('placeholder');

    for (i = 0; i < placeholdersElements.length; i++) {

        var noContent = placeholdersElements[i];
        noContent.innerHTML = '';
        console.log(placeholdersElements);
    }

    //chiudere la sezione

    ticketSection.classList.add('hidden');

})