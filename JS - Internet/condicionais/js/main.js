//Condicionais
let idade = prompt('Insira sua idade');

if (idade >= 18) console.log('Parabéns! vc pode ser preso');
else console.log('Vc é menor de idade');

//Laços de Repetição
let i = 0;
while (i <= 5) console.log(i++);

for(i=0; i<=5; i++) console.log(i);

//Date
let data = new Date();
console.log(`
    ${data.getTime()}
    ${data.getDay()}
    ${data.getHours()}
    ${data.getMinutes()}
`);