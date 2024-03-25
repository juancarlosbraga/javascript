let num = [5, 7, 2, 4, 9, 1]
num[6] = 3
num.push(8)
num.sort()

console.log(`O vetor ${num} tem ${num.length} elemetos`)

let pos = num.indexOf(7)
if (pos == -1) {
    console.log('A posição não foi encontrada')
} else {
    console.log(`O valor 7 está na posição ${pos}`)
}
