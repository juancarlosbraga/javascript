let num = document.getElementById('txtn')
let lista = document.getElementById('slt')
let res = document.querySelector('div#res')
let valores = []

function nvr(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
} 

function lvr(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adt() {
    if (nvr(num.value) && !lvr(num.value, valores)) {
       valores.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `Valor ${num.value} adcionado`
       lista.appendChild(item)
       res.innerHTML = ''
    } else {
        alert(' Valor invalido ou  já encontrado na lista')
    }
    num.value = ''
    num.focus()
} 
function fnl () {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        let ttl = valores.length
        let mr = valores[0]
        let mn = valores[0]
        let sm = 0
        let md = 0

        for (let pos in valores) {
            sm += valores[pos]
            if (valores[pos] > mr)
            mr =  valores[pos]
            if (valores[pos] < mn)
            mn = valores[pos]
        }
        md = sm / ttl
        
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos  ${ttl} números registrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${mr}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${mn}</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${sm}</p>`
        res.ineerHTML += `<p>A média dos valors digitados é ${md}</p>`
        
    }
}




