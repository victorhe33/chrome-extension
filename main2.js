// AMAZON
// #pageContent


const primary = document.getElementById('pageContent');
const rhf = document.getElementById('rhf');
const parent = primary.parentNode;

primary.remove();
rhf.remove();

//REPLACE WITH IMAGE
const image = document.createElement('img');
image.setAttribute('src', 'https://www.motorbiscuit.com/wp-content/uploads/2022/04/1994-Mazda-Miata.jpg');
image.setAttribute('style', 'width: 400px;');
image.setAttribute('id', 'image');
parent.prepend(image);