# Exercício: Cálculo de Média de Atletas

## Descrição
Este projeto faz parte do curso DevStart 
SENAI e tem como objetivo calcular a média das notas de atletas, desconsiderando a maior e a menor nota de cada um.

## Funcionalidades
- Processa uma lista de atletas com suas respectivas notas
- Ordena as notas em ordem crescente
- Remove a maior e a menor nota de cada atleta
- Calcula a média das notas restantes
- Exibe os resultados formatados no console

## Estrutura do Código

### Array de Atletas
O array `atletas` contém objetos com:
- `nome`: Nome do atleta
- `notas`: Array com 5 notas atribuídas

### Funções

#### `calcularMediaSemAMenorEMaiorNota(atleta)`
- Recebe um objeto atleta
- Cria uma cópia do array de notas
- Ordena as notas em ordem crescente
- Remove a primeira (menor) e última (maior) notas
- Calcula a média das notas restantes
- Retorna a média calculada

#### `main(atletas)`
- Função principal que processa todos os atletas
- Para cada atleta, calcula a média válida
- Cria um array de objetos com os resultados formatados
- Exibe os resultados no console

## Saída Esperada
O programa gera a seguinte saída no console:

| Atleta           | Notas Obtidas           | Média Válida           |
|------------------|-------------------------|-------------------------|
| Cesar Abascal    | 10, 9.34, 8.42, 10, 7.88 | 9.253333333333332      |
| Fernando Puntel  | 8, 10, 10, 7.9, 9.33    | 9.11                   |
| Daiane Jelinsky  | 7, 10, 9.5, 9.5, 8      | 9                      |
| Bruno Castro     | 10, 10, 10, 9.9, 9.5    | 9.833333333333334      |

## Tecnologias Utilizadas
- JavaScript (ES6+)

## Conceitos Aplicados
- Manipulação de arrays  
- Ordenação de elementos  
- Cálculo de médias  
- Formatação de strings  
- Funções de alta ordem (`reduce`)  
- Imutabilidade (`spread operator`)

## Como Executar
1. Copie o código para um arquivo JavaScript (ex: `notas-atletas.js`)
2. Execute no terminal:
```bash
node notas-atletas.js

