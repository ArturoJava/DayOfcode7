
var numeroUno,numeroTreinta,numeroDiez;
let stringUno = '1'
let stringTreinta = '30'
let stringDiez = '10'

numeroUno =parseInt(prompt('digitar el numero Uno: '));
numeroTreinta =parseInt(prompt('digitar el numero Treinta: '));
numeroDiez =parseInt(prompt('digitar el numero Diez: '));
if (numeroUno == stringUno) {
  console.log('Las variables numeroUno y stringUno tienen el mismo valor, pero tipos diferentes')
} else {
  console.log('Las variables numeroUno y stringUno no tienen el mismo valor')
}

if (numeroTreinta === stringTreinta) {
  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo')
} else {
  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo')
}

if (numeroDiez == stringDiez) {
  console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes')
} else {
  console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor')
}
if (numeroTreinta!=numeroDiez){
  resultado=numeroTreinta+numeroDiez;
  console.log('la suma de '+numeroTreinta+'+'+ numeroDiez+' es: '+resultado);
} 

/*
let numeroUno = 1
let stringUno = '1'
let numeroTreinta = 30
let stringTreinta = '30'
let numeroDiez = 10
let stringDiez = '10'
var resultado;
if (numeroUno == stringUno) {
  console.log('Las variables numeroUno y stringUno tienen el mismo valor, pero tipos diferentes')
} else {
  console.log('Las variables numeroUno y stringUno no tienen el mismo valor')
}

if (numeroTreinta === stringTreinta) {
  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo')
} else {
  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo')
}

if (numeroDiez == stringDiez) {
  console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes')
} else {
  console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor')
}*/
