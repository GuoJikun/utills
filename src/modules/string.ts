export class _String {
  /**
   * string转unicode
   * @param val string
   * @returns
   */
  public static unicode(val: string) {
    return Array.prototype.map.call(val, (c: string) => c.charCodeAt(0));
  }
  /**
   * 移除字符串前后的空格
   * @param val string
   * @returns
   */
  public static trim(val: string) {
    return val.replace(/^\s+/, "").replace(/\s+$/, "");
  }
  /**
   * 移除字符串前的空格
   * @param val string
   * @returns
   */
  public static trimStart(val: string) {
    return val.replace(/^\s+/, "");
  }
  /**
   * 移除字符串后的空格
   * @param val string
   * @returns
   */
  public static trimEnd(val: string) {
    return val.replace(/\s+$/, "");
  }
  /**
   * 千分位
   * @param val
   * @param separator
   * @returns
   */
  public static thousandsSeparator(val: string | number, separator = ",") {
    const type = typeof val;
    if (!["number", "string"].includes(type)) {
      throw "thousandsSeparator方法的参数只能传String/Number类型";
    }
    if (typeof val === "number") {
      val = val.toString();
    }
    return val.replace(/(\d)(?=(?:\d{4})+$)/, `$1${separator}`);
  }
}

export const thousandsSeparator = _String.thousandsSeparator;
export const trim = _String.trim;
export const trimStart = _String.trimStart;
export const trimEnd = _String.trimEnd;
export const unicode = _String.unicode;

export default _String;
