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

export class Type {
  static is<T>(val: T): DataType {
    return Object.prototype.toString
      .call(val)
      .slice(8, -1)
      .toLowerCase() as DataType;
  }
  public static isString(val: any): val is string {
    return Type.is(val) === "string";
  }

  public static isBoolean(val: any): val is boolean {
    return Type.is(val) === "boolean";
  }

  public static isObject(val: any): val is object {
    return Type.is(val) === "object";
  }

  public static isArray(val: any): val is Array<any> {
    return Type.is(val) === "array";
  }

  public static isFunction(val: any): val is Function {
    return Type.is(val) === "function";
  }

  public static isReg(val: any): val is RegExp {
    return Type.is(val) === "regexp";
  }

  public static isNull(val: any): val is null {
    return Type.is(val) === "null";
  }

  public static isNumber(val: any): val is number {
    return Type.is(val) === "number";
  }

  public static isDate(val: any): val is Date {
    return Type.is(val) === "date";
  }
}

export const isBoolean = Type.isBoolean;
export const isString = Type.isString;
export const isObject = Type.isObject;
export const isArray = Type.isArray;
export const isFunction = Type.isFunction;
export const isReg = Type.isReg;
export const isNull = Type.isNull;
export const isNumber = Type.isNumber;
export const isDate = Type.isDate;

export default Type;
