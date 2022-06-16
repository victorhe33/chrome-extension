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

//Collect image IDs from API
const unsplash = fetch('https://picsum.photos/list')
  .then((response) => response.json())
  .then((images) => {
    return images;
  });

//place random image into page, remove old content
const summonImage = async () => {
  const a = await unsplash;
  const randomNum = Math.floor(a.length * Math.random());
  const randomID = a[randomNum].id;
  const chosenOne = document.createElement('img');
  chosenOne.setAttribute('src', 'https://unsplash.it/1200/800?image=' + `${randomID}`);
  chosenOne.setAttribute('id', 'image');

  text.remove();
  const oldOne = document.querySelector('#image');
  oldOne.remove();

  newContainer.appendChild(chosenOne);
};

//EVENT LISTENER
newContainer.addEventListener('click', summonImage);
