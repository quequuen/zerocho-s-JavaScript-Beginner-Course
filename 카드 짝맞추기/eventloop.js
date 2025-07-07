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

**호출스택이 종료된 후** 백그라운드에 쌓인 타이머들을 순서대로 동작 후 이벤트 루프가 하나씩 태스트큐에 옮겨주고 그 태스크 큐에 있는 것들을 호출 스택에서 끌어다 쓴다.
(=백그라운드에 쌓인 애들은 호출스택이 종료한 후 같이 순차적으로 실행되어야 한다.)
그래서 aaa() 안의 console.log('d')가 나중에 나오는 것!
(11-7강 내용 자주 볼 것)
http://latentflip.com/loupe/?code=ZnVuY3Rpb24gYWFhKCkgewogIHNldFRpbWVvdXQoKCkgPT4gewogICAgY29uc29sZS5sb2coImQiKTsKICB9LCAwKTsKICBjb25zb2xlLmxvZygiYyIpOwp9CgpzZXRUaW1lb3V0KCgpID0%2BIHsKICBjb25zb2xlLmxvZygiYSIpOwogIGFhYSgpOwp9LCAwKTsKCnNldFRpbWVvdXQoKCkgPT4gewogIGFhYSgpOwogIGNvbnNvbGUubG9nKCJiIik7Cn0pOwo%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
*/
