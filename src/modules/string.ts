/**移除字符串首尾的空字符 */
export const trim = (str: string) => {
  if (typeof str !== "string") {
    throw new Error("trim方法只能输入字符串类型的参数");
  }

  return str.replace(/^\s+$/, "");
};
/**移除字符串头部的空字符 */
export const trimStart = (str: string) => {
  if (typeof str !== "string") {
    throw new Error("trim方法只能输入字符串类型的参数");
  }

  return str.replace(/^\s+/, "");
};
/**移除字符串末尾的空字符 */
export const trimEnd = (str: string) => {
  if (typeof str !== "string") {
    throw new Error("trim方法只能输入字符串类型的参数");
  }

  return str.replace(/\s+/, "");
};

/**
 * 增加千分位分隔符
 */
export const thousandsSeparator = (val: string | number, separator = ",") => {
  const type = typeof val;
  if (!["number", "string"].includes(type)) {
    throw "thousandsSeparator方法的参数只能传String/Number类型";
  }
  if (typeof val === "number") {
    val = val.toString();
  }
  return val.replace(/(\d)(?=(?:\d{4})+$)/, `$1${separator}`);
};

/**string转unicode */
export const str2unicode = (val: string): Array<number> => {
  if (typeof val === "string") {
    return val.split("").map((c: string) => c.charCodeAt(0));
  }
  throw new Error("string2unicode的参数只能是string类型");
};

export default {
  trim,
  trimStart,
  trimEnd,
  thousandsSeparator,
};
