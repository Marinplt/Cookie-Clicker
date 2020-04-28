var num = 0; //nbr de cookie au début donc 0

window.onload = function () {    //fonction pour avoir un pseudo personalisé pour la boulangerie
        var name = prompt("Entre ton pseudo");
        
        var space = document.getElementById("bakery");
        
        space.innerHTML = "Boulangerie de " + name;
}

var cookie = document.getElementById("cookie");

function cookieClick() { 
    num += 1;
    var numbers = document.getElementById("score");
    var upgradeLevel = document.getElementById("paliers");
    
    numbers.innerHTML = num;      
    //améliorer au palier grand mere qui multiplie par 2
    if(num >= 30 ){
        num += 1;
        upgradeLevel.innerHTML = "Palier Grand-Mère";
    }

    //palier usine qui multiplie par 10
    if(num >= 500) {
        num += 8;
        upgradeLevel.innerHTML = "Palier Usine";
    }

    //palier complexe d'usines qui multiplie par 30
    if(num >= 1000) {
        num += 20;
        upgradeLevel.innerHTML = "Palier complexe d'usines";
    }

    //usine nucléaire qui multiplie par 1000
    if(num >= 100000) {
        num += 970;
        upgradeLevel.innerHTML = "Palier usine nucléaire";
    }
}
