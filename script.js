// // Pratica Guiada n1 e n2

// const nome = prompt('Qual seu nome?')
// const corFavorita = prompt(`Qual sua cor favorita?`)
// // const citacao = prompt('Qual eh a sua citacao favorita predileta?')

// const nomeMaiusculo = nome.toUpperCase()

// // versao template string

// // console.log(`A cor favorita de ${nome} eh ${corFavorita}. 
// // A citacao favorita eh \"${citacao}\".`)

// // versao concatenacao

// // function imprimeStringNomeECor(nome, corFavorita, citacao){
// // //     const stringConcatenada = `A cor favorita de ` + nome + ` eh ` + corFavorita + `. A citacao
// // //     favorita eh \"` + citacao + '\".'

// // //     console.log(stringConcatenada)
// // // }

// // // imprimeStringNomeECor(nome, corFavorita, citacao)

// // const string =`
// // Nome: ${nomeMaiusculo}
// // Cor Favorita: ${corFavorita}.`

// // const incluiA = nomeMaiusculo.includes (`A`)

// console.log(string)
// console.log(`Quantidade de caracteres que tem no nome: ${nome.length}.`)
// console.log('Possui a letra \"A\"?.' , incluiA)

// EXERCICIO DE FIXACAO

// function perguntaNomeEEmail(nome, email){

//     const nomeDoUsuario = prompt('Digita aqui o nome do usuario')
//     const emailDoUsuario = prompt('Digite aqui email do usuario')

// }

// perguntaNomeEEmail(nome, email)

const nomeDoUsuario = prompt('Digita aqui o nome do usuario')
const emailDoUsuario = prompt('Digite aqui email do usuario')

const fraseDeDisplay = `O email ${emailDoUsuario} foi cadastrado com sucesso.
Boas vindas, ${nomeDoUsuario}. A quantidade de caracteres de nome
eh ${nomeDoUsuario.length}.`

const verificarArroba = fraseDeDisplay.includes(`@`)
const caracteresNome = nomeDoUsuario.length

console.log(fraseDeDisplay)
console.log(fraseDeDisplay.replaceAll(`r` , `x`).replaceAll(`R` , `X`) , `Contem \"@\" na frase?
 ${verificarArroba}`)
