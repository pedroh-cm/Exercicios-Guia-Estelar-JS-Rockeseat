/* Celsius to Fahrenheit

Crie uma função que receba uma string em Celsius ou Fahrenheit e faça a transformação de uma unidade para outra.

    C = ( F- 32) * 5/9
    F = C * 9/5 + 32
*/

function transformarGrau(grau){
    const celsiusExiste = grau.toUpperCase().includes('c')
    const fahrenheitExiste = grau.toUpperCase().includes('f')


    //fluxo erro

    if(!celsiusExiste && !fahrenheitExiste){
        throw new Error('Grau Inválido')
    }

    //Fluxo ideal, F -> C

    let atualizarGrau = Number(grau.toUpperCase().replace("F", ""));

    let formula = fahrenheit => (fahrenheit - 32) * 5/9

    let sinaldeGrau = 'C'

    //Fluxo Alternativo C

    if(celsiusExiste){
        atualizarGrau = Number(grau.toUpperCase().replace("C", ""));
        formulacelsius => celsius * 9/5 + 32
        sinaldeGrau ='F'
    }

    return formula(atualizarGrau) + sinaldeGrau
}

try{
    console.log(transformarGrau('10C'))
    console.log(transformarGrau('50F'))
    transformarGrau('50z')
}catch(error){
    console.log(error.message)
}