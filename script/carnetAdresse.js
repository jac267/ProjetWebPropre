function updateList(selected) {
  myElement = document.getElementsByClassName("carnet-adresse-list")[0];

  for (const child of myElement.children[0].children) {
    if (child === selected) {
      child.className = "selected";
    } else {
      child.className = "";
    }
  }
}
