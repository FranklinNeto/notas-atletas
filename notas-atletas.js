let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

/* Você deverá criar uma função capaz de receber uma matriz de objetos contendo o nome do atleta e as 
cinco notas atribuídas. A sua função deverá calcular a média das notas sem considerar a maior e menor nota do 
atleta. Por fim, deverá apresentar ao usuário o nome de cada atleta, seguido das notas e da média calculada. */


/* function obterMaiorNota(notas){
    notasCopy = [...notas]
    notasCopy.sort((a, b) => a - b)
    return notasCopy[notas.length-1]

}

function obterMenorNota(notas){
    let notasCopy = [...notas]
    notasCopy.sort((a, b) => a - b)
    return notasCopy[0]
} */

function calcularMediaSemAMenorEMaiorNota(atleta){

    let notasCopy = [...atleta.notas]
    
    notasCopy.sort((a, b) => a - b)
    notasCopy.shift()
    notasCopy.pop()

    let notasSemMaiorEMenorNota = notasCopy
   // console.log(notasSemMaiorEMenorNota)
    
    let somaNotas = notasSemMaiorEMenorNota.reduce(function(total, nota){
        return total + nota
    }, 0)

    return somaNotas/notasSemMaiorEMenorNota.length


}

function main(atletas){
    
    let resultadoArr = []
   
    for (let i = 0; i < atletas.length; i++){

        let media = calcularMediaSemAMenorEMaiorNota(atletas[i])

        resultadoArr.push({
            nome: atletas[i].nome,
            notas: atletas[i].notas,
            media: media
        })
    
    }
    
    console.log(resultadoArr)
    return resultadoArr

}

main(atletas)

/* A saída deve ser:

Atleta: Cesar Abascal
Notas Obtidas: 10,10,7.88,8.42,9.34
Média Válida: 9,253333

Atleta: Fernando Puntel
Notas Obtidas: 10,10,7,8,9.33
Média Válida: 9.11

Atleta: Daiane Jelinsky
Notas Obtidas: 10,7,8,9.5,9.5
Média Válida: 9

Atleta: Bruno Castro
Notas Obtidas: 10,10,10,9,9.5
Média Válida: 9.83333333333 */