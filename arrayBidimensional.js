var galera = []

var amigos1 = ["Alan", "Bruno", "Thalles"]
var amigos2 = ["Yan", "Lincoln", "Fernando"]

galera[0] = amigos1
galera[1] = amigos2

for (var i = 0; i < galera.length; i++){
    for (var j = 0; j < galera[i].length; j++){
        console.log(galera[i][j])
    }
}