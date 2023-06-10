//Liste des identifiantes et mots de passe valides
let textBienvenue = document.getElementById("bienvenue");
let btnDeconnexion =  document.getElementById("Deconnexion");


let utilisateurs = [
    {username: "john__doe", email: "john.doe@example.com",password: "MotDePasse123!"},
    {username: "bernard__henry", email: "bernard.henry@example.com",password: "MotDePasse456!"},
    {username: "prince__arthur", email: "prince.arthur@example.com",password: "MotDePasse789!"},
];

//Créer une variable qui me permettra de vérifier si l'utilisateur est connecté
//si il est connecté alors la variable est vraie ,sinon elle est fausse 

let estConnecte = false;

btnDeconnexion.addEventListener("click", ()=>{
    Deconnexion();
})

//une fonction qui va vérifier les informations de connexion 
//elle va parcourir la liste des identifiants et mot de passe valides
//elle va comparer l'email et le mot de passe saisie par l'utilisateur avec les identifiants valides
//Si elle trouve un alors on connecte l'utilisateur en changeant la variable estConnecte à vrai
//Autrement on renvoie un message d'erreur 
function verifInformationsConnexion(email, password) {
    for (let i=0; i < utilisateurs.length; i++){
      if(utilisateurs[i].email === email && utilisateurs[i].password === password){
     estConnecte = true; //les informations sont validées
     wrapper.classList.remove('active-popup');
     textBienvenue.innerHTML = "bienvenue à toi," + utilisateurs[i].username;
     btnDeconnexion.style = "display: initial;";
     btnConnecter.style = "display:none;";
      }  
    }

    return false;
}

function Deconnexion(){
    estConnecte = false;
    textBienvenue.innerHTML = " ";
    btnDeconnexion.style = "display: none;";
    btnConnecter.style = "display:initial;";
}


// ------------------------ 

const emailUtilisateur = document.getElementById("emailConnexion");
const passwordUtilisateur = document.getElementById("mdpConnexion");
const btnConnexion = document.getElementById("btnSeConnecter");

btnConnexion.addEventListener("click", () => {
 verifInformationsConnexion(emailUtilisateur.value, passwordUtilisateur.value);

})


