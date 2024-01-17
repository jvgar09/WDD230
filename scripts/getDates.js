// Store the selected elements that we are going to use. 
const navElement = document.querySelector('#nav');
const hambutton = document.querySelector('#menu');


// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	navElement.classList.toggle('hide');
	hambutton.classList.toggle('show');
});

// let nLastModif = Date.parse(document.lastModified);
console.log(document.lastModified)

// document.getElementById('lastModified')
document.querySelector('#lastModified').innerHTML = document.lastModified;




document.addEventListener('DOMContentLoaded', function () {
    const modeToggleBtn = document.getElementById('modeToggleBtn');
    const body = document.body;

    modeToggleBtn.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });
});


//const modeButton = document.querySelector("#mode");
//const main = document.querySelector("main");

//modeButton.addEventListener("click", () => {
	//if (modeButton.textContent.includes("🕶️")) {
		//main.style.background = "#000";
		//main.style.color = "#fff";
		//modeButton.textContent = "";
	//} //else {
		//main.style.background = "#eee";
		//main.style.color = "#000";
		//modeButton.textContent = "🕶️";
	//}
//});
