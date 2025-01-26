// .indexOf() : 해당 문자의 index 번호(위치)를 리턴하는 메서드
// console.log("abcdef".indexOf("c")) => 2

// .charAt() : 해당 인덱스의 값을 리턴하는 메서드
// console.log("abcdef".charAt(2)) => c

// .length : 문자열의 길이
// let srt1 = "abcd";
// console.log(str1.length)
// for(let i = 0; i < str1.length; i++){
//   console.log(i)
// }


// 실습 30분

// 브론즈 
// 어떤 값을 받으면 값을 출력해주는 함수
// const print = (value) => {
//   console.log(value);
// }

// print("안녕하세요");
// print(20);

// 3개의 정수를 빼주는 함수
// const subtract = (num1, num2, num3) => {
//   return num1 - num2 - num3;
// }
//   let result = subtract(100, 20, 10);
//     console.log(result);


// 실버
// 홍길동을 n번 출력해주는 함수
// const printByHong = (num) => { // 너가 num값 입력해!
//   let hong = "홍길동";
//   for(let i = 0; i <num; i++){
//     console.log(hong)
//   }
// }

// printByHong(4) // 입력한 값만큼 반복
// 그대로 사용하면 바로 출력(return 값이 없기 때문에 출력 기능만 가짐) => return 값으로 보면 안된다!


// 골드
// 1 ~ n까지 홀수만 출력해주는 함수
// const printOdd = (num) => {
//   for(let i = 0; i < num; i++){
//     let odd = i % 2 == 1;
//     if(odd) { console.log(i) };

//     // let even = num % 2 == 0;
//     // if(even) { continue };
//     // console.log(i)
//   }
// }
// printOdd(10);


// 문자열을 입력받고 원하는 문자의 개수를 구해주는 함수
// ex) getCount("abcabc", "a") -> return 2
// 1. 문자열을 받는다. (매개변수)
// 2. 문자도 받는다. (매개변수)
// 3. 함수 정의한다.
// 4. 문자열의 길이 .length를 이용해서 반복문을 돌린다.
// 5. charAt()을 사용한다.
// 6. 문자랑 비교한다.
// 7. 같으면 개수를 센다.
// 8. 값을 리턴한다.

// const getCountCharacterInContent = (content, char) => { // content : 사용자가 입력한 문자열, char : 문자 한 개
//   let count = 0;
//   for(let i = 0; i < content.length; i++){ // content의 길이(content.lenght=3)만큼 반복 돌리기
//     if(content.charAt(i) == char){
//       count++; // 찾을 때마다 count 증감시키기
//     }
//   }
//   return count;
// }

// let count = getCountCharacterInContent("abcabcabcabc", "a");
// console.log(count);


// 플레티넘
// 한글을 정수로 바꿔주는 함수 (일공이사 -> 1024)

// 공일이삼
// const changeToInt = (hangle) => { // 한글 입력받기
//   let hangles = "공일이삼사오육칠팔구"
//   let result = ""; // 빈 문자열을 사용해 출력된 값을 한 줄로 연결해주기
//   for(let i = 0; i < hangle.length; i++){ // 입력받은 한글의 길이만큼 반복문 돌리기
//     result += hangles.indexOf(hangle.charAt(i)) // 반복 돌리기

//     // hangles에서 indexOf라는 메서드로 charAt(i)가 어디있는지 물어보기
//     // 존재하지 않으면 -1 출력
//     // 하나의 변수에 4개를 다 담기 위해선 누적합 필요(result)
//     // result는 값이 존재하지 않기 때문에 NaN
//     // NaN을 방지하기 위해 초기값을 넣는데 0을 넣으면 모든 값이 더해지기 때문에
//     // "" 빈 문자열을 사용
//   }
//   return result;
// }
// let result = changeToInt("공삼육칠");
// console.log(result);

// 정수를 한글로 바꿔주는 함수 ("1024" -> 일공이사)
// "1026"
const changeToHangle = (number) => {
  let hangles = "공일이삼사오육칠팔구";
  let result = "";
  for(let i = 0; i < number.length; i++){
    result += hangles.charAt(number.charAt(i));
    // 1은 1번 자리에 위치한 "일", 5는 5번 자리에 위치한 "오"를 넘겨주면 됨
    // charAt(i)가 값을 넘겨줌
  }
  return result;
}

let result = changeToHangle("2589");
console.log(result);
  