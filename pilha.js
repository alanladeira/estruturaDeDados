//Pilha segue a caracteristica LIFO, que significa Último a entrar é o Primeiro a sair.

function Stack(){
    let items = []

    this.push = element => items.push(element)    

    this.pop = ()=> items.pop()

    this.del = ()=> items = []

    this.peek = ()=> items[items.length-1]

    this.size = ()=> items.length
    
    this.print = ()=> console.log(items.toString())
}

let pilha = new Stack()

pilha.push(1)
pilha.push(2)
pilha.push(3)

console.log(pilha.size())

