// * -------------------------------    VARIABLES   ----------------------------------//
let siteTitle = document.querySelector('.splash');
// ex1
let btn1 = document.querySelector('.ex1 button');
let ex1p1 = document.querySelector('.ex1 .p1');
let ex1p2 = document.querySelector('.ex1 .p2');
let numberP1 = parseInt(ex1p1.textContent);
let numberP2 = 0;
// ex2
let btn2 = document.querySelector('.ex2 button');
let ex2p2 = document.querySelector('.ex2 .p2');
// ex3
let voteRange = document.querySelector('.ex3 #percentage');
let gaugeYes = document.querySelector('.ex3 .jauge1');
let titleYes = document.querySelector('.ex3 .jauge1 span');
let gaugeNo = document.querySelector('.ex3 .jauge2');
let titleNo = document.querySelector('.ex3 .jauge2 span');
//ex 4
let table = document.querySelector('.ex4 table');
let ex4Btn = document.querySelector('.ex4 button');
let nvTableBtn = document.querySelector('.ex4 .btn2');
// ex 5 
let squareShape = document.querySelector('.square');
// ex 6
let haddockInsults = ['Mille millions de mille sabords',
    'Bachi-bouzouk',
    'Bougres de faux jetons à la sauce tartare',
    'Coloquinte à la graisse de hérisson',
    'Espèce de mérinos mal peignés',
    'Cyrano à quatre pattes',
    'Zouave interplanétaire',
    'Ectoplasme à roulettes',
    'Bougre d’extrait de cornichon',
    'Jus de poubelle',
    'Espèce de porc-épic mal embouché',
    'Patagon de zoulous',
    'Loup-garou à la graisse de renoncule',
    'Amiral de bateau-lavoir',
    'Bayadère de carnaval',
    'Bougres d’extrait de crétins des Alpes',
    'Espèce de chouette mal empaillée',
    'Macchabée d\'eau de vaisselle',
    'Astronaute d\'eau douce',
    'Bulldozer à réaction',
    'Simili-martien à la graisse de cabestan',
    'Concentré de moules à gaufres',
    'Espèce de mitrailleur à bavette',
    'Tchouck-tchouck-nougat',
    'Garde-côtes à la mie de pain',
    'Papou des Carpates',
    'Sombre oryctérope',
    'Traîne-potence',
    'Marchand de tapis',
    'Loup-garou à la graisse de rotule',
    'Hurluberlu',
    'Zouave à la noix de coco'
];
let ex6TextArea = document.querySelector('#text-area');
let haddockImg = document.querySelector('#haddock-img');
// ex 7
let email = document.querySelector('.ex7 [name="email"]');
let postcode = document.querySelector('.ex7 [name="postcode"]');
let ex7btn = document.querySelector('.ex7 button');
let light = document.querySelector('.ex7 .light');
// ex 8

// ex Ajax
let xhr = new XMLHttpRequest();
let ajaxBtn = document.querySelector('.exajax button');
let chuckApiUrl = 'https://api.chucknorris.io/jokes/random';
let chuckNorrisFact = document.querySelector('.exajax .p2');
let chuckGif = document.querySelector('.exajax .gif');
// * -------------------------------    FUNCTIONS   ----------------------------------//
// ! ------------------------- ex1
function plusOne() {
    numberP1 += 1;
    ex1p1.textContent = `${numberP1}`;
    numberP2 += 1;
    ex1p2.textContent = `Vous avez cliqué sur ce bouton ${numberP2} fois`
}
// ! -------------------------- ex2
function drawResult() {
    let tomorrowDraw = []; /* tableau pour les numéros du loto */

    while (tomorrowDraw.length < 6) {
        let drawNumber = Math.round(Math.random() * (45 - 1)) + 1;
        if (tomorrowDraw.indexOf(drawNumber) == -1) {
            tomorrowDraw.push(drawNumber);
        }
    }
    ex2p2.textContent = tomorrowDraw;
    ex2p2.style.fontFamily = 'Bungee Shade';
    ex2p2.style.fontSize = '2rem';
    ex2p2.style.color = 'darkred';
    btn2.textContent = 'nouveau tirage'
}
// ! -------------------------- ex3
function changeGauges() {
    let percentPositive = voteRange.value;
    let percentNegative = (100 - percentPositive);
    // console.log(gaugeYes);
    gaugeYes.style.width = `${percentPositive.toString()}%`;
    gaugeNo.style.width = `${percentNegative.toString()}%`;
    titleYes.textContent = `Oui: ${percentPositive.toString()}%`;
    titleNo.textContent = `Non: ${percentNegative.toString()}%`;
}
// ! -------------------------- ex4
function calculTotal() {
    if (table.rows.length > 3) {
        table.deleteRow(3);
    }
    let array = [],
        resCol1 = 0,
        resCol2 = 0,
        resCol3 = 0;
    for (var r = 0; r < table.rows.length; r++) {
        for (var c = 0; c < table.rows[r].cells.length; c++) {
            let cellValue = parseInt(table.rows[r].cells[c].innerHTML);
            switch (c) {
                case 0:
                    resCol1 += cellValue;
                    break;
                case 1:
                    resCol2 += cellValue;
                    break;
                case 2:
                    resCol3 += cellValue;
                    break;
            }
        }
    }
    array.push(resCol1, resCol2, resCol3);
    let newRow = table.insertRow(table.length);
    for (let i = 0; i < 3; i++) {
        let newCell = newRow.insertCell(i);
        newCell.innerHTML = array[i];
    }
}

