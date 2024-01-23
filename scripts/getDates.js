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

// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.
