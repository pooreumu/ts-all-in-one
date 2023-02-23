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
