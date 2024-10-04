// https://jsonplaceholder.typicode.com/posts

// get 요청 (아무것도 보내지 않음)
// fetch(backendUrl)
// fetch(backendUrl, option)

// 페이지가 아닌 데이터를 요청했기 때문에 fetch 코드는 "비동기" 코드
fetch("https://jsonplaceholder.typicode.com/posts") // Promise { <pending> } pending : 동기 코드로 합류시켜 줄 떄까지 대기상태
  .then((response) => response.json()) // 기존의 데이터를 우리가 알고있는 객체로 바꿔서 가져오기 위해서 .json()추가
  // .then((result) => console.log(result))

// https://jsonplaceholder.typicode.com/albums
fetch("https://jsonplaceholder.typicode.com/albums") // Promise
  .then((response) => {
    if(!response.ok){ // 서버 통신이 실패했을 때 => 더 이상 서버를 돌릴 필요 없음
      throw new Error(`response Error : ${response.status}`) // => throw로 에러 날림
    }
    // .json() response 객체를 -> object 객체로 바꿔서 데이터를 리턴해주는 메서드
    return response.json(); // fetch부터 여기까지 통째로 return 값
  })
  // .then((result) => {console.log(result)})
  .then((result) => result.map((album) => album.title)) // title만 가져오기, 배열은 반복문 사용 가능
  .then((titles) => console.log(titles))
  .catch((error) => { // 실패했을 때 reject쪽에서 받을 수 있게 catch쪽에서 error 잡기
    console.error(error)
  })

