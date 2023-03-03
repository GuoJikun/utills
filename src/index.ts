export {
  _Array,
  sum,
  min,
  max,
  average,
  union,
  intersection,
  isEmpty,
} from "./modules/array";

export {
  _String,
  trim,
  trimStart,
  trimEnd,
  unicode,
  thousandsSeparator,
} from "./modules/string";

export {
  Cookie,
  getItem,
  setItem,
  has,
  keys,
  removeItem,
  clear,
} from "./modules/cookie";

export {
  Type,
  isArray,
  isBoolean,
  isDate,
  isFunction,
  isNull,
  isNumber,
  isObject,
  isReg,
  isString,
} from "./modules/type";

import _String from "./modules/string";
import _Array from "./modules/array";
import browser from "./modules/browser";
import other from "./modules/other";

import Cookie from "./modules/cookie";
import Type from "./modules/cookie";

export default {
  _String,
  _Array,
  browser,
  other,
  Cookie,
  Type,
};
