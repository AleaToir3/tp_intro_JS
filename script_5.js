const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 0 }
  ];

//   let numbers = [1, 3, 5];
//   let result = true;
//   for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i] <= 0) {
//           result = false;
//           break;
//       }
//   }
//   console.log(result);


// Est-ce que tous les livres ont été au moins empruntés une fois ?
// verif=[];
// for (let x in books){
//     // console.log(books[x].rented)
//     if (books[x].rented === 0){ 
//     console.log('Le Livre : '+books[x].title+"n'as pas ete emprunte !");}
//     else if (books[x].rented > 0) { 
//     console.log('toutes la liste selectionnner a deja ete emprunter');
//         }
//     }

// Quel est livre le plus emprunté ?

// let max = 0;
// books.forEach(book => {
//   if (book.rented > max) {
//     max = book.rented;
//   }
// });
// console.log(max);

// ou

// console.log ("Voici le livre qui a été le plus emprunté")
// let arr2 = books.sort(function(a, b) { 
//   return  b.rented - a.rented; 
// });
// console.log(arr2.shift(0))

// Quel est le livre le moins emprunté ?

let min = 0;
books.forEach(book => {
  if (book.rented < min) {
      console.log(book);
    min = book.rented;
  }
});
console.log(min);

// Trouve le livre avec l'ID: 873495 ;
// Supprime le livre avec l'ID: 133712 ;
// Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).