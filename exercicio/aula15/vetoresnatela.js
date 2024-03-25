let vlr = [8, 1, 4, 5, 9, 2, 3, 0]

console.log(vlr)


console.log(vlr[0])
console.log(vlr[1])
console.log(vlr[2])
console.log(vlr[3])
console.log(vlr[4])
console.log(vlr[5])
console.log(vlr[6])
console.log(vlr[7]) 


for(let pos = 0; pos < vlr.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${vlr[pos]}`)
}

for(let pos in vlr) {
    console.log(`${vlr[pos]}`)
}