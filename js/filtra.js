let destaques = document.querySelectorAll(".itemDestaque");
console.log(destaques);

campoPesquisa.addEventListener("input", function(){

	if (this.value.length > 0) {
		for(let i = 0; i < destaques.length; i++){
			let destaque = destaques[i];
			let h1Titulo = destaque.querySelector(".titulo_destaque");
			let titulo = h1Titulo.textContent;
			let expressao = new RegExp(this.value, "i");
			if (!expressao.test(titulo)){
				destaque.classList.add("invisivel")
			}else{
				destaque.classList.remove("invisivel");
			}
		}
	}else{
		for(let i = 0; i < destaques.length; i++){
			let destaque = destaques[i]
			destaque.classList.remove("invisivel");
		}
	}
})