// for(초기식; 조건식; 증감식){}
// ex) for(let i = 0; i < 10; i++){
// 	조건식이 참일 때 실행할 문장;
// }

// 이름 10번 출력하기
// for(let i = 0; i < 10; i++){
//   console.log("서민아");
// }

// for(let i = 0; i < 10; ++i){
//   console.log("서민아");
// } 

// 1부터 10까지 출력
for(let i = 0; i < 10; i++){
  console.log(i+1);
  if(i == 5){ break; }
}

for(let i = 0; i < 10; i++){
  if(i == 5){ continue; } // continue가 다음 줄에 있으면 이미 실행한 후 만나는 것이기 때문에 건너띄지X (이 위치에 없으면 의미 X)
  console.log(i+1);
}
