const animals = {
  cat : "야옹이",
  dog : "누렁이",
  cow : "얼룩이",
  tiger : "어흥이"
}

// 2분
// console.log(animals.cat)
// console.log(animals.dog)
// console.log(animals.cow)
// console.log(animals.tiger)

// 키 값 분해하기
const { cat, dog, cow, tiger } = animals;
// console.log(cat)
// console.log(dog)
// console.log(cow)
// console.log(tiger)

// 비구조 할당
// 여러 개를 한 번에 선언하고 싶을 때
// let [one, two, three, four] = [10, 20, 30, 40];
// console.log(one) // 10
// console.log(two) // 20
// console.log(three) // 30
// console.log(four) // 40

// let arr = [30, 40, 50, 60];
// const [one, two, three, four] = arr;
// console.log(one) // 10
// console.log(two) // 20
// console.log(three) // 30
// console.log(four) // 40