const promise = new Promise((resolve, reject) => {
  let check = false; // console error이기 때문에 빨간 글씨로 출력됨 (catch에서 error 잡음 - reject)
  // let check = true; // 결과 성공!
  if(check){
    resolve("결과 성공!")
  }else{
    reject("결과 실패!")
  }
})

promise.then((result) => {console.log(result)}).catch((error) => {console.error(error)}) // resolve의 결과가 then에서 출력됨
