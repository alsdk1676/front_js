// 이름 : 여러분들의 성함
// 국어 : 80점
// 수학 : 70점
// 영어 : 90점
// 과학 : 20점

// 평균, 총점 구하기
// if문을 사용해서 평균이 60점이면 합격, 60점 이하는 불합격을 출력하기

// 최종 문장
// OOO님의 이번 총점은 OO, 평균은 OO점으로 (합격 또는 불합격)입니다

const name = "서민아"
const kor = 80;
const math = 70;
const eng = 90;
const science = 20;
const total = kor + math + eng + science
const avg = (kor + math + eng + science) / 4

if(avg == 60){
  console.log("합격")
} if(avg <= 60){
  console.log("불합격")
}

const result = `${name}님의 이번 총점은 ${total}, 평균은 ${avg}으로 입니다. `

