function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    ///document.getElementById("Agradecimento");
    //alert("Obrigado por clicar");
}

function redirecionar(){
     window.open("https://globallab.org/");
    // window.location.href = "https://globallab.org/";
}

function trocar(elemento){
    // document.getElementById("mousemove").innerHTML = "Obrigador por passar o mouse";
    elemento.innerHTML = "Obrigador por passar o mouse";
    // alert("trocar texto");
}
    function voltar(elemeto){
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "passe o mouse aqui";

    
    }

    function load(){
        alert("pagina carregada");
    }

    function funcaoChange(elemento){
        console.log(elemento.value);
    }
// function validarIdade(idade){
//     var validar;
//     if (idade >= 18){
//         validar = true
//     }else {
//         validar = false
//     }
//     return validar;
// }

// var idade = prompt("Qual sua idade?");
// console.log(validarIdade(idade));

// function soma(n1,n2){
//     return n1 + n2;
// }
// function setReplace(frase, nome, novo_nome){
//     return frase.replace(nome, novo_nome)
// }

// alert(soma(5,10));
// alert(setReplace("Vai Japão", "Japão", "Brasil"));


// var d = new Date();
// alert(d.getMonth()+1); // no month adiciona +1 pois ele começa a contar do zero
// alert(d.getDate())
// alert(d.getDay())


// var count;
// for(count=0; count<= 5; count++){
//     alert(count)
// }

//  var count = 0;
//  while(count <= 5){
//      console.log(count);
//      alert(count);
//      count = count +1;
//  };


// var idade = prompt("Qual a sua idade?")  
// if(idade >= 18) {
//     alert("maior de idade");
// }else{
//     alert("menor de idade");
// }


// var frutas = [{nome:"maça", cor: "vermelha"}, {nome:"uva", cor: "roxa"}]
// console.log(frutas);
// alert(frutas[1].nome);
// var fruta = {nome:"maça", cor: "vermelha"}
// console.log(fruta.nome);
// alert(fruta.cor);
//var lista = ["maçã", "pêra","laranja"];
//lista.push("uva")
//lista.pop()
//console.log(lista)
//console.log(lista.toString())
//console.log(lista.join(" | "))


//var nome = "Daniel Silva";
//var idade = 32;
//var idade2 = 10;
//var frase = "Estudando php"
//alert(nome + " tem " + idade + " anos.") 
//alert(idade + idade2);
//console.log(nome);
//console.log(idade);
//console.log(frase);
//console.log(frase.replace("php", "javascript"));
//alert(frase.replace("php", "javascript"));