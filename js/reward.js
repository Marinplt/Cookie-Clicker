//-------------------------------------------------déclaration des variables---------------------------------------------------

var pierresCount = 0;
var pioche = 0;
var marteauPiqueur = 0;
var tractopelle = 0;
var bulldozer = 0;
var multiplier = 1;

//----------------------------------------------fonction d'addition des récompenses---------------------------------------------

function add() {
    pierresCount += 1;
    update()
}

//----------------------------------fonction de sauvegarde en local pour revenir plus tard sans perdre sa progression-----------

function save() {
    localStorage.setItem("pierresCount", pierresCount);
    localStorage.setItem("pioche", pioche);
    localStorage.setItem("marteauPiqueur", marteauPiqueur);
    localStorage.setItem("tractopelle", tractopelle);
    localStorage.setItem("bulldozer", bulldozer);
    localStorage.setItem("multiplier", multiplier);
}

//-------------------------------------------repêchage des informations précedemment sauvegardée---------------------------------

function load() {
    pierresCount = localStorage.getItem("pierresCount");
    pierresCount = parseInt(pierresCount);

    pioche = localStorage.getItem("pioche");
    pioche = parseInt(pioche);

    marteauPiqueur = localStorage.getItem("marteauPiqueur");
    marteauPiqueur = parseInt(marteauPiqueur);

    tractopelle = localStorage.getItem("tractopelle");
    tractopelle = parseInt(tractopelle);

    bulldozer = localStorage.getItem("bulldozer");
    bulldozer = parseInt(bulldozer);

    multiplier = localStorage.getItem("multiplier");
    multiplier = parseInt(multiplier);
    update()
}

//-----------------------------------------fonction timer pour automatiser la production-----------------------------------------
function timer() {
    pierresCount = pierresCount + pioche * multiplier;
    pierresCount = pierresCount + marteauPiqueur * 2 * multiplier;
    pierresCount = pierresCount + tractopelle * 5 * multiplier;
    pierresCount = pierresCount + bulldozer * 10 * multiplier;
    update()
}
setInterval(timer, 1000); //1 seconde d'intervalle

//-----------------------------------------fonction d 'achat du premier objet---------------------------------------------------

function buyPioche() {
    if (pierresCount >= ((pioche + 1) * 15)) {
        pierresCount = pierresCount - ((pioche + 1) * 15);
        pioche += 1;
        update()
    }
}

//-----------------------------------------fonction d 'achat du deuxième objet---------------------------------------------------

function buyMarteauPiqueur() {
    if (pierresCount >= ((marteauPiqueur + 1) * 30)) {
        pierresCount = pierresCount - ((marteauPiqueur + 1) * 30);
        marteauPiqueur += 1;
        update()
    }
}

//-----------------------------------------fonction d 'achat du troisième objet---------------------------------------------------

function buyTractopelle() {
    if (pierresCount >= ((tractopelle + 1) * 60)) {
        pierresCount = pierresCount - ((tractopelle + 1) * 60);
        tractopelle += 1;
        update()
    }
}

//-----------------------------------------fonction d'achat du quatrième objet----------------------------------------------------

function buyBulldozer() {
    if (pierresCount >= ((bulldozer + 1) * 120)) {
        pierresCount = pierresCount - ((bulldozer + 1) * 120);
        bulldozer += 1;
        update()
    }
}

//-----------------------------------------fonction d 'achat du multiplicateur---------------------------------------------------

function buyMultiplier() {
    if (pierresCount >= ((multiplier + 1) * 100)) {
        pierresCount = pierresCount - ((multiplier + 1) * 100);
        multiplier += 1;
        update()
    }
}

//------------------------fonction update du jeu avec les coûts et l'affichage des valeurs sur la page------------------------------

function update() {

    //--------------------------------Valeur récompense-------------------------------------------

    $("#text")[0].value = pierresCount;
    console.log($("text"));
    document.title = pierresCount + "Pierres";

    //--------------------------------Multiplicateur ---------------------------------------------

    $("#ammountMultiplier")[0].innerHTML = "Prochaine amélioration : x" + (multiplier + 1);
    $("#ammountMultiplier2")[0].innerHTML = "x" + (multiplier + 1);
    $("#costMultiplier")[0].innerHTML = "Prix : " + ((multiplier + 1) * 100) + " Pierres";
    $("#currentMultiplier")[0].innerHTML = "Multiplicateur actuel : x" + (multiplier);

    //--------------------------------Pioche-----------------------------------------------------------

    $("#ammountPioche")[0].innerHTML = "Vous possédez " + pioche + " Pioche";
    $("#costPioche")[0].innerHTML = "Prix : " + ((pioche + 1) * 15) + " Pierres";

    //--------------------------------Marteau piqueur-----------------------------------------------------

    $("#ammountMarteauPiqueur")[0].innerHTML = "Vous possédez " + marteauPiqueur + " MarteauPiqueur";
    $("#costMarteauPiqueur")[0].innerHTML = "Prix : " + ((marteauPiqueur + 1) * 30) + " Pierres";

    //--------------------------------Tractopelle-----------------------------------------------------

    $("#ammountTractopelle")[0].innerHTML = "Vous possédez " + tractopelle + " Tractopelles";
    $("#costTractopelle")[0].innerHTML = "Prix : " + ((tractopelle + 1) * 60) + " Pierres";

    //--------------------------------Server Bay-----------------------------------------------------

    $("#ammountBulldozer")[0].innerHTML = "Vous possédez " + bulldozer + " Server Bay";
    $("#costBulldozer")[0].innerHTML = "Prix : " + ((bulldozer + 1) * 120) + " Pierres";

    //--------------------------------Récompense par seconde---------------------------------------

    $("#pierresPerSecond")[0].innerHTML = "Vous gagnez " + ((((pioche) + (marteauPiqueur * 2) + (tractopelle * 5))) * multiplier) + " Minerais par seconde";
}