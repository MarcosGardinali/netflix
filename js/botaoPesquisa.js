let campoPesquisa = document.querySelector("#pesquisa");

let habilitaPesquisa = document.querySelector("#lupa");
console.log(habilitaPesquisa);

habilitaPesquisa.addEventListener("click", function(){
	if (habilitaPesquisa.click){
		setTimeout(function(){
			campoPesquisa.classList.remove("invisivel");
		}, 100)
		habilitaPesquisa.classList.add("invisivel");
	}else{
		campoPesquisa.classList.add("invisivel");
	}
});

document.querySelector("#btn").addEventListener("click", () => {
	document.body.classList.toggle("dark-mode")
});
