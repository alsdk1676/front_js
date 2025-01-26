// 옵셔널 체이닝(Optional chaining)
const movie = {
  name : "오펜히이머",
  datail : {
    price : "50000",
    date : "20240920"
  }
}

const movie2 = {
  name : "마블",
  detail : {
    price : "100000"
  }
}

// movie를 받았을 때 movie 가격 출력하기
function printMoviePrice(movie){
  console.log(movie.detail.price)
}

printMoviePrice(movie)
printMoviePrice(movie2)


function printMoviePrice(movie){
  return movie?.datail?.data;
}

console.log(printMoviePrice(movie))
console.log(printMoviePrice(movie2))

console.log(movie?.datail?.data);