function creatRandomArray() {
    if (table.rows.length > 3) {
        table.deleteRow(3);
    }
    for (var r = 0; r < table.rows.length; r++) {
        for (var c = 0; c < table.rows[r].cells.length; c++) {
            let randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
            table.rows[r].cells[c].innerHTML = randomNumber;
        }
    }
}
// ! -------------------------- ex5
function squareToRound() {
    let degree = document.getElementById("square-range").value;
    squareShape.style.borderRadius = `${degree}%`;
}
// ! -------------------------- ex6
function insults() {
    let randomInsult = Math.floor(Math.random() * (32 - 1) + 1);
    ex6TextArea.value = haddockInsults[randomInsult];
    haddockImg.style.display = 'initial';
}
// ! -------------------------- ex7
function testEntries() {
    if ((postcode.value != null && email.value != null) &&
        (postcode.value != '' && email.value != '')) {
        let number = parseInt(postcode.value);

        function isValidPostalCode() {
            if (isNaN(number)) {
                return false;
            } else {
                if (number >= 1000 && number <= 9999) {
                    return true;
                }
            }
        }

        function isValidMail() {
            let emailArray = email.value.split('@');
            if (emailArray.length > 1) {
                let endEmail = emailArray[1];
                let endEmailArray = endEmail.split('.')
                if (endEmailArray.length > 1) {
                    return true;
                }
            } else return false;
        }
        if (isValidPostalCode() && isValidMail()) {
            light.style.backgroundColor = 'green';
        } else light.style.backgroundColor = 'red';
    } else {
        ex7btn.textContent = 'write something first';
        ex7btn.style.backgroundColor = "tomato";
    }
}

function resetResult() {
    ex7btn.textContent = 'valider';
    ex7btn.style.backgroundColor = 'darkcyan';
    light.style.backgroundColor = 'lightgrey';
}
// ! -------------------------- ex8

// ! -------------------------- ex AJAX
function myAjaxFunction() {
    if (this.status == 200 && this.readyState == 4) {
        let monJSON = JSON.parse(this.responseText);
        chuckNorrisFact.textContent = "\"" + monJSON.value + "\"";
        chuckGif.style.display = 'initial';
    }
}

function myCallAjax() {
    xhr.open('GET', chuckApiUrl, true);
    xhr.send();
}

// * -------------------------------    APPLICATION   ----------------------------------//
window.addEventListener('scroll', function() {
    let currentScroll = window.scrollY;
    // console.log(currentScroll, window.innerHeight);
    if (currentScroll > window.innerHeight / 3) {
        siteTitle.classList.add('on-scroll');
    } else {
        siteTitle.classList.remove('on-scroll');
    }
});
// ex1
btn1.addEventListener('click', plusOne);
// ex2
btn2.addEventListener('click', drawResult);
// ex3
voteRange.addEventListener('input', changeGauges);
// ex4
ex4Btn.addEventListener('click', calculTotal);
nvTableBtn.addEventListener('click', creatRandomArray);
// ex5 
/* application called directly from html input "onchange" attribute */
// ex6
ex6TextArea.addEventListener('focusout', insults);
ex6TextArea.addEventListener('focusin', function() { haddockImg.style.display = 'none'; })
    // ex7
