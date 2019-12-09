// Troca "-" por "_"
function strsub(words) {
  var newds = words.replace(/-/g,"_");
  return(newds);
  }

// É par?
function isEven(num) {
  if (num % 2 === 0) {
    return(true);
  }
  else {
    return(false);
  }
}
// Qual o fatorial?
function factorial(num){
  var factor = Number(1);
  if (num === 0){
    return(1);
  }
  else {
  for(i=1;i<num+1;i++) {
    factor= factor*i;
  }
  return(factor);
}

}
