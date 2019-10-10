function dec2bin(num){
    let restosDivisao = []
    let binario = ''
        
    while (num > 0){
       restosDivisao.push(Math.floor(num % 2)) 
       num = Math.floor(num / 2)          
    }

    while(restosDivisao.length > 0){
        binario += restosDivisao.pop().toString()        
    }

    console.log(binario)
}

dec2bin(255)

//Output => 11111111