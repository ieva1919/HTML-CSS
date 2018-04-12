var r2d2 = document.getElementById('R2D2');


var topPadetis = 0;
var rightPadetis = 0;

function judetiAukstyn() {
    topPadetis -= 104;
    if(topPadetis <0) {
        topPadetis = 0;
    }
    r2d2.style.top = topPadetis + "px";
}


function judetiKaire() {
    rightPadetis += 104;
    if(rightPadetis > 832) {
        rightPadetis = 0;
    }
    r2d2.style.right = rightPadetis + "px";
}

function judetiDesine() {
    rightPadetis -= 104;
    if(rightPadetis <0) {
        rightPadetis = 0;
    }
    r2d2.style.right = rightPadetis + "px";
}

function judetiZemyn() {
    topPadetis += 104;
    if(topPadetis > 520) {
        topPadetis = 0;
    }
    r2d2.style.top = topPadetis + "px";
}