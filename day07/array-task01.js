// 35분
// 1) 1~10까지 Array객체에 담은 후 짝수만 출력하기
// const datas = new Array(10).fill(0);
// // 통째로 return값, 새로운 배열로 만들어야 되기 때문에 map 사용
// const result = datas.map((data, i) => i + 1).filter((data) => data % 2 == 0);
// console.log(result);

// 2) 한글을 숫자로
// ex) "일이삼사" -> "1234"
// const hangles = "공일이삼사오육칠팔구";
// .indexOf
// const input = "일칠팔오";
// console.log(hangles.indexOf("일"))
// let result = input.split("").map((data) => hangles.indexOf(data)).join("") // [ 1, 7, 8, 5 ]
// console.log(result)

// 3)숫자를 한글로
// ex) "1234" -> "일이삼사"
// const hangles = "공일이삼사오육칠팔구";
// const input = "1576";

// // console.log(hangles.charAt(input)) // "일"로 인식
// let result2 = input.split("").map((data) => hangles.charAt(data)).join("")
// console.log(result2);

// 4) 1~100까지 합을 출력
// 100칸짜리 배열을 만든다. => new Array().full() 사용
const arr1 = new Array(100).fill(0);
// 결과값을 바꾸는 반복문 => map
let result = 0;
// arr1.map((data, i) => i + 1) ==> [1, 2, 3, 4, 5, 6, ..., 100]
arr1.map((data, i) => i + 1).forEach((data) => result += data); // 통째로 리턴 값 => 배열 => 누적합 가능
console.log(result);


// 5) 문자열을 반대로 출력하기 .reverse()
// "apple"
let result3 = "apple".split("").reverse().join("");
// "apple".split("") ==> ["a", "p", "p", "l", "e"]
console.log(result3);


// 6) 전화번호를 파라미터로 받아서 파싱하기
// ex) 010-1111-4455
// result) 010-****-4455

const phone = "010-1111-4455"
let parsePhone = phone.split("-");
phone.split("-")[1] = "****";
parsePhone[1] = "****"
console.log(parsePhone.join("-"));

let parsePhone2 = phone.replaceAll("1", "*").replace("*", 1); // replace는 처음 나오는 문자만 변경
console.log(parsePhone2)