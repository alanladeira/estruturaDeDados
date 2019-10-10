function dec2base(decNum, base){
    let restosDivisao = []
    let binario = ''
    let digitos = '0123456789ABCDEF'

    while(decNum > 0){
        restosDivisao.push(Math.floor(decNum % base))
        decNum = Math.floor(decNum / base)
    }

    while(restosDivisao.length > 0){
        binario+=digitos[restosDivisao.pop()]  
        
    }

    return(binario)
}

console.log(dec2base(123, 16))

