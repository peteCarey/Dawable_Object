// Twig Coding Challenge - Peter Carey
// groupArrayElements([1, 2, 3, 4, 5],3);
const twig =[1, 2, 3, 4, 5];
let N = 3 ;
let arraysNeeded;
const sub = []; // new array
let start;
let end;
let arrayLength;
let elementsInArray;

arrayLength = twig.length;
elementsInArray = Math.round(arrayLength/N);
arraysNeeded = N;
remainder = arrayLength % N; // remainder of division
start = 0;
end = elementsInArray;

for (i = 0; i <  arraysNeeded; i++){
  sub[i] = twig.slice(start, end); 
  start = start + elementsInArray
  end = end + elementsInArray;
};

if ((remainder > 0) && (start < arrayLength)){ 
   sub[i] = twig.slice(start, end); 
 }
console.log(sub);

