var bitcoinCount = 0;
var PC = 0;
var servers = 0;
var multiplier = 1;
function add() {
    bitcoinCount += 1;
    update()
}
function save() {
    localStorage.setItem("bitcoinCount", bitcoinCount);
    localStorage.setItem("PC", PC);
    localStorage.setItem("servers", servers);
    localStorage.setItem("Multiplier", multiplier);
}
function load() {
    bitcoinCount = localStorage.getItem("bitcoinCount");
    bitcoinCount = parseInt(bitcoinCount);

    PC = localStorage.getItem("PC");
    PC = parseInt(PC);

    servers = localStorage.getItem("servers");
    servers = parseInt(servers);

    multiplier = localStorage.getItem("Multiplier");
    multiplier = parseInt(multiplier);
    update()
}
function timer() {
    bitcoinCount = bitcoinCount + PC * multiplier;
    bitcoinCount = bitcoinCount + servers * 2 * multiplier;
    update()
}
setInterval(timer, 1000);
function buyPC() {
    if (bitcoinCount >= ((PC + 1) * 15)) {
        bitcoinCount = bitcoinCount - ((PC + 1) * 15);
        PC += 1;
        update()
    }
}
function update() {
    document.getElementById('text').value = bitcoinCount;
    document.title = bitcoinCount + " Bitcoins";

    //Multiplicateur 
    document.getElementById("ammountMultiplier").innerHTML = "Prochaine amélioration : x" + (multiplier + 1);
    document.getElementById("ammountMultiplier2").innerHTML = "x" + (multiplier + 1);
    document.getElementById("costMultiplier").innerHTML = ((multiplier + 1) * 100) + " Bitcoins";
    document.getElementById("currentMultiplier").innerHTML = "Multiplicateur actuel : x" + (multiplier);

    //Mauvais pc
    document.getElementById("ammountPC").innerHTML = "Vous possédez " + PC + " PC";
    document.getElementById('costPC').innerHTML = ((PC + 1) * 15) + " Bitcoins";

    //Serveurs
    document.getElementById("ammountServers").innerHTML = "Vous possédez " + servers + " Serveurs";
    document.getElementById("costServer").innerHTML = ((servers + 1) * 30) + " Bitcoins";

    //Bitcoins par seconde
    document.getElementById("bitcoinPerSecond").innerHTML = "Vous gagnez " + (((PC) + (servers * 2)) * multiplier) + " Bitcoins par seconde";
}
function buyServer() {
    if (bitcoinCount >= ((servers + 1) * 30)) {
        bitcoinCount = bitcoinCount - ((servers + 1) * 30);
        servers += 1;
        update()
    }
}
function buyMultiplier() {
    if (bitcoinCount >= ((multiplier + 1) * 100)) {
        bitcoinCount = bitcoinCount - ((multiplier + 1) * 100);
        multiplier += 1;
        update()
    }
}