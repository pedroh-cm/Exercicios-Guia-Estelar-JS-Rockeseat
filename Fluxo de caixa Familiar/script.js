/*
Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    *receitas []
    *despesas []

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a familia está com saldo
positivo ou negativo, seguido do valor do saldo
*/

let familia = {
    receitas:[2200, 3200, 250.43, 360.45],
    despesas:[320.34, 128.9, 176.10, 2000]
}

function somar(array) {
    let total=0;
    for(let value of array){
        total+=value
    }
    return total;
}

function calcularBalanço(){
    const calcularReceita = soma(familia.receitas)
    const calcularDespesas = soma(familia.despesas)
    const total = calcularReceita - calcularDespesas

    const itsOk = total >= 0

    let balanceText = 'negativo'

    if(itsOk){
        balanceText = 'positivo'
    }

    console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)}R$`)
}

calcularBalanço()