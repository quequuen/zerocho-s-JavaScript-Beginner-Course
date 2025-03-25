const answer = [3, 1, 4, 6];
const value = "3,1,2,4";
let strike = 0;
let ball = 0;
answer.forEach((element, i) => {
  //(배열의 요소, 객체의 인덱스)
  const index = value.indexOf(element);
  if (index > -1) {
    //일치하는 숫자 발견
    if (index === 1) {
      //자릿수도 같음
      strike += 1;
    } else {
      ball += 1;
    }
  }
});

const array = [1, 2, 3, 4];
const result = [];
for (let i = 0; i < 4; i++) {
  result.push(array[i] * 2);
}

array.map((element, i) => {
  return element * 2;
}); //기존 배열이 수정되는 게 아닌 새로운 배열이 생성됨

Array[9].fill(); //undefined로 찬 length가 9인 배열 생성
Array[9].fill(0); //0으로 찬 length가 9인 배열 생성

Array[9].fill(0).map((ele, idx) => {
  return idx + 1;
});
//[1,2,3,4,5,6,7,8,9] 출력
