let selector = 
`<div class="container">
        <div class="row mt-3">
    
            
            <div class="col">
                <div class="border border-5 border-secondary rounded" id="div_violet_smoother">
                    <div class="m-3">
                        <h5>Veuillez selectionner un thèmes </h5>
                    </div>
                    <div class="m-3">
                        <h6>Le Quizz commencera dès qu'un thème sera selectionné</h6>
                    </div>
                </div>



                <div class="mt-2">
                    <div class="form-check">
                       
                       
                            <div class="m-2">
                            <button type="button" class="btn btn-secondary btn-lg" id="div_orange_smoother" onclick="window.location.href='/quizz/theme=anime'">Anime/Manga</button>
                            </div>
                 
                
                       
                    </div>
                </div>

                <div class="mt-2">
                    <div class="form-check">
                       
                       
                            <div class="m-2">
                            <button type="button" class="btn btn-secondary btn-lg" id="div_vert" onclick="window.location.href='/quizz/theme=geographie'">Géographie</button>
                            </div>
                 
                
                       
                    </div>
                </div>

                <div class="mt-2">
                    <div class="form-check">
                       
                       
                            <div class="m-2">
                            <button type="button" class="btn btn-secondary btn-lg" id="div_violet" onclick="window.location.href='/quizz/theme=histoire'">Histoire</button>
                            </div>
                 
                
                       
                    </div>
                </div>

                <div class="mt-2">
                <div class="form-check">
                   
                   
                        <div class="m-2">
                        <button type="button" class="btn btn-secondary btn-lg" id="div_blue" onclick="window.location.href='/quizz/theme=art'">Art/Littérature</button>
                        </div>
             
            
                   
                </div>

                <div class="form-check">
                   
                   
                   <div class="m-2">
                   <button type="button" class="btn btn-secondary btn-lg" id="div_grey" onclick="window.location.href='/quizz/theme=techno'">Technologie</button>
                   </div>
        
       
              
                </div>
            </div>
            <div class="form-check">
                   
                   
                   <div class="m-2">
                   <button type="button" class="btn btn-secondary btn-lg" id="div_red" onclick="window.location.href='/quizz/theme=science'">Sciences</button>
                   </div>
        
       
              
                </div>
                <div class="form-check">
                   
                   
                   <div class="m-2">
                   <button type="button" class="btn btn-secondary btn-lg" id="div_brown" onclick="window.location.href='/quizz/theme=musique'">Musique</button>
                   </div>
        
       
              
                </div>


            </div>
                
            
                
                    
                
                
            </div>

        </div>
   
    
   `;



let page = document.querySelector("#page");

const Selector = () => {
  document.querySelector("#page_home").classList.remove('full-size');
  let page = document.querySelector("#page");
  return (page.innerHTML = selector);
 
};

export default Selector;
