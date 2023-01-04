//==============
//An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
//Implement a function that determines whether a string that contains only letters is an isogram. 
//Assume the empty string is an isogram. Ignore letter case.
//===============

function isIsogram(str){
  return str.toLowerCase().split('').filter((item, pos, arr)=> arr.indexOf(item) == pos).length == str.length;

}

console.log( isIsogram("Dermatoglyphics")) //, true;
console.log( isIsogram("isogram")) // true;
console.log( isIsogram("aba")) // false, "same chars may not be adjacent";
console.log( isIsogram("moOse")) // false, "same chars may not be same case";