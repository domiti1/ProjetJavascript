import {getUserSessionData} from "../utils/session.js";

const AccueilPage = () => {
    document.querySelector("#page_home").classList.remove('full-size');
    let page = document.querySelector("#page");
    let user = getUserSessionData();  
    let accueilPage;
    if (user) {
        accueilPage =`<div class="container">
        <div class="row mt-3">
    
        
            <div class="col mr-5">

                <div class="col border m-3 text-center" id="div_violet_darker">
                <div class="m2"><h5><br>Top Score</h5><br></div>
                </div>
                <div class="mb-2 text-center">Nathan 139</div>
                <div class="mb-2 text-center">Didier 130</div>
                <div class="mb-2 text-center">Arnaud 129</div>
            </div>

            <div class="col bg-light border border-5 mt-5">
                <div class="m-5"><h5>Vous devez vous connecter pour commencer un Quizz</h5></div>
                <div class="m-5 text-center"><a href="/login">Se connecter</a></div>
            </div>

            <div class="col mr-5">

                <div class="col alert-success border m-3 text-center">
                <div class="m2"><h5><br>Mes scores</h5><br></div>
                </div>
                <div class="mb-2 text-center">Vous devez d'abord vous connecter</div>
            </div>
        
        </div>
    </div>`}else{
        accueilPage=`<div class="container">
        <div class="row mt-3">
    
        
            <div class="col mr-5">

                <div class="col m-3 text-center" id="div_violet_darker">
                <div class="m2"><h5><br>Top Score</h5><br></div>
                </div>
                <div class="mb-2 text-center">Nathan 139</div>
                <div class="mb-2 text-center">Didier 130</div>
                <div class="mb-2 text-center">Arnaud 129</div>
            </div>

            <div class="col mt-5" id="div_violet_smoother">
                <div class="m-5"><h5>Vous devez vous connecter pour commencer un Quizz</h5></div>
                <div class="m-5 text-center"><a href="/login">Se connecter</a></div>
            </div>

            <div class="col mr-5">

                <div class="col m-3 text-center" id="div_violet_darker">
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
