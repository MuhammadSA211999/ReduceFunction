/*Iterative array: An iterative arrays is an array that every slot/item accessed one by one  by looping.
Kichu method main array ke poriborton kore na, main array er refference nijer moddhye  copy kore kaj kore ebong notun arekti reffrence array return kore, ei reffrence main array er refference ke point/refer kore.
Array er primitive type valuer kkhetre value gulu notun array-te copy hoy.
Mutating array method ke non-mutate e convert korar jonno existing array ke kuno non-muatate method othoba spread-syntex diye access kore nite hoy: arr.slice().copyWithin(1,2,3)
const value=[...arr].copywithin(1,2,3)
//These method some, every, find, findIndex, findLast, and findLastIndex do not always invoked the callback function, they stop iteration as soon as they return value is detremined.
*/

//kun ekti item arrayte ache kina ta check korar jonno: includes()/indexOf() method er vitore item er nam argument hisabe pass korte hoy; includes()=>boolean and indexOf()=> int/-1 return kore
const fruits = ['ban', 'apl', 'jack']
const result = fruits.indexOf('gg')
// console.log('ban'); // array te item takle index, na takle -1 return kore
const blResult = fruits.includes('apl')
console.log(blResult); //array te item takle true, na takle false return kore

