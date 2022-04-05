let contadorum = 0;
let contadordois = 0;
let contadortres = 0;
let finalizador = document.querySelector(".botao-finalizar");
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
   if (contadorum < 1) { contadorum ++ };
   let contador = contadorum + contadordois + contadortres;
   if (contador == 3) {
    
    finalizador.classList.add("ligar");
   }
   
   
   
   
}
function escolherbebida (segundaescolha) {
    
    const segundoclique = document.querySelector(".caixinha" + segundaescolha);
    const segundoclicado = document.querySelector(".segundaselecionada");
    if (segundoclicado !== null) {
        segundoclicado.classList.remove("segundaselecionada");
        
    }   
    segundoclique.classList.toggle("segundaselecionada");

    
   
    const segundoverifique = document.querySelector(".v" + segundaescolha);
    const segundoverificado = document.querySelector(".segundoligado");
    
    if (segundoverificado !== null) {
        segundoverificado.classList.remove("segundoligado");
    }
    segundoverifique.classList.toggle("segundoligado");
    if (contadordois < 1) {contadordois ++};
    let contador = contadorum + contadordois + contadortres;
   if (contador == 3) {
    

    finalizador.classList.add("ligar");

   }

    let valorbebida = document.getElementById("preco" + segundaescolha).textContent;
    
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
   if (contadortres < 1) {contadortres ++};
   let contador = contadorum + contadordois + contadortres;
   if (contador == 3) {
    
    finalizador.classList.add("ligar");
   }

   let valorsobremesa = document.getElementById("preco" + terceiraescolha).textContent;
   
    
}

       
    

    

    
   
    

 
     
 