let vitorias = 200
let derrotas = 0
let vitorias2 = 51
let derrotas2 = 1
let vitorias3 = 99
let derrotas3 = 3

let saldoVitorias = vitorias - derrotas
let saldoVitorias2 = vitorias2 - derrotas2
let saldoVitorias3 = vitorias3 - derrotas3
let nivel = ""

if(vitorias <= 10){
    nivel = "Ferro"}
    else if(vitorias >= 11 && vitorias <= 20){
    nivel = "Bronze"}
    else if(vitorias >= 21 && vitorias <= 50){
    nivel = "Prata"}
    else if(vitorias >= 51 && vitorias <= 80){
    nivel = "Ouro"}
    else if(vitorias >= 81 && vitorias <= 90){
    nivel = "Diamante"}
    else if(vitorias >= 91 && vitorias <= 100){
    nivel = "Lendário"}
    else if(vitorias >= 101){
    nivel = "Imortal"}
    console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel)
   
 if(vitorias2 <= 10){
        nivel = "Ferro"}
        else if(vitorias2 >= 11 && vitorias2 <= 20){
        nivel = "Bronze"}
        else if(vitorias2 >= 21 && vitorias2 <= 50){
        nivel = "Prata"}
        else if(vitorias2 >= 51 && vitorias2 <= 80){
        nivel = "Ouro"}
        else if(vitorias2 >= 81 && vitorias2 <= 90){
        nivel = "Diamante"}
        else if(vitorias2 >= 91 && vitorias2 <= 100){
        nivel = "Lendário"}
        else if(vitorias2 >= 101){
        nivel = "Imortal"}
console.log("O Herói2 tem de saldo de " + saldoVitorias2 + " está no nível de " + nivel)


if(vitorias3 <= 10){
    nivel = "Ferro"}
    else if(vitorias3 >= 11 && vitorias3 <= 20){
    nivel = "Bronze"}
    else if(vitorias3 >= 21 && vitorias3 <= 50){
    nivel = "Prata"}
    else if(vitorias3 >= 51 && vitorias3 <= 80){
    nivel = "Ouro"}
    else if(vitorias3 >= 81 && vitorias3 <= 90){
    nivel = "Diamante"}
    else if(vitorias3 >= 91 && vitorias3 <= 100){
    nivel = "Lendário"}
    else if(vitorias3 >= 101){
    nivel = "Imortal"}


console.log("O Herói3 tem de saldo de " + saldoVitorias3 + " está no nível de " + nivel)