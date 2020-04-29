/* window.onload = function () {    //fonction pour avoir un pseudo personalisé pour la boulangerie
    var name = prompt("Entre ton pseudo");
    
    var space = document.getElementById("bakery");
    
    space.innerHTML = "Boulangerie de " + name;
} */
var cookieCount = 0;
var autoClick = 0;
var farms = 0;
var multiplier = 1;
function add(){
    cookieCount += 1;
    update()
}
function save(){
    localStorage.setItem("cookieCount", cookieCount);
    localStorage.setItem("autoClick", autoClick);
    localStorage.setItem("farms", farms);
}
function load(){
    cookieCount = localStorage.getItem("cookieCount");
    cookieCount = parseInt(cookieCount);
    autoClick = localStorage.getItem("autoClick");
    autoClick = parseInt(autoClick);
    farms = localStorage.getItem("farms");
    farms = parseInt(farms);
    update()
}
function timer(){
    cookieCount = cookieCount + autoClick;
    cookieCount = cookieCount + farms * 2;
    update()
}
setInterval(timer, 1000);
function buyAutoClick(){
    if(cookieCount >= ((autoClick + 1 )* 12)){
        cookieCount = cookieCount - ((autoClick + 1) * 12);
        autoClick += 1;
        update()
    }
}
function update(){
    document.getElementById('text').value = cookieCount;
    document.title = cookieCount + " Cookies";
    
    document.getElementById("ammountAutoClick").innerHTML = "You own " + autoClick + " Auto clickers.";
    document.getElementById('costAutoClick').innerHTML = ((autoClick + 1) * 12) + " Cookies";
    
    document.getElementById("ammountFarms").innerHTML = "You own " + farms + " Farms";
    document.getElementById("costFarm").innerHTML = ((farms + 1) * 15) + " Cookies";

    document.getElementById("cookiesPerSecond").innerHTML = "You are gaining " + (((autoClick) + (farms * 2)) * multiplier) + " Cookies per/s";
}
function buyFarm(){
    if (cookieCount >= ((farms + 1) * 15)){
        cookieCount = cookieCount - ((farms + 1) * 15);
        farms += 1;
        update()
    }
}