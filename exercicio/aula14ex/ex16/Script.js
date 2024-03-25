function clicar () {
    let nu1 = document.getElementById('nm1')
    let nu2 = document.getElementById('nm2')
    let ps = document.getElementById('np')
    let res = document.getElementById('res')

    if (nu1.value.length == 0 || nu2.value.length == 0 || ps.value.length ==0 ) {
        alert('[Erro] Faltam dados')
        res.innerHTML = 'Impossivel contar'
    } else {
        res.innerHTML = 'Contando: <br>'
        let n1 = Number(nu1.value)
        let n2 = Number(nu2.value)
        let p = Number(ps.value)

        if (p <= 0) {
            alert('Passo invalido Considerando Passo 1')
            p=1
        }

        if (n1 < n2) { //Contagem crescente
            for (let c = n1; c <= n2; c +=p) {
                res.innerHTML += `${c} \u{1F449}`
            }
            
        } else {//Contagem decrecescente
                for (let c = n1; c >= n2; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
            
        res.innerHTML += `\u{1F3C1}`
    }

    
}