// 얕은 복사와 깊은 복사

const a = "b";
const c = ["d", true, 1];
const e = { g: "h" };
const i = [{ j: "k", l: "m" }];
const n = { 0: { p: "q" } };

const a1 = a;
// 그냥 원시값은 배열, 객체와 다르게 그냥 할당하면 알아서 참조가 아닌 복사
const c1 = c.slice();
const c2 = [...c];
// slice도 복사기능을 한다.
// 배열 안에 배열, 객체가 아닌 원시값만 들어있을 때는 얕은 복사만 해도 충분하다
const e1 = { ...e };
const i1 = JSON.parse(JSON.stringify(i));
const n1 = JSON.parse(JSON.stringify(n));
