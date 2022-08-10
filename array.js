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



















