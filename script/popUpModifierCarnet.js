function open_new() {
  let popUp = document.getElementById("wraper-popup-modifier-carnet");
  popUp.style.display = "block";
}

function open_mod(index) {
  let carnetDAdresse = JSON.parse(localStorage.getItem("carnetDAdresse"))
    .valeur[index];

  document.getElementById("contact-name-field").value = carnetDAdresse.Name;
  document.getElementById("contact-public-key-field").value =
    carnetDAdresse.PublicKey;

  let popUp = document.getElementById("wraper-popup-modifier-carnet");
  popUp.style.display = "block";
}

function fermer() {
  let popUp = document.getElementById("wraper-popup-modifier-carnet");
  popUp.style.display = "none";

  document.getElementById("contact-name-field").value = "";
  document.getElementById("contact-public-key-field").value = "";
}

function sauvegarder() {
  let localStorageSize = 0;
  let carnetDAdresse = JSON.parse(localStorage.getItem("carnetDAdresse"));

  if (carnetDAdresse != null) {
    localStorageSize = carnetDAdresse.valeur.length;
  }

  let dict_contact = {
    Name: document.getElementById("contact-name-field").value,
    PublicKey: document.getElementById("contact-public-key-field").value,
  };

  if (localStorageSize == 0) {
    localStorage.setItem(
      "carnetDAdresse",
      '{"valeur":[' + JSON.stringify(dict_contact) + "]}"
    );
  } else {
    carnetDAdresse.valeur[localStorageSize] = dict_contact;
    localStorage.setItem("carnetDAdresse", JSON.stringify(carnetDAdresse));
  }
  refreshList();
  fermer();
}
