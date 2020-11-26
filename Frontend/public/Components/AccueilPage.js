import {getUserSessionData} from "../utils/session.js";

const AccueilPage = () => {
    document.querySelector("#page_home").classList.remove('full-size');
    let page = document.querySelector("#page");
    let user = getUserSessionData();  
    let accueilPage;
    if (user) {
        accueilPage =`<div class="container">
        <div class="row mt-3">
    
        
            <div class="col m-5">

                <div class="col m-1 border border-5 border-dark rounded text-center" id="div_violet_darker">
                <div class="m-3" id="button_title">Meilleurs scores</div>
                </div>
                <div class="mb-2 text-center" id="text_white">Nathan 139</div>
                <div class="mb-2 text-center" id="text_white">Didier 130</div>
                <div class="mb-2 text-center" id="text_white">Arnaud 129</div>
            </div>

            <div class="col m-4">
            <h1 class="ml10 accueilPage_text">
            <span class="text-wrapper">
                <span class="letters">Commencez votre <br> Quizz'sait !</span>
            </span>
            </h1>
                <div class="m-5 text-center"><button type="button" class="btn btn-secondary btn-lg" onclick="window.location.href='/selector'">Let's begin</button></div>
            
            </div>
            <div class="col m-5">

            <div class="col m-1 border border-5 border-dark rounded text-center" id="div_violet_darker">
            <div class="m-3" id="button_title">Mes scores</div>
            </div>
                <div class="mb-2 text-center" id="text_white">Vous devez d'abord vous connecter pour voir vos scores</div>
            </div>
        
        </div>
    </div>`}else{
        accueilPage=`<div class="container">
        <div class="row mt-3">
    
        
            <div class="col mr-5">

                <div class="col m-3 border border-5 border-dark rounded text-center" id="div_violet_darker">
                <div class="m2"><h5><br>Top Score</h5><br></div>
                </div>
                <div class="mb-2 text-center" id="text_white">Nathan 139</div>
                <div class="mb-2 text-center">Didier 130</div>
                <div class="mb-2 text-center">Arnaud 129</div>
            </div>

            <div class="col mt-5 border border-5 border-secondary rounded" id="div_violet_smoother">
                <div class="m-5"><h5>Vous devez vous connecter pour commencer un Quizz</h5></div>
                <div class="m-5 text-center"><button type="button" class="btn btn-secondary btn-lg" onclick="window.location.href='/login'">Se connecter</button></div>
            </div>

            <div class="col mr-5">

                <div class="col m-3 text-center border border-5 border-dark rounded" id="div_violet_darker">
                <div class="m2"><h5><br>Mes scores</h5><br></div>
                </div>
                <div class="mb-2 text-center">Vous devez d'abord vous connecter pour voir vos scores</div>
            </div>
        
        </div>
    </div>`;

    }
 
    page.innerHTML = accueilPage;

        /***************************************************************************************
    *    Title: Moving Letters
    *    Author: @tobiasahlin
    *    Date: 22-11-2020
    *    
    *    Availability: https://tobiasahlin.com/moving-letters/#2
    *
    ***************************************************************************************/
   var textWrapper = document.querySelector('.ml10 .letters');
   textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
   
   anime.timeline({loop: true})
     .add({
       targets: '.ml10 .letter',
       rotateY: [-90, 0],
       duration: 1300,
       delay: (el, i) => 45 * i
     }).add({
       targets: '.ml10',
       opacity: 0,
       duration: 1000,
       easing: "easeOutExpo",
       delay: 1000
     });
    }

export default AccueilPage;
