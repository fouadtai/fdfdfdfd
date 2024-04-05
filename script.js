// on recup notre div
let square = document.getElementById("square")

// definir le style du carré 
// width: 100px
// height: 100px
// backgroudncolor: 
// position: absolute
// text-align : center
// line-height: 100px
// text: clique moi 

square.style.width = '100px'
square.style.height = '100px'
square.style.backgroundImage = 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/WA_80_cm_archery_target.svg/300px-WA_80_cm_archery_target.svg.png")'
square.style.lineHeight = '100px';
square.style.position = 'absolute';
square.style.cursor = 'pointer'
square.style.borderRadius = '30%'
square.innerText = 'Clique moi '

// fonction pour generer un nombre aléatoire entre un min-max

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(15, 50))

// fonction poour depalcer un carré aléatoirement

function moveSquare() {
    // largeur de l'ecran - largeur du carré 
    const screenWidth = window.innerWidth - 100;
    // hauteur de l'écran - hauteur du carré 
    const screenHeight = window.innerHeight - 100;
    // determiner une largueur aléatoire par rapport à l'écran 
    let newLeft = getRandomNumber(0, screenWidth);
    // determiner une hauteur aléatoire par rapport à l'écran 
    let newTop = getRandomNumber(0, screenHeight);

    square.style.left = newLeft + "px";
    square.style.top = newTop + "px";


}

// on donne les valeurs de top et left a notre carré

// on crée l'évenement pour déplacer le carré
square.addEventListener('mouseover', function () {
    setTimeout(moveSquare, 10);
})

// on ajoute un évenements click poura afficher uen alerte avc BRAVO !! 
square.addEventListener('click', function () {
    alert('Bravo')
})