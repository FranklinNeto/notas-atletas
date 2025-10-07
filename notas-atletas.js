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




function obterMaiorNota(notas){

    notas.sort((a, b) => a - b)
    return notas[notas.length-1]

}

function obterMenorNota(notas){
    notas.sort((a, b) => a - b)
    return notas[0]
}

function calcularMediaSemAMenorEMaiorNota(atleta){

    let notas = atleta.notas
    let maiorNota = obterMaiorNota(notas)
    let menorNota = obterMenorNota(notas)

    let notasSemMaiorEMenorNota = notas.filter(nota => nota !== maiorNota && nota !== menorNota)

    let somaNotas = notasSemMaiorEMenorNota.reduce(function(total, nota){
        return total + nota
    }, 0)

    return somaNotas/notasSemMaiorEMenorNota.length - 1


}