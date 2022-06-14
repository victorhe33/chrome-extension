// YOUTUBE
// #contents
// #primary
//SELECTORS
const primary = document.getElementById('primary');
const parent = primary.parentNode;

//Create Holding container, set parent class attribute for styling purposes
const newContainer = document.createElement('div');
newContainer.className = 'container';
parent.insertBefore(newContainer, primary);

//REMOVE OFFENDING CONTENT
primary.remove();

//REPLACE WITH IMAGE
const image = document.createElement('img');
image.setAttribute('src', 'https://www.motorbiscuit.com/wp-content/uploads/2022/04/1994-Mazda-Miata.jpg');
image.setAttribute('class', 'image');
image.setAttribute('id', 'image');
// newContainer.prepend(image);

//Add text div
const text = document.createElement('div');
text.className = 'text';
text.innerText = "Get Miata Here!";
// newContainer.appendChild(text);


setTimeout(function() {
  newContainer.prepend(image);
  newContainer.appendChild(text);
}, 3000);

newContainer.addEventListener('click', newContainer.remove);
