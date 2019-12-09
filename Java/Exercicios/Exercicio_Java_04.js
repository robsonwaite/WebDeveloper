


var filmes = [
  {
    nome: "V de vingança",
    nota: 3.5,
    visto: false
  },
   {
    nome: "Senhor dos Aneis",
    nota: 4.5,
    visto: true
  },
   {
    nome: "Coração Valente",
    nota: 4.0,
    visto: true
  }
]

showFilmes = function(objeto){
  for (var i = 0; i < objeto.length; i++) {
    resultado = "Você ";
    if (objeto[i].visto){
      resultado += " já viu ";
    } else {
      resultado += "não viu ";
    }
    resultado += "\""+ objeto[i].nome +"\" - "+ objeto[i].nota +" pontos no MDB"
    console.log(resultado);
    }
}
