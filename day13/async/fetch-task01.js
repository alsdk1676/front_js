// https://jsonplaceholder.typicode.com/users
// 1. 데이터 요청해서 콘솔에 users 출력하기
// 2. users에 name만 콘솔에 출력하기

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  // .then((result) => console.log(result))
  .then((result) => result.map(({name}) => name))
  // .then((result) => result.map((user) => user.name)) // 기존 값을 반복 돌려서 바꾸기
  .then((names) => console.log(names))
  .catch((error) => console.error(error))


  // .then((response) => response.json())
  // .then((emails) => emails.slice(0, 10))
  // .then((result) => result.map((comment) => comment.email))
  // .then((emails) => console.log(emails))
  // .catch((error) => console.error(error))
