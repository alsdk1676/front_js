// 배열을 생성하는 방법
const array = [10, 20, 30, 40, 50, 60];
// console.log(array[4])
const array2 = new Array();
const array3 = new Array(10).fill(false); // 길이를 알고 있을 때 (10칸 짜리 array)
// const array4 = Array.of("1", "2", "3") // ['1', '2'. '3']/

// console.log(array2);
// console.log(array3);`
// console.log(array4);

// 길이를 확인
// console.log(array3.length)

// .split() , string (문자의 나열)
// 전달된 매개변수를 기준으로 잘라서 배열로 리턴한다.
// 아무것도 전달하지 않으면 모두 자른다.
const phone = "010-9999-5555";
let array5 = phone.split("-")
// console.log(array5); // [ '010', '9999', '5555' ]
// console.log(array5[1]) // 9999

// .join() , array
// let phoneNumber = array5.join(""); // 01099995555 ("" : 쉼표 없애기)
let phoneNumber = array5.join("="); // 010=9999=5555
// console.log(phoneNumber)

// .replace(바꾸고 싶은 값, 바뀌는 값) , string
// .replaceAll(바꾸고 싶은 값, 바뀌는 값), string
// 제일 먼저 만나는 값을 변경한다.
// const result = phone.replaceAll(9, "*") // 010-****-5555
const result = phone.replaceAll("-", "*") // 010*9999*5555
// console.log(result);

// 추가
// .push() , array
// 기존에 배열에 값을 마지막 추가한다.
const arr1 = ["서민아", "홍길동", "장보고"];
arr1.push("김철수");
arr1.push("흰둥이", "짱구");
// console.log(arr1)

// .concat() , array
// 2개의 배열을 합쳐서 *새로운 배열*로 리턴한다. (주소값 변경)
const arr2 = ["기서", "병욱"];
const arr3 = arr1.concat(arr2);
// console.log(arr3)

// .unshift(), array
// 맨 앞에 값을 추가하는 메서드
arr3.unshift("김영희")
// console.log(arr3)

// 제거
// .pop()
// 맨 마지막의 요소를 추출, 제거와 동시에 마지막 값을 리턴
// console.log(arr3.pop()) // 병욱
// console.log(arr3)

// .shift() , array
// 맨 앞의 요소를 추출, 맨 앞의 값을 리턴
// console.log(arr3.shift())
// console.log(arr3)

// .slice(startIndex, endIndex) , array 
// 단 매개변수를 1개 전달하면 start부터 끝까지 가져온다.
// 얕은 복사(기존의 배열 값 변화X), 새로운 배열로 리턴한다.

// (endIndex 전까지 가져옴)
// console.log(arr3.slice(2, 5));
// console.log(arr3.slice(4));
// console.log(arr3.slice(-2)); // 맨 뒤 2개 가져옴
// console.log(arr3.slice(-4, -1)); // 마지막 인덱스 전부터 앞으로 4개 가져옴
// console.log(arr3)

// .splice(startIndex, deleteCount, addItems), array 
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr4.splice(2, 3)); // [ 3, 4, 5 ]
// console.log(arr4) // [1, 2, 6, 7, 8, 9, 10 ]
// console.log(arr4.splice(3, 0, 10)) // [3]번 인덱스 자리(4)에 10 넣어줌(변경) => [1, 2, 3, 10, 4, 5, 6, 7, 8, 9, 10]
// console.log(arr4.splice(4, 1, 50)) // [4]번 인덱스 자리(5)에 50 추가(추가) => [1, 2, 3, 10, 50, 5, 6, 7, 8, 9, 10]

// 정렬, 유니코드 방식으로 정렬 (글자 정렬)
// .sort()
// 무작위로 들어간 데이터 값을 정렬하는 함수
// console.log(arr5.sort()) // 유니코드 방식으로 정렬
const arr5 = [150, 100, 20, 30, 500, 10, 200, 30, 70, 80] // 앞에 값이 크면 뒤로 넘김
// console.log(arr5.sort((a, b) => a - b)) // 오름차순

// .reverse() , array
// console.log(arr5.sort((a, b) => a - b).reverse()) // 정렬한 후 뒤집기

// ------------------------------------------------------------------------------------
// 배열의 고차함수
// .forEach((data, i, array) => {}) - 반복문
const arr6 = [10, 20, 30, 40, 50, 60, 70];
arr6.forEach((data, i, array) => { // i :  index의 약자
  // arr6.forEach((i, data, array) => { // i 위치 : data (순서가 중요!!)
  // console.log(data); // 결과가 반복문처럼 출력됨 (array 길이가 끝날때까지 반복)
  // console.log(i); // 인덱스 값 
  // console.log(array); // 배열 전체
  // array[i] *= array[i] // 기존 배열 값 제곱
})
// .forEach()을 사용하여 기존 값을 제곱으로 변경하기
// i를 활용하여 iterable한 값에 접근할 수 있다.
// console.log(arr6)

// map(()=>{})
// 반복을 통해 값에 접근하고, 새로운 배열로 return 한다.
// *반드시 return 값이 있어야 한다.*
// let result = arr6.map((data, i , datas) => {
//   return data + 10 
// })

// let result = arr6.map((data, i , datas) => data + 10 ) // 중괄호 생략하면 통째로 return 값 (return 키워드 생략)
// console.log(result);

// .filter()
// 조건이 true인 값만 모아서 새로운 배열로 리턴한다.
// 반드시 return 값이 필요하다. (중괄호 생략)

let result2 = arr6.filter((data, i, datas) => data % 4 == 0) // 4의 배수만 return (return이 있으니까 통째로 return 값)
// console.log(result2);


