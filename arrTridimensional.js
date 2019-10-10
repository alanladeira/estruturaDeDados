var arquibancada = []

var setorNorte = []
var setorSul = []

var torcida1 = ['tjb', 'furia']
var torcida2 = ['loucos', 'folgada']

var torcida3 = ['botachopp', 'resistencia']
var torcida4 = ['fogoro', 'botasuco']

setorNorte = [torcida1, torcida2]
setorSul = [torcida3, torcida4]

arquibancada = [setorNorte, setorSul]

for (var x = 0; x < arquibancada.length; x++){
    for (var y = 0; y < arquibancada[x].length; y++){
        for (var z = 0; z < arquibancada[x][y].length; z++){
            console.log(arquibancada[x][y][z])
        }
    }
}