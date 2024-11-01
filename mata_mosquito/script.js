var largura = 0
var altura = 0
var vidas = 1
var tempo = 15
var TempoCriaMosquito = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel == 'normal'){
    TempoCriaMosquito = 1500
}
else if(nivel == 'medio'){
    TempoCriaMosquito = 1000
}
else if(nivel == 'dificil'){
    TempoCriaMosquito = 750
}

var cronometro = setInterval(function(){
    tempo -= 1
    if(tempo < 0){
        clearInterval(cronometro);
        clearInterval(CriaMosquito);
        window.location.href = 'vitoria.html'
    }   
    else{
    document.getElementById('cronometro').innerHTML = tempo
}},1000)

function AlteraTamanho(){
    largura = window.innerWidth
    altura = window.innerHeight
}



AlteraTamanho()

function PosicaoRandom(){
    if(document.getElementById('mosquito')){

        document.getElementById('mosquito').remove()
        if(vidas > 3){
            window.location.href = "derrota.html"
        }
        else{
            document.getElementById('v'+vidas).src = 'imagens/coracao_vazio.png'
            vidas++
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 100
    var posicaoY = Math.floor(Math.random() * altura) - 100

    posicaoX = posicaoX <= 0 ? 0 : posicaoX
    posicaoY = posicaoY <= 0 ? 0 : posicaoY

    console.log(posicaoX,posicaoY);

    mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = TamanhoRandom() + ' ' + SentidoRandom()
    document.body.appendChild(mosquito)
    mosquito.style.position = 'absolute'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.left = posicaoX + 'px'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }
}

function TamanhoRandom(){
    var classe = Math.floor(Math.random() * 3);

    if(classe == 0){
        return 'mosquito1'
    }
    else if(classe == 1){
        return 'mosquito2'
    }
    else{
        return 'mosquito3'
    }
}

function SentidoRandom(){
    var lado = Math.floor(Math.random() * 2);

    if(lado == 0){
        return 'ladoA'
    }
    else{
        return 'ladoB'
    }
}
