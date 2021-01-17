//SISTEMAS DE NOTAS ESCOLARES

/*Crie um algoritmo que transforme as notas do sistema númerico em notas de caracteres

de 90 para cima - A
de 80 - 89 - B
de 70 - 79 - C
de 60 - 69 - D
menor que 60 - F 
*/

function getScore(){
    
    let scoreA = score >= 90 && score <= 100

    let scoreB = score >= 80 && score <= 89

    let scoreC = score >= 70 && score <= 79

    let scoreD = score >= 60 && score <= 69
 
    let scoreF = score <= 60 && score >= 0

    let scoreFinal

    if(scoreA){
    scoreFinal = "A"
    }else if(scoreB){
    scoreFinal = "B"
    }else if(scoreC){
    scoreFinal = "C"
    }else if(scoreD){
    scoreFinal = "D"
    }else if(scoreF){
    scoreFinal = "F"
    }else{
    scoreFinal ="Nota inválida"
    }

    return scoreFinal
}


console.log(getScore(101))
console.log(getScore(-1))
console.log(getScore(0))
console.log(getScore(1))
console.log(getScore(45))
console.log(getScore(60))
console.log(getScore(61))
console.log(getScore(75))
console.log(getScore(85))
console.log(getScore(95))




