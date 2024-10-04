// spread (ES6 문법)
// 1depth 깊은 복사
// 배열 객체

// const animals = {
//   cat : "야옹이",
//   dog : "누렁이",
//   cow : "얼룩이",
//   tiger : "어흥이"
// }

// const animals2 = animals;
// animals2.camel = "낙둥이"; // animals2에 "낙둥이" 추가
// const animals2 = {...animals, camel : "낙둥이"};
// ...animals : animals 다 들고온후 camel 추가

// console.log(animals)
// console.log(animals2)

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

// let numbers = arr1 + arr2 + arr3;
// console.log(numbers.replaceAll(",", "").split("")); // 메서드 여러 번 사용, 불편

let numbers = [ ...arr1, ...arr2, ...arr3];
console.log(numbers);
// console.log(...arr1) // 1 2 3
// console.log(...animals) // 객체는 순서가 없기 때문에 오류