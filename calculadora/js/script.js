const numero1 = document.querySelector('#numero1')
const numero2 = document.querySelector('#numero2')
const btnCalcular = document.querySelector('#btnCalcular')
const resultado = document.querySelector('#resultado')
const soma = document.querySelector('.soma')
const subtracao = document.querySelector('.subtracao')
const multiplicacao = document.querySelector('.multiplicacao')
const divisao = document.querySelector('.divisao')


function calcular(){
    const n1 = Number (numero1.value)
    const n2 = Number (numero2.value)
    if (typeof n1 === 'number'
        && typeof n2 === 'number') {
            const add = `A soma de ${n1} e  ${n2} = ${n1+n2}`
            const sub = `A subtração de ${n1} e  ${n2} = ${n1-n2}`
            const div = `A divisão de ${n1} e  ${n2} = ${n1/n2}`
            const mult = `A multiplicação de ${n1} e  ${n2} = ${n1*n2}`

            soma.innerHTML = add
            subtracao.innerHTML = sub
            divisao.innerHTML = div
            multiplicacao.innerHTML = mult

        } else {
                alert('Porfavor, digite um numero correto')
            }
        }
btnCalcular.addEventListener('click', function(evento){
    evento.preventDefault()
    calcular()
})
