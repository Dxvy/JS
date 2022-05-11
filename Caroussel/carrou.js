$carrousel = $('#carrousel');
$images = $('#carrousel img');
$text = $('#carrousel p');
$compt = 0;

function changeBubbleColor(a) {
    a.css({
        backgroundColor: '#839499',
        transform: 'scale(1)'
    })
    a.eq($compt).css({
        backgroundColor: '#1B2A2F',
        transform: 'scale(1.3)',
    })
}

function switchText() {
    $currentText = $text.eq($compt);
    $text.fadeOut(500);
    $currentText.fadeIn(500);
}
switchText();

function switchImages() {
    $currentImg = $images.eq($compt);
    $images.fadeOut(500);
    $currentImg.fadeIn(500);
}
switchImages();

$carrousel.append('<div class="controls"><i class="prevBtn fas fa-arrow-circle-left"></i><i class="nextBtn fas fa-arrow-circle-right"></i></div>');
$prevBtn = $('.prevBtn');
$nextBtn = $('.nextBtn');

$prevBtn.on('click', function() {
    if ($compt <= 0) {
        $compt = $images.length - 1;
    } else {
        $compt--;
    }
    switchText();
    switchImages();
    changeBubbleColor($bubbles);

})

$nextBtn.on('click', function() {
    if ($compt >= $images.length - 1) {
        $compt = 0;
    } else {
        $compt++;
    }
    switchText();
    switchImages();
    changeBubbleColor($bubbles);
})

// Fonction diporama qui change l'image automatiquement toute les 10 secondes
function slideShow(){
    setTimeout(function(){
        if ($compt >= $images.length - 1) {
            $compt = 0;
        } else {
            $compt++;
        }
        switchText();
        switchImages();
        changeBubbleColor($bubbles);

        slideShow(); // relance la fonction
    }, 10000);
}

slideShow(); // on oublie pas de lancer la fonction une première fois


// Pour chaque image, crée une bulle correspondante en dessous
$images.each(function() {
    $('.bubbles').append(`<li><a href="#"></a></li>`);
})

$bubbles = $('.bubbles a');
// Changement dynamique des images lors des clics sur les bulles
$bubbles.each(function() {
    $(this).on('click', function() {
        // Si l'index de la bulle est déjà égal au compteur, alors n'éxécute pas la fonction
        if ($bubbles.index($(this)) == $compt) {
            return false
        }
        // Le compteur prend la valeur de l'index du lien (bulle) dans le tableau $bubbles
        $compt = $bubbles.index($(this));
        console.log($compt)
        switchText();
        switchImages();
        changeBubbleColor($bubbles);
    })
})

changeBubbleColor($bubbles);