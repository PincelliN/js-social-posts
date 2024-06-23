const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


// variabile contenitore generale
const Container=document.getElementById("container");


//Condizione
for (let index = 0; index < posts.length; index++) {
    const element = posts[index];

    const ProfileImg = document.getElementsByClassName("profile-pic");

    if (element.author.image === null) {
    const Name = element.author.name;

    const FirstLetter = Name.split(" ");

    console.log(FirstLetter);

    const Letter = FirstLetter[0][0] + FirstLetter[1][0];

    console.log(Letter);

        
    
       element.author.image = Letter; 
    }
}
  
// per ogni elemento di post creo un elemento
posts.forEach((element) => {
  // variabile data
  let Data = element.created;

  // variabile Data Italian
  let NewData = Data.split("-").reverse().join("-");

  //Modifica Data
  element.created = NewData;

  Container.innerHTML += `
    <!-- post di esempio/template, da togliere/commentare e generare da JS -->
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src=${element.author.image} alt=${element.author.image}>                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${element.author.name}</div>
                        <div class="post-meta__time">${element.created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${element.content}</div>
            <div class="post__image">
                <img src=${element.media} alt=${element.author.name}>
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${element.id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="${element.id}" class="js-likes-counter">${element.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `;

  //Condizione
  for (let index = 0; index < posts.length; index++) {
    const element = posts[index];

    const ProfileImg = document.getElementsByClassName("profile-pic");

    if (element.author.image === null) {
      const Name = element.author.name;

      const FirstLetter = Name.split(" ");

      console.log(FirstLetter);

      const Letter = FirstLetter[0][0] + FirstLetter[1][0];

      console.log(Letter);

        
       
      element.author.image = Letter; 
    }
  }
});
    

// Array di tutti gli ancored
const ButtonLink = document.querySelectorAll("a");

//array vuoto dove andrò ad inserire i postid
let ArrayLike=[];

//per ogni Ancorade creo un evenlist
ButtonLink.forEach(button => {
    button.addEventListener("click",function (event) {
        event.preventDefault();
        //al click aggiungo una classe
       

         if (!button.classList.contains("like-button--liked")) {

            button.classList.add("like-button--liked");

         //recupero l'id del post attraverso il dataset
         let Id=button.dataset;

        //al click aggiungo il postid del bottone cliccato al ArrayLike
         ArrayLike.push(Id); 

         let PureID =Id.postid;
         //per determinare la posizione del oggetto nel array tolgo uno ad ogni id
        let Arrayposition = PureID -1;
        
       console.log(Id);


       // variabile in gui attraverso Id risalgo alla posizione dell array e rucupero la propieta likes e l'incremento di 1
         let Increment = posts[Arrayposition].likes + 1;

        console.log(Increment);
    //variabile che ad ogni click prende  l'elemento con PureId
      let BoxLike= document.getElementById(PureID);

      console.log(BoxLike);
        //stampo nella Variabile box attraverso innerHtml il risultato incrementato
      BoxLike.innerHTML=Increment;
         
         } else{
           //al click rimuovo una classe
           button.classList.remove("like-button--liked");

           //recupero l'id del post attraverso il dataset
           let Id = button.dataset;

           //al click rimuovo il postid del bottone cliccato al ArrayLike
           ArrayLike.pop(Id);

           let PureID = Id.postid;
           //per determinare la posizione del oggetto nel array tolgo uno ad ogni id
           let Arrayposition = PureID - 1;

           console.log(Id);

           // variabile in cui attraverso l' Id risalgo alla posizione dell array e rucupero la propieta likes
           let Decrement = posts[Arrayposition].likes ;

           console.log(Decrement);
           //variabile che ad ogni click prende  l'elemento con PureId
           let BoxLike = document.getElementById(PureID);

           console.log(BoxLike);
           //stampo nella Variabile box attraverso innerHtml il risultato originale
           BoxLike.innerHTML = Decrement;
         }  ;
       
         
         console.log(ArrayLike);
         console.log(button.classList);
        })
}); 

 
  






