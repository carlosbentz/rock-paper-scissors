let elemento0 = document.getElementById("pedra")
let elemento1 = document.getElementById("papel")
let elemento2 = document.getElementById("tesoura")
let usuario
let oponente
let frase = document.getElementById("frase")
let fraseOponente = document.getElementById("oponente")

elemento0.onclick = function () {
    usuario = 0
    oponente = Math.floor(Math.random() * (3))
    if (oponente === 0) {
        alert("Empate")
        gerarFraseEmpate()
    }
    console.log(oponente)
    if (oponente === 1) {
        alert("Você Perdeu")
        gerarFraseDerrota()
    }
    if (oponente === 2) {
        alert("Você Venceu")
        gerarFraseVitoria()
    }
    escolhaOponente()
}

elemento1.onclick = function () {
    usuario = 1
    oponente = Math.floor(Math.random() * (3))
    if (oponente === 0) {
        alert("Você Venceu")
        gerarFraseVitoria()
    }
    if (oponente === 1) {
        alert("Empate")
        gerarFraseEmpate()
    }
    if (oponente === 2) {
        alert("Você Perdeu")
        gerarFraseDerrota()
    }
    escolhaOponente()
}

elemento2.onclick = function () {
    usuario = 2
    oponente = Math.floor(Math.random() * (3))
    if (oponente === 0) {
        alert("Você Perdeu")
        gerarFraseDerrota()
    }
    if (oponente === 1) {
        alert("Você Venceu")
        gerarFraseVitoria()
    }
    if (oponente === 2) {
        alert("Empate")
        gerarFraseEmpate()
    }
    escolhaOponente()
}





function gerarFraseVitoria() {
    let random = Math.floor(Math.random() * (3))
    switch (random) {
        case 0: frase.innerHTML = "Fácil demais, né ?"
            break
        case 1: frase.innerHTML = "Humilhou o oponente"
            break
        case 2: frase.innerHTML = "Assim não tem graça"
            break
    }
}

function gerarFraseEmpate() {
    let random = Math.floor(Math.random() * (3))
    switch (random) {
        case 0: frase.innerHTML = "Sem graça..."
            break
        case 1: frase.innerHTML = "Joga mais uma aí"
            break
        case 2: frase.innerHTML = "Assim fica chato..."
            break
    }
}

function gerarFraseDerrota() {
    let random = Math.floor(Math.random() * (3))
    switch (random) {
        case 0: frase.innerHTML = "Humilhado !"
            break
        case 1: frase.innerHTML = "Mais sorte na próxima"
            break
        case 2: frase.innerHTML = "Tu só perde ?"
            break
    }
}

function escolhaOponente() {
    switch (oponente) {
        case 0: fraseOponente.innerHTML = "O Oponente Escolheu: Pedra"
            break
        case 1: fraseOponente.innerHTML = "O Oponente Escolheu: Papel"
            break
        case 2: fraseOponente.innerHTML = "O Oponente Escolheu: Tesoura"
            break
    }
}
