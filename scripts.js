function escolherprato (escolha) {
    
   const clique = document.querySelector(".caixinha" + escolha);
   const clicado = document.querySelector(".selecionada");
   
   if (clicado !== null) {
       clicado.classList.remove("selecionada");
       
   }   
   clique.classList.toggle("selecionada");
   
   const verifique = document.querySelector(".v" + escolha);
   const verificado = document.querySelector(".ligado");
   
   if (verificado !== null) {
       verificado.classList.remove("ligado");
   }
   verifique.classList.toggle("ligado");
   
}
function escolherbebida (segundaescolha) {
    
    const segundoclique = document.querySelector(".caixinha" + segundaescolha);
    const segundoclicado = document.querySelector(".segundaselecionada");
    if (segundoclicado !== null) {
        segundoclicado.classList.remove("segundaselecionada");
    }   
    segundoclique.classList.toggle("segundaselecionada");

    clique.classList.toggle("selecionada");
   
    const segundoverifique = document.querySelector(".v" + segundaescolha);
    const segundoverificado = document.querySelector(".segundoligado");
    
    if (segundoverificado !== null) {
        segundoverificado.classList.remove("segundoligado");
    }
    segundoverifique.classList.toggle("segundoligado");
   
}
function escolhersobremesa (terceiraescolha) {
    
    const terceiroclique = document.querySelector(".caixinha" + terceiraescolha);
    const terceiroclicado = document.querySelector(".terceiraselecionada");
    if (terceiroclicado !== null) {
        terceiroclicado.classList.remove("terceiraselecionada");
    }   
    terceiroclique.classList.toggle("terceiraselecionada");

    const terceiroverifique = document.querySelector(".v" + terceiraescolha);
   const terceiroverificado = document.querySelector(".terceiroligado");
   
   if (terceiroverificado !== null) {
       terceiroverificado.classList.remove("terceiroligado");
   }
   terceiroverifique.classList.toggle("terceiroligado");
 }