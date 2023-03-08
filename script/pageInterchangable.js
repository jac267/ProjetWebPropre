if (localStorage.nombre == null) {
  localStorage.nombre = 0;
  let emailist = [];
  localStorage.email = emailist;
}

function showCarnetAdresse() {
  carnet = document.getElementById("carnet-adresse");
  composer = document.getElementById("composer-couriel");
   
  ajouterAdresse = document.getElementById("addAdresse")
  modifierAdresse = document.getElementById("modAdresse")
  supprimerAdresse = document.getElementById("supAdresse")

  ajouterAdresse.style.display = "grid";
  modifierAdresse.style.display = "grid";
  supprimerAdresse.style.display = "grid";

  carnet.style.display = "grid";
  composer.style.display = "none";
}

function showComposer(name) {
  carnet = document.getElementById("carnet-adresse");
  composer = document.getElementById("composer-couriel");
  button = document.getElementById("envoitbutton");

  carnet.style.display = "none";
  composer.style.display = "grid";
  buttonenvoi.style.display = "grid";
  contactenvoi.style.display ="grid";
  if (typeof name === 'undefined' ){name = ""}
    else{name = document.getElementById("destinataire-id").value +";"+ name}
  console.log(name)
  var test = name
  document.getElementById("title-id").value = "";
  document.getElementById("destinataire-id").value = test;
  document.getElementById("content-id").value = "";

  texttitre.readOnly = false;
  textdest.readOnly = false;
  textcontenu.readOnly = false;
}

function contactimport(){
  carnet = document.getElementById("carnet-adresse");
  composer = document.getElementById("composer-couriel");

  ajouterAdresse = document.getElementById("addAdresse")
  modifierAdresse = document.getElementById("modAdresse")
  supprimerAdresse = document.getElementById("supAdresse")

  carnet.style.display = "grid";
  composer.style.display = "none";
  
  ajouterAdresse.style.display = "none";
  modifierAdresse.style.display = "none";
  supprimerAdresse.style.display = "none";
}