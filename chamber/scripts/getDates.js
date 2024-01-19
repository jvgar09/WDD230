// let nLastModif = Date.parse(document.lastModified);
console.log(document.lastModified)

// document.getElementById('lastModified')
document.querySelector('#lastModified').innerHTML = document.lastModified;



// Store the selected elements that we are going to use. 
const navElement = document.querySelector('#nav');
const hambutton = document.querySelector('#menu');


// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	navElement.classList.toggle('hide');
	hambutton.classList.toggle('show');
});