
//*exercício 1 For Básico*//

//   for(let i = 1; i <= 10; i++){
//       console.log(i)
//    }

//*exercício 2 For Básico*//

// let tabuada = (parseInt(prompt("Digite o número que voçe quer uma tabuada: ")))

// for(let i = 1; i <=10 ; i++){
//     console.log(tabuada * i)
// }

//*exercício 3 For Básico*//

let N = (parseInt(prompt("Digite um número: ")))
let soma = 0
let conta = ""


for (let i = 1; i <= N; i++) {
    soma += i
    conta += i

if (i < N) {
  conta += " + " 
}
}
conta += " = " + soma

alert(conta)