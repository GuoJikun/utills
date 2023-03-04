import { Type } from "./index";

const t: undefined = undefined;
const a = null;

console.log(Type.is(1));
console.log(Type.is(t));
console.log(Type.is(a));
console.log(Type.is(true));
console.log(Type.is(1n));
console.log(Type.is("string"));
console.log(Type.is([]));
console.log(Type.is({}));
console.log(Type.is(Symbol(1)));
console.log(Type.is(new Set()));
console.log(Type.is(new WeakSet()));
console.log(Type.is(new Map()));
console.log(Type.is(new WeakMap()));
console.log(Type.is(Math));
console.log(Type.is(() => {}));
console.log(Type.is(new Date()));
console.log(Type.is(new RegExp("12")));

console.log(Type.isNumber(123));
console.log(Type.isNumber("23"));
