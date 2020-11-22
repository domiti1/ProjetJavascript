let quizz = `
<p>Bievenue sur culture G</p><br>
<p>Cliquez pour continuer</p></a>
`;
let page = document.querySelector("#page");

const Quizz = () => {
  document.querySelector("#page_home").classList.remove('full-size');
  let page = document.querySelector("#page");
  return (page.innerHTML = quizz);
};

export default Quizz;
