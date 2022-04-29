var lightredbutton = document.getElementById("lightredbutton");
var lightorangebutton = document.getElementById("lightorangebutton");
var lightgreenbutton = document.getElementById("lightgreenbutton");
var couleurNoir = "#000000";
var lightred = "#f00020";
var lightorange = "#ff7f00";
var lightgreen = "#008000";
var feurouge = document.getElementById('feurouge');
var feuorange = document.getElementById('feuorange');
var feuvert = document.getElementById('feuvert');

function afficherRouge(color){
    feuorange.style.backgroundColor = color;
    feuorange.style.border = color;
    feuvert.style.backgroundColor = color;
    feuvert.style.border = color;
}

function afficherOrange(color){
    feurouge.style.backgroundColor = color;
    feurouge.style.border = color;
    feuvert.style.backgroundColor = color;
    feuvert.style.border = color;
}

function afficherVert(color){
    feurouge.style.backgroundColor = color;
    feurouge.style.border = color;
    feuorange.style.backgroundColor = color;
    feuorange.style.border = color;
}


function situationNormal(color){
    feurouge.style.backgroundColor = lightred;
    feurouge.style.border = lightred;
    feuorange.style.backgroundColor = lightorange;
    feuorange.style.border = lightorange;
    feuvert.style.backgroundColor = lightgreen;
    feuvert.style.border = lightgreen;
}

lightredbutton.addEventListener("click",function(){
    afficherRouge(couleurNoir);
});

lightorangebutton.addEventListener("click",function(){
    afficherOrange(couleurNoir);
});

lightgreenbutton.addEventListener("click",function(){
    afficherVert(couleurNoir);
});

normalboutton.addEventListener("click",function(){
    situationNormal();
})




