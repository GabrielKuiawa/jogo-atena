function listarPerguntas() {
    var buttons = document.getElementsByClassName('button');
    
    var imagem = document.querySelector("#imagem");
    var ask = document.querySelector("#ask");
    
    var button_1 = document.querySelector("#button-1");
    var button_2 = document.querySelector("#button-2");
    var button_3 = document.querySelector("#button-3");
    var button_4 = document.querySelector("#button-4");
    

    var data = fetch("../js/perguntas/perg.json")
    .then(resposta => {return resposta.json()})
    .then(json => {
            var random = perguntasAleatorias(0,json.length);
            existePerguntas.push(random);

            // console.log(existePerguntas.find(element => element > 10));
            // const verifica = (item) => {
            //     existePerguntas.includes(item) ? alert("Encontrou") : alert("Não encontrou");
            // }

            // verifica(random);
            console.log(random);
            console.log(existePerguntas);

            // console.log(existePerguntas.includes(random));
            // console.log(existePerguntas.indexOf(random) > -1);
            // for (let i = 0; i < existePerguntas.length; i++) {
                // console.log(i);
                // if (existePerguntas.includes(random)) {
                //     console.log("já existe ---------------------- " + random);
                // } else {
                //     console.log("não existe");
                // }
                
            // }
            
            imagem.src = "../" + json[random].imagem;
            ask.innerHTML = json[random].ask;
            button_1.innerHTML = json[random].option_1;
            button_2.innerHTML = json[random].option_2;
            button_3.innerHTML = json[random].option_3;
            button_4.innerHTML = json[random].option_4;
        }
    );
        
}
    
function certoOuErrado() {
    Array.prototype.slice.call(buttons).forEach(function(pegaElementoAtual){
        pegaElementoAtual.addEventListener('click', function(e){
            if (this == button_1) {
                alert("ACERTOU");
            } else {
                alert("errou");
            }
        });
    });
}

function perguntasAleatorias(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
    
var existePerguntas = [];
// console.log(existePerguntas);
// existePerguntas.push(1);
// existePerguntas.push(2)
// console.log(existePerguntas);
// console.log(perguntasAleatorias(1,3));

listarPerguntas();
// listarPerguntas();

// console.log(data);