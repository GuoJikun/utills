export class Func {
  public static debounce(
    func: Function,
    wait: number = 200,
    immediate: boolean = false
  ) {
    let timeout: any;
    return () => {
      let context = this;
      let args = arguments;

      if (timeout) clearTimeout(timeout);
      if (immediate) {
        let callNow = !timeout;
        timeout = setTimeout(() => {
          timeout = null;
        }, wait);
        if (callNow) func.apply(context, args);
      } else {
        timeout = setTimeout(() => {
          func.apply(context, args);
        }, wait);
      }
    };
  }

  public static throttle(func: Function, wait = 200, type = 2) {
    let previous: number, timeout: any;
    if (type === 1) {
      previous = 0;
    } else if (type === 2) {
      timeout = null;
    }
    return () => {
      let context = this;
      let args = arguments;
      if (type === 1) {
        let now = Date.now();

        if (now - previous > wait) {
          func.apply(context, args);
          previous = now;
        }
      } else if (type === 2) {
        if (!timeout) {
          timeout = setTimeout(() => {
            timeout = null;
            func.apply(context, args);
          }, wait);
        }
      }
    };
  }
}

export const debounce = Func.debounce;
export const throttle = Func.throttle;

export default Func;
