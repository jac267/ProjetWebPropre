/* fonction qui va créer les popUp lors de l'envoit d'un courriel, ou de l'échec de celui-ci*/
function Spawn(){
    const popUpEnvoi = document.getElementById("wraper-popup-envoi")
    popUpEnvoi.style.display = "initial"   
    fermerconfirmation()
}

/* fonction timer qui permet a l'usager de lire le message avant de charger la prochaine fonction */
function fermerconfirmation(){
    setTimeout(() => Restore(),3500)
    
}
/* fonction qui va restaurer la page en retirant le popUp*/
function Restore(){
    const popUpEnvoi = document.getElementById("wraper-popup-envoi")
    popUpEnvoi.style.display = "none"
}