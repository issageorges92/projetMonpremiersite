let nouvelutilisateur = {username : "", email : "", password : ""}

let nouveauemail = document.getElementById("nouveauemail");
let nouveaunomutilisateur = document.getElementById("nouveaunomutilisateur");
let nouveaumdp = document.getElementById("nouveaumdp");

let btnInscrire = document.getElementById("btnInscrire")

btnInscrire.addEventListener("click",()=>{
    creationnouvelUtilisateur(nouveaunomutilisateur.value, nouveauemail.value, nouveaumdp.value);
})

function creationnouvelUtilisateur(nomUtilisateur,email,mdp){
    if(nomUtilisateur != "" && email != "" && mdp != ""){

    nouvelutilisateur.username = nomUtilisateur;
    nouvelutilisateur.email= email;
    nouvelutilisateur.password = mdp;
    wrapper.classList.remove('active-popup');

    utilisateurs.push(nouvelutilisateur);

    console.log(utilisateurs)
    }
    else{
        alert("merci de remplir le formulaire correctement");
    }
}