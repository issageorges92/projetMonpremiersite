const wrapper = document.querySelector(".wrapper");
const lienConnexion = document.querySelector(".lien-connexion");
const lienCreationcompte = document.querySelector(".lien-creation-compte");
const btnConnecter = document.querySelector("#seConnecter");
const iconFermer = document.querySelector(".icon-fermer");

btnConnecter.addEventListener("click",()=> {
    wrapper.classList.add("active-popup")
});

iconFermer.addEventListener("click", ()=> {
    wrapper.classList.remove('active-popup');
})

lienCreationcompte.addEventListener("click",() =>{
    wrapper.classList.add("active")
});

lienConnexion.addEventListener("click",() =>{
   wrapper.classList.remove("active")
})

