export const flat = (arr: unknown[], depth = 1) => {
  if ("flat" in Array.prototype) {
    return arr.flat(depth);
  } else {
    let res: unknown[] = [],
      depthNum = 0,
      flatMap = (item: unknown[]) => {
        item.map((element: unknown, index: number, array: unknown[]) => {
          if (Array.isArray(element)) {
            if (depthNum < depth) {
              depthNum++;
              flatMap(element);
            } else {
              res.push(element);
            }
          } else {
            res.push(element);
            if (index === array.length - 1) depthNum = 0;
          }
        });
      };
    flatMap(arr);
    return res;
  }
};

export class _Array {
  public static max(arr: Array<number>): number {
    return Math.max(...arr);
  }
  public static min(arr: Array<number>): number {
    return Math.min(...arr);
  }
  public static sum<T extends object | number>(
    arr: Array<T>,
    key?: keyof T
  ): number {
    return arr.reduce((previous: number, current: T) => {
      if (key) {
        return (previous += (current[key] as number) || 0);
      } else {
        return (previous += current as number);
      }
    }, 0);
  }
  public static average(arr: Array<number>): number {
    return _Array.sum(arr) / arr.length;
  }
  public static isEmpty(arr: Array<any>): boolean {
    return arr.length === 0;
  }

  public static union(arr1: Array<any>, arr2: Array<any>): Array<any> {
    return [...arr1, ...arr2];
  }
  public static intersection<T>(
    arr1: Array<T>,
    arr2: Array<T>,
    cb?: (c: T, v: T) => boolean
  ): Array<T> {
    return arr1.filter((c: T) => {
      return arr2.some((v: T) => {
        if (cb) {
          return cb(c, v);
        } else {
          return c?.toString() === v?.toString();
        }
      });
    });
  }
}

/**
 * 两个数组的并集
 */
export const intersection = _Array.intersection;
/**
 * 两个数组的交集
 */
export const union = _Array.union;
/**
 * 是否是空数组
 */
export const isEmpty = _Array.isEmpty;
/**
 * 数组最小值
 */
export const min = _Array.min;
/**
 * 数组最大值
 */
export const max = _Array.max;
/**
 * 数组求和
 */
export const sum = _Array.sum;
/**
 * 数组的平均值
 */
export const average = _Array.average;

export default _Array;
