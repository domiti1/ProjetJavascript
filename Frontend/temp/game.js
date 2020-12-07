const FILE_PATH = "./questions.json";

const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');



let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


//function that returns an array of data for the questions from a json file,
// in comments because we need an SPA
//function getUserListFromFile(filePath) {
    //const fs = require("fs");
    //if (!fs.existsSync(filePath)) return [];
    //let userListRawData = fs.readFileSync(filePath);
    //let userList;
    //if (userListRawData) userList = JSON.parse(userListRawData);
    //else userList = [];
    //return userList;
  //}

//let questions = getUserListFromFile(FILE_PATH);
//console.log(questions);

let questions = [
    { "id":1, "title" : "Quel est la capitale de la Belgique ?", "categorie":"Géographie", "reponse1":"Paris", "reponse2":"Anvers", "reponse3":"Bruxelles", "reponse4":"Namur", "reponseCorrecte":"Bruxelles" },
    { "id":2 ,"title":"Lequel de ces fleuves n'est pas belge ?" ,"categorie":"Géographie","reponse1":"La Meuse","reponse2":"L'Escaut","reponse3":"Le Lys","reponse4":"Le Verdon","reponseCorrecte":"Le Verdon" },
    { "id":3 ,"title":"Lequel de ces états n'existe pas aux Etats-Unis ?" ,"categorie":"Géographie","reponse1":"Caroline","reponse2":"Virginie","reponse3":"Pennsylvanie","reponse4":"Maryland","reponseCorrecte":"Caroline" },
    { "id":4 ,"title":"Quel est la capitale de l'Afrique du Sud ?" ,"categorie":"Géographie","reponse1":"Cape Town","reponse2":"Prétoria","reponse3":"Johannesbourg","reponse4":"Lagos","reponseCorrecte":"Prétoria" },
    { "id":5 ,"title":"Combien d'Océans se trouve sur terre ?" ,"categorie":"Géographie","reponse1":"7","reponse2":"5","reponse3":"6","reponse4":"4","reponseCorrecte":"5" },
    { "id":6 ,"title":"Dans quel océan ou mer se jette l'Amazone ?" ,"categorie":"Géographie","reponse1":"L'océan Atlantique","reponse2":"L'océan Pacifique","reponse3":"La mer des Caraïbes","reponse4":"La mer morte","reponseCorrecte":"L'océan Atlantique" },
    { "id":7 ,"title":"Quel est la ville la plus peuplée au monde ?" ,"categorie":"Géographie","reponse1":"Tokyo","reponse2":"New York","reponse3":"Shangai","reponse4":"Pékin","reponseCorrecte":"Tokyo" },
    { "id":8 ,"title":"Dans quel océan se trouve le triangle des Bermudes" ,"categorie":"Géographie","reponse1":"Océan Pacifique","reponse2":"Océan Atlantique","reponse3":"Océan Indien","reponse4":"Aucun des 3","reponseCorrecte":"Océan Atlantique" },
    { "id":9 ,"title":"Dans quel pays n'y a-t-il aucune rivière ?" ,"categorie":"Géographie","reponse1":"Bahamas","reponse2":"Inde","reponse3":"Luxembourg","reponse4":"Cape Vert","reponseCorrecte":"Bahamas" },
    { "id":10 ,"title":"Quel est la capitale du Canada ?" ,"categorie":"Géographie","reponse1":"Toronto","reponse2":"Ottawa","reponse3":"Montréal","reponse4":"Calgary","reponseCorrecte":"Ottawa" },
    { "id":11 ,"title":"Quel est le plus grand pays entre " ,"categorie":"Géographie","reponse1":"Le Canada","reponse2":"La France","reponse3":"Les Etats-Unis","reponse4":"Le Mexique","reponseCorrecte":"Le Canada" },
    { "id":12 ,"title":"Dans lequel de ces pays ne parle-t-on pas néerlandais ?" ,"categorie":"Géographie","reponse1":"Pays-Bas","reponse2":"Angola","reponse3":"Belgique","reponse4":"Suriname","reponseCorrecte":"Angola" },
    { "id":13 ,"title":"Dans lequel de ces pays ne parle-t-on pas portugais ?" ,"categorie":"Géographie","reponse1":"Portugal","reponse2":"Brésil","reponse3":"Bénin","reponse4":"Mozambique","reponseCorrecte":"Bénin" },
    { "id":14 ,"title":"Quel est le continent le plus grand au monde?" ,"categorie":"Géographie","reponse1":"l'Afrique","reponse2":"l'Asie","reponse3":"l'Europe","reponse4":"L'Amerique du nord","reponseCorrecte":"l'Asie" },
    { "id":15 ,"title":"Quel pays de cette liste n'est pas un pays scandinave ?" ,"categorie":"Géographie","reponse1":"la Suède","reponse2":"l'Islande","reponse3":"la Finlande","reponse4":"le Danemark","reponseCorrecte":"l'Islande" },
    { "id":16 ,"title":"Laquelle de ces villes a le plus grand aéroport au monde ?" ,"categorie":"Géographie","reponse1":"Atlanta","reponse2":"Shangai","reponse3":"Paris","reponse4":"Singapour","reponseCorrecte":"Atlanta" },
    { "id":17 ,"title":"Quel pays est le plus petit dans cette liste ?" ,"categorie":"Géographie","reponse1":"Saint-Marin","reponse2":"Malte","reponse3":"Maldives","reponse4":"Grenade","reponseCorrecte":"Saint-Marin" },
    { "id":18 ,"title":"Dans quel état des Etats-Unis se trouve le MIT ?" ,"categorie":"Géographie","reponse1":"Minnesota","reponse2":"Massachusetts","reponse3":"New York","reponse4":"Boston","reponseCorrecte":"Massachusetts" },
    { "id":19 ,"title":"Quel est la capitale du Nigéria ?" ,"categorie":"Géographie","reponse1":"Lagos","reponse2":"Kigali","reponse3":"Abuja","reponse4":"Kinshasa","reponseCorrecte":"Abuja" },
    { "id":20 ,"title":"Quel est l'ancienne capitale du Brésil ?" ,"categorie":"Géographie","reponse1":"Brasilia","reponse2":"Natal","reponse3":"Flamengo","reponse4":"Rio de Janeiro","reponseCorrecte":"Rio de Janeiro" }
    ];

