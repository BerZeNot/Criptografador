/*
Esse script criptografa, com cifra de César, um texto vindo 
de um formulário preenchido pelo usuário. O usuário também 
fornece uma chave que será usada na criptografia.
*/

let texto = document.getElementById('txtFrase')
let chave = document.getElementById('txtChave')
let result = document.getElementById('txtCriptografado')
let alfabeto = 'abcdefghijklmnopqrstuvwxyz'
let textoCript = ''
let chaveRecebida
let aux=''

function criptografar(){
    result.innerText = 'Disgraça rapaz'
    if(texto.value=='' || chave.value==''){
        alert('Preencha todos os campos!')
    } else {
        chaveRecebida = Number(chave.value)
        let textoRecebido = texto.value
        for(pos in textoRecebido){
            cript(textoRecebido[pos])
        }
        result.innerText = textoCript
    }
    textoCript = ''
}

function cript(letraOriginal){
    aux = posDaLetra(letraOriginal)
    if(letraOriginal==' '){
        textoCript+=' '
    } else if(aux+chaveRecebida<=25){
        textoCript += alfabeto[aux+chaveRecebida]
    } else {
        let mult=0
        mult = Number.parseInt((aux+chaveRecebida)/26)
        textoCript += alfabeto[(aux+chaveRecebida) - (26*mult)]
    }
}

function posDaLetra(l){
    console.log('passou na function')
    return alfabeto.indexOf(l)
}
