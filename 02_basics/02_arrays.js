const marvelHeros = ["thor","Ironman","spiderman"]
const dcHeros = ["Flash", "Shazam","Superman"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros);

// const allNewHeros = [...marvelHeros, ...dcHeros]
// console.log(allNewHeros);

const anotherArray = [1,2,3,[4,5,6],7,[8,9,[10,11]]]
// console.log(anotherArray[5][2][1]);

const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));

console.log(Array.from({name: "Shubham"})) //interesting for interview

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));


