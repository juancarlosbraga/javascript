function clc() {
    let p = prompt('O que você está comprando?')
    let v = prompt('Qual é o valor do seu produto?')
    let d = prompt('Qual o valor que você para pagar o produto?')
    let t = d-v
    alert(`O seu troco vai ser de ${t}`)
}