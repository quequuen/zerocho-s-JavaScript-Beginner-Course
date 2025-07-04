function aaa() {
  setTimeout(() => {
    console.log("d");
  }, 0);
  console.log("c");
}

setTimeout(() => {
  console.log("a");
  aaa();
}, 0);

setTimeout(() => {
  aaa();
  console.log("b");
});

/*호출스택: anonymous 추가 - > setTimeout 추가 -> setTimeout 제거 
백그라운드: 타이머1-0초, 타이머2-0초
태스크큐: 
콘솔:

*/
