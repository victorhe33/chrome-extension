// YOUTUBE
// #contents
// #primary
//SELECTORS
const primary = document.getElementById('primary');
const parent = primary.parentNode;
const head = document.querySelector('head');

//REMOVE OFFENDING CONTENT
primary.remove();

//LINK CSS ?? no path to link from...
// const link = document.createElement('link');
// link.setAttribute('rel', 'stylesheet');
// link.setAttribute('href', './style.css');
// head.prepend(link);

//REPLACE WITH IMAGE
const image = document.createElement('img');
image.setAttribute('src', 'https://www.motorbiscuit.com/wp-content/uploads/2022/04/1994-Mazda-Miata.jpg');
image.setAttribute('class', 'image');
image.setAttribute('id', 'image');
parent.prepend(image);