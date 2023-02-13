import { getType } from "./index";

const t: undefined = undefined;
const a = null;

console.log(getType(1));
console.log(getType(t));
console.log(getType(a));
console.log(getType(true));
console.log(getType(1n));
console.log(getType("string"));
console.log(getType([]));
console.log(getType({}));
console.log(getType(Symbol(1)));
console.log(getType(new Set()));
console.log(getType(new WeakSet()));
console.log(getType(new Map()));
console.log(getType(new WeakMap()));
console.log(getType(Math));
console.log(getType(() => {}));
console.log(getType(new Date()));
console.log(getType(new RegExp("12")));
