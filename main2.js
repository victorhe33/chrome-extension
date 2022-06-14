// AMAZON
// #pageContent


const primary = document.getElementById('pageContent');
const rhf = document.getElementById('rhf');
const newContainer = document.createElement('div');
const parent = primary.parentNode;
parent.insertBefore(newContainer, primary);
// console.log('hello', parent);

primary.remove();
rhf.remove();

//REPLACE WITH IMAGE
const image = document.createElement('img');
image.setAttribute('src', 'https://www.motorbiscuit.com/wp-content/uploads/2022/04/1994-Mazda-Miata.jpg');
image.setAttribute('style', 'width: 400px;');
image.setAttribute('id', 'image');
newContainer.prepend(image);

//Add text div
const text = document.createElement('div');
text.class = 'text';
text.innerText = "Get Miata Here!";
newContainer.appendChild(text);