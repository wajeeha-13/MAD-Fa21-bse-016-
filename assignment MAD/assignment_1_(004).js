let string_1 = "I am Ammar Fayyaz. I am studying Software Engineering at COMSATS Attock Campus. ";
let string_2 = "My favourite hobby is watching movies";

// String methods
let length = string_1.length;
console.log("String length:", length);

let string_1_charAt = string_1.charAt(0);
console.log(string_1_charAt);

let string_2_charCodeAt = string_2.charCodeAt(0);
console.log(string_2_charCodeAt);

let string_at = string_1.charAt(8);
console.log(string_at);

let string_at1 = string_1[3];
console.log(string_at1);

let string_slice = string_1.slice(0, 19);
console.log(string_slice);

let string_substring = string_1.substring(5, 11);
console.log(string_substring);

let string_substr = string_1.substr(5, 12);
console.log(string_substr);

let string_toUpperCase = string_2.toUpperCase();
console.log(string_toUpperCase);

let string_toLowerCase = string_2.toLowerCase();
console.log(string_toLowerCase);

let string_concat = string_1.concat(" ", string_2);
console.log(string_concat);

let string_trim = string_1.trim();
console.log(string_trim);

let string_trimStart = string_2.trimStart();
console.log(string_trimStart);

let string_trimEnd = string_1.trimEnd();
console.log(string_trimEnd);

let string_padStart = string_2.padStart(10, "0");
console.log(string_padStart);

let string_padStartt = string_2.padStart(10, "x");
console.log(string_padStartt);

let padded_end = string_2.padEnd(3, "0");
console.log(padded_end);
let padded_end1 = string_2.padEnd(3, "x");
console.log(padded_end1);

let string_repeat = string_2.repeat(2);
console.log(string_repeat);

let string_replace = string_2.replace("movies", "series");
console.log(string_replace);

let string_replaceAll = string_1.replaceAll("I", "we");
console.log(string_replaceAll);

let string_split = string_1.split(".");
console.log(string_split);


// Array methods
const Cars = ["Audi", "BMW", "Ford"];
const Numbers = [10, 20, 30, 40];

let Cars_splice = Cars.splice(1, 0, "Honda", "Toyota");
console.log(Cars_splice);

const Cars_toSpliced = Cars.slice(0, 1);
console.log(Cars_toSpliced);


let Cars_size = Cars.length;
console.log(Cars_size);

let Cars_toString = Cars.toString();
console.log(Cars_toString);

let Cars_at = Cars.at(3);
console.log(Cars_at);

let Cars_at1 = Cars[2];
console.log(Cars_at1);

let Cars_join = Cars.join(" * ");
console.log(Cars_join);

let Cars_pop = Cars.pop();
console.log(Cars_pop);

let Cars_push = Cars.push("Ferrari");
console.log(Cars_push);

let Cars_shift = Cars.shift();
console.log(Cars_shift);

let Cars_unshift = Cars.unshift("Ferrari");
console.log(Cars_unshift);

delete Cars[0];
console.log(Cars);

const names_concat = Cars.concat(Numbers);
console.log(names_concat);

const Cars_copyWithin = Cars.copyWithin(3, 3);
console.log(Cars_copyWithin);

const Arr_flat = [[10, 20], [30, 40], [50, 60]];
const newArr_flat = Arr_flat.flat();
console.log(newArr_flat);


const Cars_slice = Cars.slice(1, 2);
console.log(Cars_slice);