const SCORE_QUESTION = 100;
const MAX_QUESTIONS = 4;

// main funtion
function startGame(){
    questionCounter = 1;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

function getNewQuestion(){
    if(availableQuestions.length ===0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('recentScore',score);
        return window.location.assign('./finalScore.html');
    }

    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS)*100}%`;

    const questionsIndex = Math.floor(Math.random()*availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.title;

    var arrayValueJson = [currentQuestion.reponse1,currentQuestion.reponse2,currentQuestion.reponse3,currentQuestion.reponse4];
    var count = 0;

    // showing all 4 possible answers
    choices.forEach(choice => {
        choice.innerText = arrayValueJson[count];
        console.log(currentQuestion);
        count ++;
    });

    availableQuestions.splice(questionsIndex,1);
    acceptingAnswers = true;

    questionCounter++;


}

// Defining if the user picked the right answer out of the 4 possible
choices.forEach(choice =>{
    choice.addEventListener('click',e =>{
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.innerText;
        
        let classToApply = selectedAnswer == currentQuestion.reponseCorrecte ? 'correct' : 'incorrect';

        if(classToApply === 'correct'){
            incrementScore(SCORE_QUESTION)
        }

        selectedChoice.parentElement.classList.add(classToApply);
        
        // Timeout between the change of questions for a smoother transition, 1000 ms
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
         },1000)

    });
});
  

// function that increments the score, called if the right answer is picked
function incrementScore(num){
    score = score + num;
    scoreText.innerText = score;
}

startGame();