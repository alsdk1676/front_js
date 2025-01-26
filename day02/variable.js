// 4. 데이터 타입(typeof()) === 원시타입
// - 숫자 타입(number) : 42, 3.14
// - 논리 타입(bool) : true, false
// - 문자열 타입(string) : "안녕", "하세요", "35", 'a', "a", ...
// - 객체 레퍼런스 타입(object) : Object, array, Math, Date, ...
// - undefined : 타입이 정해지지 않은 것을 의미한다.
// - null : 값이 정해지지 않은 것을 의미한다.

// var data1 = 42;
// console.log(data1);
// console.log(typeof(data1));

// var data2 = true;
// console.log(data2);
// console.log(typeof(data2));

// var data3 = "안녕하세요"
// console.log(data3);
// console.log(typeof(data3));

// var data4;
// console.log(data4);
// console.log(typeof(data4)); => undefined

// ---------------------------------------------------------------------------------------------------------
// var의 문제점
// 1. 같은 변수명을 사용해도 문제가 되지 않는다.
// 2. 호이스팅

// data1 = 10;
// var data1;

// data2 = 20;
// let data2;

// console.log(data2)

let data3 = 100; // 상수를 변경하려면 const 대신 let 사용
data3 = 20;
console.log(data3);























