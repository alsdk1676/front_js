const animals = {
  cat : "야옹이",
  dog : "누렁이",
  cow : "얼룩이",
  tiger : "어흥이"
}

const animals2 = animals;
animals.camel = "낙둥이";

// console.log(animals)
// console.log(animals2)


// spread 문법
const animals3 = {...animals, bird : "둘기"}
// console.log(animals3)

// Object.assign(target, source);
const animals4 = Object.assign({}, animals);
animals4.otter = "수달이"
// 깊은 복사
// 원본 데이터는 그대로, 새로운 데이터 추가

console.log(animals)
console.log(animals4)

