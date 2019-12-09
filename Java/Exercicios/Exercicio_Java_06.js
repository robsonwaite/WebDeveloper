
// Seleção manual do componente li

// var primeiroLi = document.querySelector("li");
//
// primeiroLi.addEventListener("mouseover", function(){
//   primeiroLi.style.color="green";
// });
// primeiroLi.addEventListener("mouseout", function(){
//   primeiroLi.style.color="black";
// });

// Seleção Geral do's li's

var allLi = document.querySelectorAll("li");

  for (var i = 0; i < allLi.length; i++) {
    allLi[i].addEventListener("mouseover", function(){
      this.classList.add("select");
    });
    allLi[i].addEventListener("mouseout", function(){
        this.classList.remove("select");
    });
    allLi[i].addEventListener("click", function() {
      this.classList.toggle("done");
    });
  }
