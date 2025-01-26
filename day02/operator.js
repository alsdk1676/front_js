// 연산자
// ++, --
// let data1 = 100;
// console.log(++data1); // 101
// console.log(data1++); // 100
// data1--;
// console.log(data1);

// let data2 = true;
// console.log(!data2);

// 이항 연산자
// +
// let str1 = "오늘은 JS 2일차!😎";
// let str2 = "너무 재밌다!!😄";
// let num1 = 8.16;
// let num2 = 2024;

// 문자열로 연결
// console.log(str1 + num1); // 문자열(문자와는 다름)
// 결과 : 오늘은 JS 2일차!😎8.16

// 좌결합성에 의해 연산 후 연결된다.
// console.log((num1 + num2 + str2)); // num1과 num2 먼저 연산한 후 str2 연결!
// 결과 : 2032.16너무 재밌다!!😄

// "/" : 나누기 연산자
// let num3 = 50;
// let num4 = 10;
// console.log(num3 / num4); // 5

// "%" : 나머지 연산자
// console.log(num3 % num4); // 0

// 누적복합연산자
// +=, -=
// let data5 = 100;
// data5 = data5 + 100;
// data5 += 100;
// data5 = dtata5 - 50;
// data5 -= 50;
// console.log(data5);

// let data6 = "안녕";
// let data7 = "하세요😎";

// data6 += data7;
// data6 = data6 + data7;

// console.log(data6);

// 5. 관게연산자
// ==, ===(타입까지 비교)
// let data8 = 100;
// let data9 = "100";
// let data10 = 101;

// console.log(data8 == data9);
// console.log(data8 == data10);

// 6. 논리연산자
// true || true // true
// true || false // true
// false || true // true
// false || false // false

// let isTrue = 10 != 11;
// isTrue && 10 == 10; // true
// isTrue && 10 != 10; // false
// isTrue && !isTrue; // false
// !isTrue || 10 != 10 // false
// let result = isTrue || 10 == '10' && 10 != 11; // true
// console.log(result) // 값(대입연산자 포함)이 들어갔으니 true

// false가 아니지만 false로 취급하는 값
// 0, "", 0.0

// || : 앞에 값이 false면 뒤에 값을 초기값으로 넣는다.
// let data = ""; // 값이 없으면 false, 값이 있으면 true
// console.log(data || 20);

// && : 앞에 값이 false면 뒤에 문장을 실행하지 않는다. (성능 향상을 위해)
// let data1 = 0;
// 10 === "11" && ++data1;
// console.log(data1);

// 삼항 연산자( ? : )
// console.log(10 == 11 ? "같습니다." : "아닙니다.");

// let data1 = "";
// let data2 = 20;

// let data3 = data1 + data2 ? "정답" : "거짓" // data3는 값이 존재하기 때문에 true
// console.log(data3);

// false가 아닌데 false 취급되는 값
console.log(Boolean(100)); // true
console.log(Boolean(" ")); // true

console.log(Boolean("")); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false








