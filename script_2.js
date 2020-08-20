function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}


let nb = prompt("De quel nombre veux-tu calculer la factorielle ?"); 

alert( factorial(nb) );


// ou


let nbr = prompt("De quel nombre veux-tu calculer la factorielle ?");

function fact(nbr) {

  if (nbr === 0)
  {
     return 1;
  }
  return nbr * fact(nbr-1);
}

console.log(fact(nbr));