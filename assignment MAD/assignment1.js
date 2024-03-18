//string methods
let str1 = "I am Wajeeha Habib, a passionate individual currently immersed in the world of technology. I am pursuing my Bachelor's degree in Software Engineering at COMSATS Attock Campus. ";
let str2="  Hi  ";
//String length
let length = str1.length;
let str1length="string length : ";
console.log(str1length + length);
//String charAt()
let func_charAt = str1.charAt(0);
console.log(func_charAt);
//String charCodeAt()
let func_charCodeAt= str1.charCodeAt(0);
console.log(func_charCodeAt);
//String at()
let func_at = str1.at(2);
console.log(func_at);
//String [ ]
let letter1 = str1[2];
console.log(letter1);
//String slice()
let func_slice = str1.slice(0, 18);
console.log(func_slice);
//String substring()
let func_substring = str1.substring(4, 18);
console.log(func_substring);
//String substr()
let func_substr = str1.substr(5, 13);
console.log(func_substr);
//String toUpperCase()
let func_toUpperCase= str1.toUpperCase();
console.log(func_toUpperCase);
//String toLowerCase()
let func_toLowerCase = str1.toLowerCase();
console.log(func_toLowerCase);
//String concat()
let func_concat = str1.concat(" ", str2);
console.log(func_concat);
//String trim()
let func_trim = str1.trim();
console.log(func_trim);
//String trimStart()
let func_trimStart = str1.trimStart();
console.log(func_trimStart);
//String trimEnd()
let func_trimEnd = str1.trimEnd();
console.log(func_trimEnd);
//String padStart()
let func_padStart = str2.padStart(4,"0");
console.log(func_padStart);
let func_padStart1 = str2.padStart(4,"x");
console.log(func_padStart1);
//String padEnd()
let padded_end = str2.padEnd(4,"0");
console.log(padded_end);
let padded_end1 = str2.padEnd(4,"x");
console.log(padded_end1);
//String repeat()
let func_repeat = str2.repeat(2);
console.log(func_repeat);
//Replacing String Content
let string_replace = str1.replace("wajeeha", "Amna");
console.log(string_replace);
//String ReplaceAll()
let func_replaceAll = str2.replaceAll("Hi","Hello");
console.log(func_replaceAll);
//String split()
let func_split=str1.split(",") ;
console.log(func_split);



//array methods
const Names = ["Wajeeha", "Amna", "Kinza", "Fatima"];
const Age=[20 , 24 , 25 , 22];
//Array splice()
let Names_splice =Names.splice(2, 0, "Laiba", "Kinza");
console.log(Names_splice );
/*
//Array toSpliced()
const Names_toSpliced = Names.toSpliced(0, 1);
console.log(Names_toSpliced);
//Array length
let Names_size = Names.length;
console.log(Names_size);
//Array toString()
let Names_toString = Names.toString();
console.log(Names_toString);
//Array at()
let Names_at = Names.at(3);
console.log(Names_at);
let Names_at1 = Names[2];
console.log(Names_at1);
//Array join()
let Names_join = Names.join(" * ");
console.log(Names_join );
//Array pop()
let Names_pop=Names.pop();
console.log(Names_pop);
//Array push()
let Names_push= Names.push("Laiba");
console.log(Names_push);
//Array shift()
let Names_shift=Names.shift();
console.log(Names_shift);
//Array unshift()
let Names_unshift=Names.unshift("Laiba");
console.log(Names_unshift);
//Array delete()
let Names_delete=delete Names[0];
console.log(Names_delete);
//Array concat()
const names_concat = Names.concat(Age);
//Array copyWithin()
const Names_copyWithin=Names.copyWithin(2, 0);
console.log(Names_copyWithin);
//Array flat()
const Arr_flat = [[1,2],[3,4],[5,6]];
const newArr_flat = Arr_flat.flat();
console.log(newArr_flat)

//Array slice()
const Names_slice = Names.slice(4,5);
console.log(Names_slice);