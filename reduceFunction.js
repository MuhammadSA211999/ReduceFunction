/* Al things about advance JS topic reduce function
array.reduce() method main array ke change kore na
ei method diye array er sokol complex kaj kora zay
reduce() method duita parametre recieve kore, 1. callback function, 2. default value
reduce() method er callback function ti 4 ti parametre recieve kore:
1. preveous value, zokon current index hobe 1 and 1 index er value hocce 2 previous index hobe 0 and 0 index er value hocce 1
2. current value, reduce function loop calay. loop e zokhon index 0 tokhon currentValue hocce 1, zokhon index 3 tokhon currentValue hocce 4
3. arry te currentValue er index return kore, zemon currentValue zokhon 6 currentIndex tokhon 5, karon array er index 0 theke shuru hoy.
4. reduce() method er callback function main array keo return kore
**array.reduce(callbackFunc, defaultValue)
*/ 
newArr=[1,2,3,4,5,6,7,8]
const sum=newArr.reduce((prevValue,currentValue, currentItemIndex,mainArray)=>{
    return prevValue+currentValue
},0)
console.log(sum);

//get max by reduce and make callback for getmax value
//callback for get max value
const getMax=(a,b)=>Math.max(a,b)
const numbers=[30,40,50,60,]
const initialValue=0
const max=numbers.reduce(getMax,initialValue)
console.log(max);

const callbackFunc=(accumulator,currentValue)=>{
    const total=accumulator+currentValue
    return total
}
const total=numbers.reduce(callbackFunc)
console.log('total',total);

//total of an object arrays
const objArray=[{x:3},{a:6},{b:9},{c:3},]
const totalObjArr=objArray.reduce((accumulator,currentValue)=>{
   let total=0
    for(let x in currentValue){
        total=currentValue[x]+accumulator
    }
    return total
},initialValue)
console.log('obj array',totalObjArr);


const countDuplicate=(names)=>{
    const countedNames = {}
    for (const name of names) {
      const currCount = countedNames[name] ?? 0;
      countedNames[name] = currCount + 1;
    }
    return countedNames
}
const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
const countedObj=countDuplicate(names)