ex7btn.addEventListener('click', testEntries);
email.addEventListener('focusin', resetResult);
postcode.addEventListener('focusin', resetResult);

// ex8
let calcBtns = document.querySelectorAll('.calc-btns button');
let calcBtnArray = Array.from(calcBtns);
let calcEntry = document.querySelector('[name="number"]');
let firstNumber;
let secondNumber;

function checkEntries() {
    if (calcEntry.value) {
        let comaChanged = calcEntry.value.replace(',', '.');
        console.log(comaChanged);
        let currentNumber = parseFloat(comaChanged);
        if (isNaN(currentNumber)) {
            alert('ceci n\'est pas un nombre');
        } else if (currentNumber == 0) {
            alert('la division ne sera pas possible');
        } else if (firstNumber) {
            if (secondNumber) {
                secondNumber = currentNumber;
            } else {
                alert('cette calculette ne peut calculer que 2 nombres entre eux, appuyer sur C pour reset ou sur = pour le résultat')
            }
        } else {
            firstNumber = currentNumber;
        }
    }
}

function calculate() {
    let currentEvent = event.target.className;
    let operator = 0;
    if (operator == 1) {
        alert('cette calculette ne peut calculer que 2 nombres entre eux, appuyer sur C pour reset ou sur = pour le résultat')
    } else {
        switch (currentEvent) {
            case 'plus': // concatène nombre 1 et signe + add signe++
            case 'minus': // concatène nombre 1 et signe + add signe++
            case 'divided': // concatène nombre 1 et signe + add signe++
            case 'multiplied': // concatène nombre 1 et signe + add signe++
            case 'equals': // concatène première concaténation et second chiffre + affiche résulta + réinitialise nombre 1 et 2
            case 'reset': // réinitialise nombre 1 et 2
        }
    }
}

/* 
// verifier qu'il y a une entrée / vérifier que c'est un nombre
// conserver ce nombre
conserver le choix du calcul selon le bouton
vérifier qu'il y a un nouveau nombre
afficher le résultat avec le btn equals
réinitialiser la méthode avec le bouton reset
*/

calcBtnArray.forEach(button => {
    button.addEventListener('click', calculate);
});
calcEntry.addEventListener('focusout', checkEntries);



// * ex AJAX GET
xhr.addEventListener('readystatechange', myAjaxFunction);
ajaxBtn.addEventListener('click', myCallAjax);

// * ex jquery

$(document).ready(function() {
    // select multiple > filter selection result(several kinds) + instruction
    $('button').last().click(() => {
        console.log("la couleur du premier btn est " + $('button').first().css('background-color'));

        // select + instruction
        $('h1').css('color', 'blue');

        // select multiple with :not + several instructions
        $('button').not('.jquery-btn').css('background-color', 'orange')
            .css('border-radius', '50%')
            .text('new btn');

        // select multiple > filter selection result + several instructions
        $('button').last()
            .css('background-color', 'green')
            .text('reload page to get back')
            .css('color', 'white');

        // select (multiple) + use JS type instruction + point jquery variable with $('selecteur')
        $('button').click(function() {
            console.log("il y a " + $('button').length + " buttons");
            console.log("celui-ci est le " + $(this).val().indexOf($(this)) + "e buttons");
        });

        // select > find child element into selection + instruction
        $('.ex2 .enonce').find('p').css('color', 'violet');

        // select + instruction > change selection on parent(s) > filter new selection + instruction 
        $('.enonce').css('background-color', 'pink').parent().filter('.ex3').css('border', '4px dotted magenta');

        // select + several instructions throught an object
        $('.ex4 p').css({
            "color": 'red',
            "font-size": '1rem',
            'etc': 'etc'
        });

        // select + instruction > add selection (scope general) + instruction > remove added selection + instruction
        $('.ex5 p').css('color', 'blue').add($('h2')).css('text-transform', 'uppercase').end().css('font-style', 'italic');

        // EVENTS
        // events with several states (mouse, focus...) may have instructions set as function-arg
        $('[alt="chuck"]').hover(
            // 1 : mouseenter instruction
            () => { console.log('la souris est entrée'); },
            // 2 : mouseleave instruction
            () => { console.log('la souris est sortie'); }
        );
        // select several event
        $('button').on('mouseover click', function(e) {
            console.log('either mouseover or click happened');
        })

    });


})

// event delegation : event on parent -> instruction on child target.tagName == 'child tag selector name'