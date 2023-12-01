console.log("Calculadora IMC - Indice de Massa Corporal");

let altura = 1.62;
let peso = 79.05;
let imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log(`Seu IMC é ${imc.toFixed(2)} e você está abaixo do peso.`)
} else if (imc > 18.5 && imc <= 25){
    console.log(`Seu IMC é ${imc.toFixed(2)} e você está com peso normal.`)
} else if (imc > 25 && imc <= 30){
    console.log(`Seu IMC é ${imc.toFixed(2)} e você está acima do peso.`)
} else if (imc > 30 && imc <= 40){
    console.log(`Seu IMC é ${imc.toFixed(2)} e você está obeso.`)
} else if (imc > 40){
    console.log(`Seu IMC é ${imc.toFixed(2)} e você está com obesidade grave.`)
}