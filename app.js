
let peso
let altura



document.getElementById('enviar').addEventListener('click', calcular)


function calcular() {
    peso = parseFloat(document.getElementById('ipeso').value)
    altura = document.getElementById('ialtura').value
    alturaFlutuante = altura[0] + '.' + altura.slice(2) + "0"
    alturaFlutuante =  Number(alturaFlutuante) * Number(alturaFlutuante)
    alturaFlutuante = peso / alturaFlutuante
    document.getElementById('resultado').innerHTML = ""
    document.getElementById('resultado').innerHTML += `Seu imc é ${alturaFlutuante.toFixed(1)}`
    document.getElementById('condicao').innerHTML = ''
    
    
    if (alturaFlutuante.toFixed(1) < 18.5) {
        console.log('baixo peso')
        document.getElementById('condicao').innerHTML += 'Você está abaixo do peso'
         document.querySelector("body").style.backgroundImage = `url(./assets/magro.png)`;
    }

    else if (alturaFlutuante.toFixed(1) > 18.5 && alturaFlutuante.toFixed(1) < 25 ) {
        console.log('normal')
        document.getElementById('condicao').innerHTML += 'Você está normal'
        document.querySelector(
          "body"
        ).style.backgroundImage = `url(https://images6.alphacoders.com/522/thumb-1920-522274.jpg)`;
    }

    else if (alturaFlutuante.toFixed(1) > 24 && alturaFlutuante.toFixed(1) < 30) {
        console.log('sobre peso')
        document.getElementById('condicao').innerHTML += 'Você está com sobre peso'
    }

    else if (alturaFlutuante.toFixed(1) > 30) {
        console.log('obesidade')
        document.getElementById('condicao').innerHTML += 'Você está obeso'
         document.querySelector(
           "body"
         ).style.backgroundImage = `url(https://wallpapercave.com/wp/wp7934365.jpg)`;
    }
}

