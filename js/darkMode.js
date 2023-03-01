const botaoDarkMode = document.querySelector("#btn");

botaoDarkMode.addEventListener("click", () => {
	document.body.classList.toggle("dark-mode")
});
console.log("Dark Mode Sincronizado!!")