// 실습 복습
// 1) 1~10까지 Array객체에 담은 후 짝수만 출력하기
// const datas = new Array(10).fill(0);
// const result = datas.map((data, i) => i + 1).filter((data) => data % 2 == 0);
// result.forEach((data, i) => {
//   console.log(data);
// })


// 2) 한글을 숫자로
// ex) "일이삼사" -> "1234"
// const hangles = "공일이삼사오육칠팔구"
// const input = "일삼오칠"
// console.log(hangles.indexOf("일"))
// const result = input.split("")
// console.log(result)
// let result = (input.split("").map((data) => hangles.indexOf(data)).join(""))
// console.log(result);


// 3)숫자를 한글로
// ex) "1234" -> "일이삼사"
const hangles = "공일이삼사오육칠팔구"
const input = "1357"
// console.log(hangles.charAt("0"))
// console.log(hangles.split(""))
// const result = input.split("").map((data) => hangles.charAt(data)).join("")
// console.log(result);


// 4) 1~100까지 합을 출력
// 100칸짜리 배열을 만든다. => new Array().full() 사용
// const arr1 = new Array(100).fill(0);
// let result = 0;
// arr1.map((data, i) => i + 1).forEach((data) => result += data);
// console.log(result)


// 5) 문자열을 반대로 출력하기 .reverse()
// "apple"
// let result3 = "apple".split("").reverse().join("")
// console.log(result3);


// 6) 전화번호를 파라미터로 받아서 파싱하기
// ex) 010-1111-4455
// result) 010-****-4455
const phone = "010-1111-4455"
let phone2 = phone.split("-")
// console.log(phone2);
phone.split("-")[1] = "****"
phone2[1] = "****"
console.log(phone2.join(""));