let topClip = 0;
let bottomClip = 99.16;
let marginClip = 0;
const element = document.getElementById('fire');

const frameNUmber = 120;

function goDown() {
    console.log('goDown');
    console.log(marginClip);
    element.style.clipPath = `inset(${topClip}% 0% ${bottomClip}%)`;
    element.style.marginTop = `-${marginClip * element.clientHeight/frameNUmber}px`;
    topClip += (1/frameNUmber)*100;
    if (topClip > 100) {
        topClip = 0;
    }
    bottomClip -=(1/ frameNUmber)*100;
    if (bottomClip < 0) {
        bottomClip = 100;
    }
    marginClip++ ;
    if (marginClip > frameNUmber) {
        marginClip = 0;
    }
}


// Fonction diporama qui change l'image automatiquement toute les secondes
function slideShow(){
    setInterval(function(){
        goDown();
    }, 24);
}
slideShow();

//TweenMax to :
//1. target element (class)
//2. duration (seconds)
//3. properties : repeat (-1 = infinite), y (img size), ease (img total frames)
TweenMax.to('.snow',5,{repeat:-1,backgroundPosition:"0px -39864px",ease:SteppedEase.config(132)});