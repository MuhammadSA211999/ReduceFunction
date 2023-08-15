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
newArr = [1, 2, 3, 4, 5, 6, 7, 8]
const sum = newArr.reduce((prevValue, currentValue, currentItemIndex, mainArray) => {
    return prevValue + currentValue
}, 0)
// console.log(sum);

//get max by reduce and make callback for getmax value
//callback for get max value
const getMax = (a, b) => Math.max(a, b)
const numbers = [30, 40, 50, 60,]
const initialValue = 0
const max = numbers.reduce(getMax, initialValue)
// console.log(max);

const callbackFunc = (accumulator, currentValue) => {
    const total = accumulator + currentValue
    return total
}
const total = numbers.reduce(callbackFunc)
// console.log('total', total);

//total of an object arrays
const objArray = [{ x: 3 }, { a: 6 }, { b: 9 }, { c: 3 },]
const totalObjArr = objArray.reduce((accumulator, currentValue) => {
    let total = 0
    for (let x in currentValue) {
        total = currentValue[x] + accumulator
    }
    return total
}, initialValue)
// console.log('obj array', totalObjArr);


const countDuplicate = (names) => {
    const countedNames = {}
    for (const name of names) {
        const currCount = countedNames[name] ?? 0;
        countedNames[name] = currCount + 1;
    }
    return countedNames
}
const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
const countedObj = countDuplicate(names)
// console.log(countedObj);

const arrayLike = {
    // length: 2,
    0: 2,
    1: 3,  // array length 2 here
    2: 4,
    3: 99,
    length: 2,
};
// console.log('in array like', Array.prototype.reduce.call(arrayLike, (x, y) => x + y));

const friends = [
    { name: "Anna", books: ["Bible", "Harry Potter"] },
    { name: "Bob", books: ["War and peace", "Romeo and Juliet"] },
    { name: "Alice", books: ["The Lord of the Rings", "The Shining"] },
];
const groups = friends.reduce((acc, obj) => {
    const key = obj.name;
    const curGroup = acc[key] ?? [];
    return { ...acc, [key]: [...curGroup, obj] };
}, {});
// console.log(groups);
// const groups = Object.groupBy(friends, () => obj.name);


const roots = newArr.flatMap((val) => {
    if (val < 0) return [];
    const root = Math.sqrt(val);
    if (Number.isInteger(root)) return [root, root];
    return [val];
});
// console.log(roots);

//reduce recieves a array of functions and return a new function
const pipe = (...functions) => (initialValue) => functions.reduce((acc, currFunc) => {
    console.log('acc', acc);
    console.log('d or t', currFunc);
    console.log('value', currFunc(acc));
    return currFunc(acc)
}, initialValue)

const double = x => x * 2
const triple = x => x * 3
const quadrple = x => x * 4
const multiple2 = pipe(double, triple)
const duobleValue = multiple2(8)
console.log('final', duobleValue);
