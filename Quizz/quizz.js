const quizz = [
    {
        "number": 0,
        "question": "Combien de classes possèdent LostArk ?",
        "answers": [
            "5",
            "17",
            "69"
        ],
        "correct": "17",
        "tip": "Les 17 classes sont répartis entre 5 grandes classes : Guerrier / Martialiste / Tireur d'Elite / Mage / Assassin"
    },
    {
        "number": 1,
        "question": "Qui est le Dieu qui a crée le monde ?",
        "answers": [
            "Régulus",
            "Romulus",
            "Rémus"
        ],
        "correct": "Régulus",
        "tip": "Le dieu Regulus amena l'ordre et la lumière pour contrebalancer les ténèbres et le chaos, et créa un monde pour chacun d'entre eux : Archésia et Pétrania."
    },
    {
        "number": 2,
        "question": "Quel type de jeu est LostArk ?",
        "answers": [
            "MOBA",
            "MMORPG",
            "Narratif"
        ],
        "correct": "MMORPG",
        "tip": "UN MMORPG D'ACTION MONUMENTAL ET GRATUIT"
    },
    {
        "number": 3,

        "question": "Combien de Mokokos sont à récolter à travers le monde ?",
        "answers": [
            "1250",
            "1500",
            "1945"
        ],
        "correct": "1250",
        "tip": "Une fois un certain nombre de Mokoko obtenu, vous pourrez les échanger contre des récompenses dans le Village Mokoko, en parlant à Totoma."
    },
    {
        "number": 4,
        "question": "A partir de quel continent atteint-on le niveau 1302 de puissance ?",
        "answers": [
            "Punika",
            "Bern",
            "Anich"
        ],
        "correct": "Punika",
        "tip": 'Le niveau 1302 de puissance est atteint sur le continent "Punika".'
    }
];

var score = 0;
// initialisation J'affiche toutes mes questions
const initialize = () => {
    const myQuizz = document.querySelector("#quizz");
    let quizzRender = '';

    quizz.map((question, id) => {
        console.log(id)
        quizzRender += `
      <h3 class="question">${question.question}</h3>

      <ul>
        <label class="labelQ">
        <input type="radio" id="${question.number}" name="question${id}" value="${question.answers[0]}">
        <label class="letter">A</label><span class="question">${question.answers[0]}</span><span class="verif${question.number}"></span>
        </label></br>

        <label class="labelQ">
        <input type="radio" id="${question.number}" name="question${id}" value="${question.answers[1]}">
        <label class="letter">B</label><span class="question">${question.answers[1]}</span><span class="verif${question.number}"></span>
        </label></br>

        <label class="labelQ">
        <input type="radio" id="${question.number}" name="question${id}" value="${question.answers[2]}">
        <label class="letter">C</label><span class="question">${question.answers[2]}</span><span class="verif${question.number}"> </span>
        </label></br>
      </ul>

      <span class="tip">${question.tip}</span>
    `
    })


    myQuizz.innerHTML = quizzRender;
}
initialize();

// J'appelle mes éléments
const submit = document.querySelector("button");
const answers = [];
const allInput = document.querySelectorAll('input');
const renderScore = document.querySelector("#score");
const tips = document.querySelectorAll(".tip");
let count = 0;
let test = 0;
submit.disabled = true;


// Verification que le nombre de radio checked soit égal aux nombres de questions que j'ai dans mon Quiz
allInput.forEach(input => {
    input.addEventListener("change", () => {

        const allInputChecked = document.querySelectorAll('input[type="radio"]:checked').length;

        if (allInputChecked === quizz.length) {
            submit.disabled = false;
        }
    })
});

// Lorsqu'on clique sur notre bouton Valider mes réponses
submit.addEventListener("click", (e) => {
    logic();

    //affichage tooltip
    tips.forEach(tip => {
        tip.style.display = "inline";
    });

    // Je remonte au top de la page
    window.scrollTo(0, 0);

    //J'affiche mon score
    renderScore.innerHTML += `Vous avez obtenu un score de ${score} sur ${quizz.length}`;

    //reset score
    score = 0;
    e.preventDefault();
})

// sert uniquement à calculer le score
function logic() {
    const allInputChecked = document.querySelectorAll('input[type="radio"]:checked');

    // Je récupère les radios checked et les insèrent dans un tableau.
    for (input of allInput) {
        if (input.checked == true) {
            answers.push(input.value);
        }
    }
    // Vérifie que le tableau avec les radios checked contienne les bonnes réponses prédéfinis.
    for (quiz of quizz) {
        if (answers.includes(quiz.correct)) {
            score++;
        }
    }

// Vérification des valeurs des inputs checked avec le Quiz
    allInputChecked.forEach((inputValue, index) => {
        if (inputValue.value === quizz[index].correct) {
            inputValue.nextElementSibling.nextElementSibling.nextElementSibling.textContent = " Juste :)";
            inputValue.nextElementSibling.nextElementSibling.nextElementSibling.style.color = "green";
            inputValue.nextElementSibling.nextElementSibling.style.color = "green";
            console.log(`Réponse ${index} : Juste`);

        } else {

            inputValue.nextElementSibling.nextElementSibling.nextElementSibling.textContent = " Faux :(";
            inputValue.nextElementSibling.nextElementSibling.style.color = "red";
            inputValue.nextElementSibling.nextElementSibling.nextElementSibling.style.color = "red";
            inputValue.nextElementSibling.nextElementSibling.style.textDecoration = "line-through";
            console.log(`Réponse ${index} : Faux`);
        }

    })


}

