// var persons = [
//     {name: "John", lastname: "Doe"},
//     {name: "Balo", lastname: "Ziétin"},
//     {name: "John", lastname: "Badwin"}
// ];

// var choice =  persons.filter(function(person) {
//     return person.name == "John";
// });

// console.log(choice); 

const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

  let caca = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];
// let years7080 = [];
// for (let i = 0; i < entrepreneurs.length; i++) {
//     if (entrepreneurs[i].year > 1970 && entrepreneurs[i].year < 1980) {
//         years7080.push(entrepreneurs[i]);
//     }
// }
// console.log(years7080);

// entrepreneurs.map(tab => console.log(tab.first + ':' + tab.last));     


// let years7080 = [];
// for (let i = 0; i < entrepreneurs.length; i++) {
//     if (entrepreneurs[i].year > 1970 && entrepreneurs[i].year < 1980) {
//         years7080.push(2020-entrepreneurs[i].year);
//     }
// }
// console.log(years7080);



  entrepreneurs.sort(function(a, b) { 
    return a.last.localeCompare(b.last);
  });
  console.log(entrepreneurs)


// Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;
// Sors une array qui contient le prénom et le nom des entrepreneurs ;
// Quel âge aurait chaque inventeur aujourd'hui ?
// Trie les entrepreneurs par ordre alphabétique du nom de famille.