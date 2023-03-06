if (localStorage.nombre==null){
    localStorage.nombre=0;
    let emailist= [];
    localStorage.email=emailist;
  }


function send(){
    
    
    var titre_txt =document.getElementById("title-id").value;
    var receiver_txt =document.getElementById("destinataire-id").value;
    var content_txt =document.getElementById("content-id").value;

    if(titre_txt.length == 0){alert("Veiller rajouter un titre")}
    if(receiver_txt.length == 0){alert("Veiller rajouter un destinataire")}
    if(content_txt.length == 0){alert("Veiller rajouter un message")}
    
    if(titre_txt.length && receiver_txt.length && content_txt.length != 0){

        document.getElementById("title-id").value = "";
        document.getElementById("destinataire-id").value = "";
        document.getElementById("content-id").value ="";
        alert("Message envoyé avec succès");
        
        let email ={};
        email.titre = titre_txt
        email.destinataire = receiver_txt
        email.contenu = content_txt
        let emailstr = JSON.stringify(email);
        console.log(emailstr)
        
        let value = localStorage.nombre;

        localStorage.setItem(value,emailstr)
        value++
        localStorage.nombre=value
        let displaytest = JSON.parse(localStorage.getItem(1))
        console.log(displaytest)
        console.log(displaytest.titre)
    
        loadnew()
    }

}

function loadnew(){
    const nombre = localStorage.nombre
    let emailload = JSON.parse(localStorage.getItem(nombre-1))

    const card = userCardTemplate.content.cloneNode(true).children[0];
    const header = card.querySelector("[data-header]");
    const body = card.querySelector("[data-body]");
    header.textContent = emailload.titre;
    body.textContent = emailload.destinataire;
    userCardContainer.append(card);
    return { name: header.textContent, email: body.textContent, element: card };
}


