let album = [
    { src : "img/1.jpg", msg : "aaa" },
    { src : "img/2.jpg", msg : "bbb" },
    { src : "img/3.jpg", msg : "ccc" },
    { src : "img/4.jpg", msg : "ddd" },
    { src : "img/5.jpg", msg : "eee" }
];

let elementPhoto = document.createElement('img');
elementPhoto.setAttribute('src', album[0].src);
elementPhoto.setAttribute('alt', album[0].msg);

let elementMassage = document.createElement('p');
elementMassage.innerText = elementPhoto.alt;

let insertionMainFlame = document.querySelector('.gallery .first');
insertionMainFlame.insertBefore(elementPhoto, null);
insertionMainFlame.insertBefore(elementMassage, null);


let insertionThumbImage = document.querySelector('.gallery .thumb');

for (let i=0; i<album.length; i++) {
    let elementThumbImage = document.createElement('img');
    elementThumbImage.setAttribute('src', album[i].src );
    elementThumbImage.setAttribute('alt', album[i].alt );

    insertionThumbImage.insertBefore(elementThumbImage, null);
}

insertionThumbImage.addEventListener('click', function (event) {
   if (event.target.src) {
       elementPhoto.src = event.target.src;
       elementMassage.innerText = event.target.alt;
   }
});
