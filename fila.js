//Fila segue a caracteristica FIFO, que significa Primeiro a entrar é o Primeiro a sair

function Queue(){
    let items = []

    this.enqueue = (dados)=>items.push(dados)

    this.dequeue = ()=> items.shift()

    this.size = ()=> items.length

    this.first = ()=> items[0]

    this.size = ()=> items.length-1

    this.print = ()=>console.log(items.toString())
 }

let minhaFila = new Queue()

minhaFila.queue("alan")
minhaFila.dequeue()
minhaFila.queue("telo")
minhaFila.print()
