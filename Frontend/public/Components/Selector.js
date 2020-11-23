let selector = 
`<div class="container">
        <div class="row mt-3">
    
        
            <div class="col">
                <div class="border border-5 border-secondary rounded" id="div_violet_smoother">
                    <div class="m-3">
                        <h5>Veuillez selectionner vos thèmes </h5>
                    </div>
                </div>



                <div class="mt-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="anime" id="defaultCheck1">
                        <div class="border border-5 border-secondary rounded" id="div_orange_smoother">
                            <div class="m-2">
                                <h5>Anime/Manga</h5>
                            </div>
                 
                
                        </div>
                    </div>
                </div>
                <div class="mt-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="geographie" id="defaultCheck1">
                        <div class="border border-5 border-secondary rounded" id="div_vert">
                            <div class="m-2">
                                <h5>Géographie</h5>
                            </div>
                 
                
                        </div>
                    </div>
                </div>
                <div class="mt-2">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="histoire" id="defaultCheck1">
                    <div class="border border-5 border-secondary rounded" id="div_violet">
                        <div class="m-2">
                            <h5>Histoire</h5>
                        </div>
             
            
                    </div>
                </div>

                <div class="mt-2">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="art" id="defaultCheck1">
                    <div class="border border-5 border-secondary rounded" id="div_blue">
                        <div class="m-2">
                            <h5>Art/Littérature</h5>
                        </div>
             
            
                    </div>
                </div>

                <div class="mt-2">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="technologie" id="defaultCheck1">
                    <div class="border border-5 border-secondary rounded" id="div_grey">
                        <div class="m-2">
                            <h5>Technologie</h5>
                        </div>
             
            
                    </div>
                </div>

                <div class="mt-2">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="science" id="defaultCheck1">
                    <div class="border border-5 border-secondary rounded" id="div_red">
                        <div class="m-2">
                            <h5>Sciences</h5>
                        </div>
             
            
                    </div>
                </div>

                <div class="mt-2">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="musique" id="defaultCheck1">
                    <div class="border border-5 border-secondary rounded" id="div_brown">
                        <div class="m-2">
                            <h5>Musique</h5>
                        </div>
             
            
                    </div>
                </div>

                <div class="m-5 text-center"><button type="button" class="btn btn-secondary btn-lg" onclick="window.location.href='/login'">Tester ma culture G</button></div>
                </div>


            </div>
                
                
                
                    
                
                
            </div>

        </div>
    </div>`;
let page = document.querySelector("#page");

const Selector = () => {
  document.querySelector("#page_home").classList.remove('full-size');
  let page = document.querySelector("#page");
  return (page.innerHTML = selector);
};

export default Selector;
