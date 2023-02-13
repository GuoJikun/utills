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
/**计算数组的各项和 */
export const sum = <T extends object | number>(
  arr: Array<T>,
  key: undefined | keyof T
): number => {
  return arr.reduce((previous: number, current: T) => {
    if (key) {
      return (previous += (current[key] as number) || 0);
    } else {
      return (previous += current as number);
    }
  }, 0);
};

export default {
  flat,
};
