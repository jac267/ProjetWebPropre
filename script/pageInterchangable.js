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

function showComposer(name) {
  carnet = document.getElementById("carnet-adresse");
  composer = document.getElementById("composer-couriel");
  button = document.getElementById("envoitbutton");

  carnet.style.display = "none";
  composer.style.display = "grid";
  buttonenvoi.style.display = "centered";
  if (typeof name === 'undefined' ){name = ""}
    else{name = document.getElementById("destinataire-id").value +";"+ name}
  console.log(name)
  let test = name
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


  carnet.style.display = "grid";
  composer.style.display = "none";
  
}