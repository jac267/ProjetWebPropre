if (localStorage.nombre == null) {
  localStorage.nombre = 0;
  let emailist = [];
  localStorage.email = emailist;
}

function showCarnetAdresse() {
  carnet = document.getElementById("carnet-adresse");
  composer = document.getElementById("composer-couriel");

  carnet.style.display = "grid";
  composer.style.display = "none";
}

function showComposer() {
  carnet = document.getElementById("carnet-adresse");
  composer = document.getElementById("composer-couriel");
  button = document.getElementById("envoitbutton")

  carnet.style.display = "none";
  composer.style.display = "grid";
  button.style.display = "grid"
}
