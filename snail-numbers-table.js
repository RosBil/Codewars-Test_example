
const snailObj = [{1:1,2:2,3:3,4:4,5:5},{2:2},{3:3},{4:4},{5:5} ]

function snailTable(size) {
  const baseArr = [];
  let obj = {}

  for (let x = 0; x <= size; x++) {
    for (let y = 0; y <= size; y++) {
      obj = new Object({y})
    }
    
    baseArr.push({x}, obj);
    console.log(baseArr)
  }
  return baseArr;
}
console.table(snailTable(5));