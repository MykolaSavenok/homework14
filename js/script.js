'use strict';

function getImage() {
   const random = Math.floor(Math.random() * 4) + 1;
   const imageFolder = '/image/'
   const imageExtension = '.png';
   const imagePath = imageFolder + random + imageExtension;
   return imagePath;
}

document.querySelector(".image").src = getImage();

const randomImage = getImage();
console.log(randomImage);
