import {getUserSessionData} from "../utils/session.js";

const AccueilPage = () => {
    document.querySelector("#page_home").classList.remove('full-size');
    let page = document.querySelector("#page");
    let user = getUserSessionData();  
    let accueilPage;
    if (!user) {
        accueilPage =`<div class="container">
        <div class="row mt-3">
    
        
            <div class="col mr-5">

                <div class="col m-3 border border-5 border-dark rounded text-center" id="div_violet_darker">
                <div class="m2"><h5><br>Top Score</h5><br></div>
                </div>
                <div class="mb-2 text-center">Nathan 139</div>
                <div class="mb-2 text-center">Didier 130</div>
                <div class="mb-2 text-center">Arnaud 129</div>
            </div>

            <div class="col mt-5 border border-5 border-secondary rounded" id="div_violet_smoother">
                <div class="m-5"><h5>Commencer un Quizz </h5></div>
                <div class="m-5 text-center"><button type="button" class="btn btn-secondary btn-lg" onclick="window.location.href='/selector'">Go !</button></div>
            </div>

            <div class="col mr-5">

                <div class="col m-3 text-center border border-5 border-dark rounded" id="div_violet_darker">
                <div class="m2"><h5><br>Mes scores</h5><br></div>
                </div>
                <div class="mb-2 text-center">Vous devez d'abord vous connecter pour voir vos scores</div>
            </div>
        
        </div>
    </div>`}else{
        accueilPage=`<div class="container">
        <div class="row mt-3">
    
        
            <div class="col mr-5">

                <div class="col m-3 border border-5 border-dark rounded text-center" id="div_violet_darker">
                <div class="m2"><h5><br>Top Score</h5><br></div>
                </div>
                <div class="mb-2 text-center">Nathan 139</div>
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
    return (page.innerHTML = accueilPage);
};

export default AccueilPage;
