function isBalanced(s){

var sequence = s.split('')

var resp = []

var validacao = ''

    for(var i = 0; i < sequence.length; i++){
       
        var firstChar = sequence[i]
        var lastChar = sequence[sequence.length-1]
                
        if(firstChar==="{" && lastChar ==="}" || firstChar==="(" && lastChar ===")" || firstChar==="[" && lastChar ==="]"){
            resp.push(true)
        } else {
            resp.push(false)
        }
        sequence.pop()     
    } 

resp.reduce((e, e1) => e && e1 ? validacao = "YES!" : validacao = "NO!")

return validacao

}

console.log(isBalanced("[(())]"))