function updateList(selected) {
  myElement = document.getElementById("carnet-adresse-list");

  for (const child of myElement.children[0].children) {
    if (child === selected) {
      if (child.className === "selected") {
        child.className = "";
      } else {
        child.className = "selected";
      }
    } else {
      child.className = "";
    }
  }
}

function refreshList() {
  let carnetDAdresse = JSON.parse(localStorage.getItem("carnetDAdresse"));
  let autoCompletContent = document.getElementById("carnet-adresse-search-bar")
    .children[0].value;

  if (carnetDAdresse != null) {
    myElement = document.getElementById("carnet-adresse-list");
    myElement = myElement.children[0];
    myElement.textContent = "";

    for (let i = 0; i < carnetDAdresse.valeur.length; i++) {
      const node = document.createElement("li");

      if (carnetDAdresse["valeur"][i].Name.search(autoCompletContent) != -1) {
        node.innerHTML = carnetDAdresse["valeur"][i].Name;
        node.setAttribute("onclick", "updateList(this)");
        node.setAttribute("ondblclick", "open_mod(" + i + ")");
        myElement.appendChild(node);
      }
    }
  }
}

function triggerMod() {
  myElement = document.getElementsByClassName("selected")[0];
  var event = new MouseEvent("dblclick", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  myElement.dispatchEvent(event);
}

function remove() {
  myElement = document.getElementsByClassName("selected")[0];
  const index = parseInt(
    String(myElement.attributes.ondblclick.textContent)
      .replace("open_mod(", "")
      .replace(")", "")
  );

  console.log(index);
  let carnetDAdresse = JSON.parse(localStorage.getItem("carnetDAdresse"));

  carnetDAdresse.valeur.splice(index, 1);

  localStorage.setItem("carnetDAdresse", JSON.stringify(carnetDAdresse));
  refreshList();
}
