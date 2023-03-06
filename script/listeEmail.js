const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");

let users = [];


searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  users.forEach((user) => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value);
    user.element.classList.toggle("hide", !isVisible);
  });
});


/*
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    users = data.map((user) => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header]");
      const body = card.querySelector("[data-body]");
      header.textContent = user.name;
      body.textContent = user.email;
      userCardContainer.append(card);
      return { name: user.name, email: user.email, element: card };
    });
  }); */

loadinit();



function addEmail() {
  var buttonList = document.getElementById("button-list");
  var newButton = document.createElement("li");
  newButton.innerHTML = `<li>
  <div class="email-card" onclick="addButton()">
    <div class="email">s</div>
    <div class="titre">d</div>
    <div class="contact">s</div>
    <div class="email-content"></div>
  </div>
</li>`;
  buttonList.appendChild(newButton);
}
function temp() {
  alert("Va ouvrir le courriel");
}

function loadinit(){
  const nombre = localStorage.nombre
  console.log(nombre)
  for (var i=0;i<nombre;i++){
    emailcreate(i);
  }
}

function emailcreate(number){
  let emailload = JSON.parse(localStorage.getItem(number))
    //console.log(number)
    const card = userCardTemplate.content.cloneNode(true).children[0];
    const header = card.querySelector("[data-header]");
    const body = card.querySelector("[data-body]");
    header.textContent = emailload.titre;
    body.textContent = emailload.destinataire;
    userCardContainer.append(card);
    return { name: header.textContent, email: body.textContent, element: card };
}

function lireemail(){
  carnet = document.getElementById("carnet-adresse");
  composer = document.getElementById("composer-couriel");
  button = document.getElementById("envoitbutton")
  

  carnet.style.display = "none";
  composer.style.display = "grid";
  button.style.display = "none"

  document.getElementById("title-id").value = "";
  document.getElementById("destinataire-id").value = "";
  document.getElementById("content-id").value ="";
}