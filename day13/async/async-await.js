// async await (ES8) 동기로 대기 없이 바로 합류하기 위한 함수

// fetch 함수를 원하는 타이밍에 실행시키기 위해 함수로 만들기
const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users") // pending 상태
  const datas = await response.json()
  return datas; // datas의 결과값 : promise 타입
}

getUsers().then((result) => console.log(result)) // getUsers의 결과값 : promise 타입
