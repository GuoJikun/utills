import str from "./modules/string";
import arr from "./modules/array";
import other from "./modules/other";

export { str, arr, other };

export type DataType =
  | "string"
  | "number"
  | "bigint"
  | "boolean"
  | "array"
  | "object"
  | "null"
  | "undefined"
  | "date"
  | "regexp"
  | "function"
  | "symbol"
  | "set"
  | "map"
  | "weakmap"
  | "weakset"
  | "math";

export const getType = <T>(val: T): DataType => {
  return Object.prototype.toString
    .call(val)
    .slice(8, -1)
    .toLowerCase() as DataType;
};

export const isString = <T>(val: T) => typeof val === "string";
export const isBoolean = <T>(val: T) => typeof val === "boolean";

export default {
  str,
  arr,
  other,
};
