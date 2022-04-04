function escolherprato (escolha) {
    
   const clique = document.querySelector("." + escolha);
   const clicado = document.querySelector(".selecionada");
   if (clicado !== null) {
       clicado.classList.remove("selecionada");
   }   
   clique.classList.toggle("selecionada");
}
function escolherbebida (segundaescolha) {
    
    const segundoclique = document.querySelector("." + segundaescolha);
    const segundoclicado = document.querySelector(".segundaselecionada");
    if (segundoclicado !== null) {
        segundoclicado.classList.remove("segundaselecionada");
    }   
    segundoclique.classList.toggle("segundaselecionada");
}
function escolhersobremesa (terceiraescolha) {
    
    const terceiroclique = document.querySelector("." + terceiraescolha);
    const terceiroclicado = document.querySelector(".terceiraselecionada");
    if (terceiroclicado !== null) {
        terceiroclicado.classList.remove("terceiraselecionada");
    }   
    terceiroclique.classList.toggle("terceiraselecionada");
 }