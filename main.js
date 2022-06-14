// YOUTUBE
// #contents
// #primary
//SELECTORS
const primary = document.getElementById('primary');
const parent = primary.parentNode;

//REMOVE OFFENDING CONTENT
primary.remove();

//We chose to just inject a style sheet using our chrome extension manifest.
// const link = document.createElement('link');
// link.rel = 'stylesheet';
// link.type = 'text/css';
// link.href = chrome.extension.getURL('style.css');
// document.head.prepend(link);

//REPLACE WITH IMAGE
const image = document.createElement('img');
image.setAttribute('src', 'https://www.motorbiscuit.com/wp-content/uploads/2022/04/1994-Mazda-Miata.jpg');
image.setAttribute('class', 'image');
image.setAttribute('id', 'image');
parent.prepend(image);