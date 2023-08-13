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
