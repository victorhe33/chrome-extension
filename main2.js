// AMAZON
// #pageContent


const primary = document.getElementById('pageContent');
const rhf = document.getElementById('rhf');
const parent = primary.parentNode;

//SET CONTAINER CLASS FOR STYLING & insert
const newContainer = document.createElement('div');
newContainer.className = 'container';
parent.insertBefore(newContainer, primary);

//REMOVE OFFENDING ELEMENTS
primary.remove();
rhf.remove();



//REPLACE WITH IMAGE
const image = document.createElement('img');
image.setAttribute('src', 'https://www.motorbiscuit.com/wp-content/uploads/2022/04/1994-Mazda-Miata.jpg');
image.className = 'image';
image.setAttribute('id', 'image');
newContainer.prepend(image);

//Add text div
const text = document.createElement('div');
text.className = 'text';
text.innerText = "Get Miata Here!";
newContainer.appendChild(text);