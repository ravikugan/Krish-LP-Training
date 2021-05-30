const qs = require("./QuickSort");

let word1 = 'race';
let word2 = 'carefree';

let sortWord1 = qs.quickSort(word1.split(""),0,word1.length-1); // Inside the split method if empty parameter are not given function 
let sortWord2 = qs.quickSort(word2.split(""),0,word2.length-1); // will not work. 

console.log(sortWord1+'\n'+sortWord2);

if(sortWord1.toString()===sortWord2.toString())
{
    console.log('The entered words are an anagram');
}
else
{
    console.log('The entered words are not an anagram');
}


