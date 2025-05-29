function fetchsneaks(lien) {
  fetch(lien)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let contenair = document.getElementById("product-container");
      let nav = document.getElementById("nav");
nav.innerHTML = `
<h2>${data.nomCommercial}</h2>
<p>${data.phraseAccroche}</p>
<button>${data.texteAppelAction}</button>
`
      contenair.appendChild(nav);
      data.produits.forEach((activiter) => {

        let card = document.createElement("div");
        card.classList.add("carte");

        let name = document.createElement("h3");
        name.textContent = activiter.nom;

        let description = document.createElement("p");
        description.textContent = activiter.description;

        let image = document.createElement("img");
        image.src = activiter["image-url"];

        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(image);
        contenair.appendChild(card);


      



        let divCommentaire = document.getElementById("sectTemoignages");
        data.temoignages.forEach(element => {

          sectTemoignages.innerHTML += `
         <div>
           <h2>${element.prenom}</h2>
          <h3>${element.typeExperience}</h3>
          <p>${element.commentaire}</p>
          <h3>${element.note}</h3>
          </div>`;
        });
      

      });
    });
}
fetchsneaks(
  "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/sneakers.json"
);