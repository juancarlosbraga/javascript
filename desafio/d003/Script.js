function clicar() {
    let n = prompt('Digite um número inteiro qualquer')
    let a = n--
    confirm(`${n} é o antecessor de ${a}`)
    let s = n++
    alert(`${n} é o sucessor de ${s}`)

}