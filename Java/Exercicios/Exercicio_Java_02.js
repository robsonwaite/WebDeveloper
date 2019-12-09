
var toDo = [];
alert("Lista de comandos > Quit Para fechar > Add Lista para adicionar iten > listar para ver itens adicionados > Delete para remover")

while (command !== "Quit"){
  var command = prompt("O que você deseja fazer?");
  if (command == "add lista"){
    newEntry = prompt("Que tarefa deseja adicionar ?");
    toDo.push(newEntry);
    console.log("Adicionado")
  } else  if (command == "listar"){
    toDo.forEach(function(listas,i){
      console.log("************");
      console.log(i +": "+listas);
      console.log("************");
    });
  } else if (command == "Delete"){
    indexdelete = prompt("Qual item deseja deletar? 0 - X");
    toDo.splice(indexdelete,1);
    console.log("Deletado")
  }
}
