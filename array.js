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
