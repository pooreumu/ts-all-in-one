const a: string = "5";
const b: number = 5;
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
/**
 * js에서 any를 전부 없애면 ts가 된다.
 * 명시적으로 any를 쓰는 일은 없을 것이다.
 */
const f: any = true;

/**
 * 고정된 원시 값을 넣을 수 있다
 * 타입은 최대한 정확하게
 */
const g: true = true;
const h: 5 = 5;

/**
 * 함수의 여러가지 타입 표현방법
 */
function add1(x: number, y: number): number {
  return x + y;
}

const add2: (x: number, y: number) => number = (x, y) => x + y;

type Add3 = (x: number, y: number) => number;
const add3: Add3 = (x, y) => x + y;

interface Add4 {
  (x: number, y: number): number;
}

const add4: Add4 = (x, y) => x + y;

/**
 * 객체
 */
const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };

/**
 * 배열
 */
const arr: string[] = ["123", "456"];
const arr2: Array<number> = [123, 456];
const arr3: [number, number, number] = [123, 456, 789];

/**
 * noImplicitAny가 false일 때 array에 타입을 지정하지 않으면 never가 돼서 아래처럼 값을 넣을 수가 없게된다
 * 꼭 지정을 해주자
 * never 좋은 글 https://ui.toast.com/weekly-pick/ko_20220323
 */

try {
  const array = []; // noImplicitAny가 false일 때
  array.push(0);
} catch (error) {
  error;
}

/**
 * !를 쓰면 있다고 단언한다.
 * 근데 안좋은 방식이다
 * head3 처름 쓰자
 */
const head1 = document.querySelector("#head"); // Element || null
const head2 = document.querySelector("#head")!; // Element
const head3 = document.querySelector("#head");
if (head3) {
  head3.innerHTML = "hello";
}

/**
 * 자동완성 돼서 좋음
 */
type World = "world" | "hell";

const world: World = "world";

const world1 = `hello ${world}`;

// type Greeting = 'hello world'
type Greeting = `hello ${World}`;
const greeting: Greeting = "hello hell";

/**
 * 첫번째는 막아주는 데
 * 두번째는 못막아준다.
 */

const tuple: [string, number] = ["1", 1];

tuple[2] = "hello";

tuple.push("hello");

/**
 * 여러개의 변수들을 하나로 묶고 싶을 때
 */
const enum EDirection {
  Up = 3,
  Down,
  Left,
  Right,
}

const up = EDirection.Up;
const left = EDirection.Left;

/**
 * as const를 붙이면 readonly + 타입추론 범위 좁혀줌
 */
const ODirection = {
  Up: 1,
  Down: 2,
  Left: 3,
  Right: 4,
} as const;

/**
 * enum 하기 싫을 때 Value를 쓴다. 그냥 객체의 밸류들의 타입을 가져오는 것과 같다
 */
const objjj = { a: "123", b: "hello", c: "world" } as const;
type Key = keyof typeof objjj;
type Value = (typeof objjj)[keyof typeof objjj];

/**
 * intersection은 둘다 만족 하면 됨
 */

type A = { hello: "world" } & { zero: "cho" };
const aaa: A = { hello: "world", zero: "cho" };

/**
 * 타입이랑 인터페이스 둘다 extends 할 수 있다.
 * 인터페이스는 같은 이름으로 여러번 선언할 수 있다. 선언할 때마다 합쳐진다.
 * 인터페이스를 사용하는게 확장성이 좋다.
 */

type Animal = { breath: true };
type Poyouryu = Animal & { breed: true };
type Human = Poyouryu & { think: true };

interface AAA {
  breath: true;
}

interface BBB extends AAA {
  breed: true;
}

const bbb: BBB = { breath: true, breed: true };
const zerocho: Human = { breath: true, breed: true, think: true };
