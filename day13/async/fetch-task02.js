// async await
// https://jsonplaceholder.typicode.com/todos
// getTitles
// todos에서 title만 5개 가져오기 (0~4)
// 값으로 가져와서 가져온 데이터를 "제목 : title" 내용으로 변경하여 출력하기

const getTitles = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos")
  if(!response.ok) return; // 상태 코드가 잘못됐을 경우에도 return
  const datas = await response.json();
  return datas;
}

// 데이터는 promise 타입으로 감싸져있기 때문에 getTitles 통째로 promise 타입
// promise 타입은 기본적으로 성공과 실패를 받는다. (resolve, reject)
// reslove는 then에서 받음 => then에서는 성공적인 데이터를 받는다.
const titles = getTitles().then((datas) => datas.map((todo) => todo.title)) // 통째로 return값 => title 값만 들어가 있는 배열로 보기
// console.log(titles) // = 앞은 동기, = 뒤는 비동기 코드 => 또 다시 pending 상태 => then으로 받아야 함
titles
  .then((titles) => titles.slice(0, 5))
  .then((titles) => titles.map((title) => `제목 : ${title}`))
  .then((titles) => titles.forEach((title) => { console.log(title) }))
  .catch((error) => console.error(error))
