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

function loadinit() {
  const nombre = localStorage.nombre;
  console.log(nombre);
  for (var i = 0; i < nombre; i++) {
    emailcreate(i);
  }
}

function emailcreate(number) {
  let emailload = JSON.parse(localStorage.getItem(number));
  //console.log(number)
  const card = userCardTemplate.content.cloneNode(true).children[0];
  const header = card.querySelector("[data-header]");
  const body = card.querySelector("[data-body]");
  const content = card.querySelector("[data-content]");
  header.textContent = emailload.titre;
  body.textContent = emailload.destinataire;
  content.textContent = emailload.contenu;
  userCardContainer.append(card);
  return {
    name: header.textContent,
    email: body.textContent,
    content: content.textContent,
    element: card,
  };
}

function lireemail(card) {
  carnet = document.getElementById("carnet-adresse");
  composer = document.getElementById("composer-couriel");
  button = document.getElementById("envoitbutton");
  texttitre = document.getElementById("title-id");
  textdest = document.getElementById("destinataire-id");
  textcontenu = document.getElementById("content-id");

  const title_sender = card.querySelector("[data-header]").textContent;
  const sender = card.querySelector("[data-body]").textContent;
  const content_sender = card.querySelector("[data-content]").textContent;

  carnet.style.display = "none";
  composer.style.display = "grid";
  buttonenvoi.style.display = "none";
  contactenvoi.style.display ="none";

  texttitre.readOnly = true;
  textdest.readOnly = true;
  textcontenu.readOnly = true;

  texttitre.value = title_sender;
  textdest.value = "De: " + sender;
  textcontenu.value = content_sender;
}
