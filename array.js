var array = [
  { category: 'Input', field: 0, value: '17' },
  { category: 'Input', field: 0, value: '5' },
  { category: 'Input', field: 0, value: '8' },
  { category: 'Input', field: 5, value: '1' },
  { category: 'Input', field: 5, value: '4' },
  { category: 'Input', field: 0, value: '1' }
];

const obj = array.reduce((val, cur) => {
  if (val[cur.field]) {
  console.log("true")
    val[cur.field].push(cur.value);
  } else {
  console.log("false")
    val[cur.field] = [cur.value];
  }
  return val;
}, {});

console.log(obj)

const res = Object.keys(obj).map(key => ({
  category: 'Input',
  field: parseInt(key),
  value: obj[key]
}));

//Remove Duplicates

//ES6
var uniqueArray = [... new Set(array)]

//Using Filters
var unique = array.filter((x,i,a) => a.indexOf(x) === i) 

//using reduce
const newArray = arr.reduce((previous, actual) => {
if (!previous.includes(actual)) {
previous.push(actual)
}
return previous
}, [])

//Without Inbuilt
function removeDuplicates(array){
    var newArray = [];
    for(var i = 0 ; i < array.length; i++){
        if(newArray.indexOf(array[i]) === -1){
            newArray.push(array[i])
        }
    }
    return newArray;
}

//Find Max number in array

//ES6
var max = Math.max(...[1,2,3,3,4,4,5,6,7,7])

Using Apply
var max = Math.max.apply(null,array)

//Sort an array of numbers

//Inbuilt sort method
array.sort = (a,b) => { return a.value-b.value}

//Without Inbuilt
  function sortArray(arr1){
  var bigger,smaller = "";
  for (var i = 0; i < arr1.length; i++) {
      for (var m = i+1 ; m < arr1.length ; m++) {
          if(arr1[i] > arr1[m]){
              bigger = arr1[i];
              smaller = arr1[m];
              arr1[i] = smaller;
              arr1[m] = bigger;
          }
      }
  }
  return arr1;
}

//Most frequent item in array or print each occurence ofarray items

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; 

  mostFreq = (array) => {
      let obj = {}, most = { occurence: '', frequency: 0 };
      for(const v of array){
          obj[v] ? obj[v]++ : obj[v]=1;
          if(obj[v] > most.frequency) {
              most.occurence = v;
              most.frequency = obj[v];
          }
      }
      return obj;    
  };
mostFreq(arr1);

//print sum and product of array

var sum = arr.reduce((a, b) => a + b);

var prod = arr.reduce((a, b) => a * b)

//Get Index of specific element of array or binary search
function binarySearch(arr, value) {
  return arr.indexOf(value)
}

//  Without built in
function search(array,val){
  for(var i=0;i<=array.length;i++){
    if(array[i]==val){
      return i;
    }
  }
}




















