// date 객체를 이용한 포맷팅
function timeForToday(datetime){
  const today = new Date();
  const date = new Date(datetime);

  let gap = Math.floor(today.getTime() - date.getTime()) / 1000 / 60 
  // 초단위로 변환, Math.floor : 소수점 자리 버리기

  if(gap < 1){ // gap이 1분보다 작으면
    return "방금 전";
  }

  if(gap < 60){ // gap이 60분보다 작으면
    return `${gap}분 전`;
  }

  gap = Math.floor(gap / 60); // 몫만 가져와서 hour 가져오기

  if(gap < 24){ // gap이 24시긴(하루)보다 작으면
    return `${gap}시간 전`;
  }

  gap = Math.floor(gap / 24); // 몫이 2로 떨어지면 2일 지남..

  if(gap < 32){
    return `${gap}일 전`;
  }

  gap = Math.floor(gap / 31); // 달

  if(gap < 13){
    return `${gap}개월 전`;
  }

  gap = Math.floor(gap / 12); // 년
  return `${gap}년 전`;
}

console.log(timeForToday("2024-08-08 09:00:00"));