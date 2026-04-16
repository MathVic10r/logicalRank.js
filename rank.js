
let name = prompt("Insira seu nome para começarmos:");

console.log("Olá" , name, "vamos começar?" );

let victorePoints = Number(prompt("Insira a quantidade de vitórias conquistadas:"));

let lossPoints = Number(prompt("Insira a quantidade de derrotas:"));

if (victorePoints > lossPoints) {
    console.log("Nossa, você é um verdadeiro campeão, bora ver sua colocação no Ranking?")
}
else {
  console.log("Certo, vamos ao ranking!")
}

let totalSum = victorePoints-lossPoints

if (totalSum < 10){

console.log("Você é categoria 'Ferro'")

}

else if (totalSum >= 11 && totalSum <= 20){

console.log("Você é categoria 'Bronze'")

}

else if (totalSum >= 21 && totalSum <= 50){

console.log("Você é categoria 'Prata'")

}

else if (totalSum >= 51 && totalSum <= 80){

console.log("Você é categoria 'Ouro'")

}

else if (totalSum >= 81 && totalSum <= 90){

console.log("Você é categoria 'Diamante'")

}

else if (totalSum >= 91 && totalSum <= 100){

console.log("Você é categoria 'Lendário'")

}

else if (totalSum >= 11){

console.log("Você é categoria 'Imortal'")

}

console.log("Você possui saldo de" , victorePoints, "vitorias e" , lossPoints, "derrotas")