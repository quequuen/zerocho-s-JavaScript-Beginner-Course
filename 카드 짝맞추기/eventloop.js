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

/*호출스택: anonymous 추가 - > setTimeout 추가 -> setTimeout 제거 ->console.log(a) 호출 -> aaa ->setTimeout->console.log(c)-> aaa 종료-> 타이머2-0초, aaa, setTimeout-> console.log(c)-> console.log(b)-> console.log(d) -> console.log(d)
백그라운드: 타이머1-0초, 타이머2-0초, 타이머3-0초, 타이머3-0초
태스크큐: 
콘솔: a,c,c,b,d,d

*/
