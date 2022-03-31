//-------------------------------------------------déclaration des variables---------------------------------------------------

var bitcoinCount = 0;
var PC = 0;
var servers = 0;
var pcGamer = 0;
var multiplier = 1;

//----------------------------------------------fonction d'addition des récompenses---------------------------------------------

function add() {
    bitcoinCount += 1;
    update()
}

//----------------------------------fonction de sauvegarde en local pour revenir plus tard sans perdre sa progression-----------

function save() {
    localStorage.setItem("bitcoinCount", bitcoinCount);
    localStorage.setItem("PC", PC);
    localStorage.setItem("pcGamer", pcGamer);
    localStorage.setItem("servers", servers);
    localStorage.setItem("Multiplier", multiplier);
}

//-------------------------------------------repêchage des informations précedemment sauvegardée---------------------------------

function load() {
    bitcoinCount = localStorage.getItem("bitcoinCount");
    bitcoinCount = parseInt(bitcoinCount);

    PC = localStorage.getItem("PC");
    PC = parseInt(PC);

    pcGamer = localStorage.getItem("pcGamer");
    pcGamer = parseInt(pcGamer);

    servers = localStorage.getItem("servers");
    servers = parseInt(servers);

    multiplier = localStorage.getItem("Multiplier");
    multiplier = parseInt(multiplier);
    update()
}

//-----------------------------------------fonction timer pour automatiser la production-----------------------------------------
function timer() {
    bitcoinCount = bitcoinCount + PC * multiplier;
    bitcoinCount = bitcoinCount + pcGamer * 2 * multiplier;
    bitcoinCount = bitcoinCount + servers * 5 * multiplier;
    update()
}
setInterval(timer, 1000); //1 seconde d'intervalle

//-----------------------------------------fonction d 'achat du premier objet---------------------------------------------------

function buyPC() {
    if (bitcoinCount >= ((PC + 1) * 15)) {
        bitcoinCount = bitcoinCount - ((PC + 1) * 15);
        PC += 1;
        update()
    }
}

//-----------------------------------------fonction d 'achat du deuxième objet---------------------------------------------------

function buyPcGamer() {
    if (bitcoinCount >= ((pcGamer + 1) * 30)) {
        bitcoinCount = bitcoinCount - ((pcGamer + 1) * 30);
        pcGamer += 1;
        update()
    }
}

//-----------------------------------------fonction d 'achat du troisième objet---------------------------------------------------

function buyServer() {
    if (bitcoinCount >= ((servers + 1) * 60)) {
        bitcoinCount = bitcoinCount - ((servers + 1) * 60);
        servers += 1;
        update()
    }
}

//-----------------------------------------fonction d 'achat du multiplicateur---------------------------------------------------

function buyMultiplier() {
    if (bitcoinCount >= ((multiplier + 1) * 100)) {
        bitcoinCount = bitcoinCount - ((multiplier + 1) * 100);
        multiplier += 1;
        update()
    }
}

//fonction update du jeu avec les coûts et l'affichage des valeurs sur la page

function update() {

    //--------------------------------Valeur récompense-------------------------------------------

    $("#text")[0].value = bitcoinCount;
    console.log($("text"));
    document.title = bitcoinCount + " Bitcoins";

    //--------------------------------Multiplicateur ---------------------------------------------

    $("#ammountMultiplier")[0].innerHTML = "Prochaine amélioration : x" + (multiplier + 1);
    $("#ammountMultiplier2")[0].innerHTML = "x" + (multiplier + 1);
    $("#costMultiplier")[0].innerHTML = "Prix : " + ((multiplier + 1) * 100) + " Bitcoins";
    $("#currentMultiplier")[0].innerHTML = "Multiplicateur actuel : x" + (multiplier);

    //--------------------------------PC-----------------------------------------------------------

    $("#ammountPC")[0].innerHTML = "Vous possédez " + PC + " PC";
    $("#costPC")[0].innerHTML = "Prix : " + ((PC + 1) * 15) + " Bitcoins";

    //--------------------------------Pc Gamer-----------------------------------------------------

    $("#ammountPcGamer")[0].innerHTML = "Vous possédez " + pcGamer + " PC Gamer";
    $("#costPcGamer")[0].innerHTML = "Prix : " + ((pcGamer + 1) * 30) + " Bitcoins";

    //--------------------------------Serveurs-----------------------------------------------------

    $("#ammountServers")[0].innerHTML = "Vous possédez " + servers + " Serveurs";
    $("#costServer")[0].innerHTML = "Prix : " + ((servers + 1) * 60) + " Bitcoins";

    //--------------------------------Récompense par seconde---------------------------------------

    $("#bitcoinPerSecond")[0].innerHTML = "Vous gagnez " + ((((PC) + (pcGamer * 2) + (servers * 5))) * multiplier) + " Bitcoins par seconde";
}