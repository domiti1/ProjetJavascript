let navBar = document.querySelector("#navBar");
import {getUserSessionData} from "../utils/session.js";
// destructuring assignment
const Navbar = () => {
  let navbar;
  let user = getUserSessionData();    
  if (user) {
    navbar = `<nav class="navbar navbar-expand-lg navbar-light navBar_colors mb-2" id="navBar">
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link" href="/" class="right">Accueil</a>
      <a class="nav-item nav-link" href="#" class="right">Logout ${user.username}</a>
      
    </div>
  </div>
  </nav>`;
  } else {
    navbar = `<nav class="navbar navbar-expand-lg navbar-light bg-light mb-2" id="navBar">
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        
       
        <a class="nav-item nav-link" href="/" class="right">Accueil</a>
        <a class="nav-item nav-link" href="/login" class="right">login</a>
        <a class="nav-item nav-link" href="/login" class="right">register</a>
        
      </div>
    </div>
    </nav>`;
  }

  return (navBar.innerHTML = navbar);
};

export default Navbar;
