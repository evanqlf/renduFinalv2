// fetch('https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/sneakers.json')
//   .then(response => response.json())
//   .then(data => {
//     let container = document.getElementById("product-container");

//     data.forEach(product => {
//       let card = document.createElement("div");
//       card.className = "carte";

//       card.innerHTML = `
//         <img src="${product.image}" alt="${product.title}" style="width: 100px; height: 100px; object-fit: contain;" />
//         <h3>${product.title}</h3>
//         <p>${product.price} €</p>
//       `;

//       container.appendChild(card);
//     }); 

//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Erreur lors du fetch :', error);
//   });


// document.getElementById("button").addEventListener("click", function() {
//     fetch("https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/sneakers.json")
//     .then(reponse => reponse.json())
//     .then(data =>{
//         let container = document.getElementById("product-container");
//         container.innerHTML= ""

//         data.array.forEach(product => {
//             let card= document.createElement("div");
//             card.className= "carte";

//             card.innerHTML=`
//             <img src="${product.image}" alt="${product.title}" style="width: 100px; height: 100px; object-fit: contain;" />
//             <h3>${product.title}</h3>
//             <p>${product.price} €</p>
//             `;



//             console.log(data);
//         });
//     })

// })



// let container = document.getElementById("product-container");

// function func1() {
//   const apisneakers = "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/";
//   fetch(apisneakers)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(`Données récupérées avec succès :`,data);
//   })
//   .catch(error => console.error('Erreur lors de la récupération des données :', error));

// };



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



//  contenair.appendChild(temoignages);
//  data.temoignages.forEach((temoins)=>{

//   let name = document.createElement("h2");
//   name.textContent = temoins.prenom;

//   let exp = document.createElement("h3");
//   exp.textContent = temoins.typeExperience;

//   let commentaires = document.createElement("p");
//   commentaires.textContent = temoins.commentaire;
// })