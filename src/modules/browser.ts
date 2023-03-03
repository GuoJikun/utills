export class Browser {
  public static getStyle(el: HTMLElement, ruleName: string) {
    return getComputedStyle(el).getPropertyValue(ruleName);
  }

  public static addClass(el: string | HTMLElement, className = "") {
    if (el instanceof HTMLElement) {
      const oldClass = el.getAttribute("class") || "";
      el.setAttribute(
        "class",
        oldClass ? [oldClass, className].join(" ") : className
      );
    } else {
      const target = document.querySelector(el as any);
      if (target) {
        const oldClass = target.getAttribute("class");
        target.setAttribute(
          "class",
          oldClass ? [oldClass, className].join(" ") : className
        );
      }
    }
  }

  public static removeClass(el: string | HTMLElement, className: string) {
    const removeClassList = className.split(" ");
    if (el instanceof HTMLElement) {
      const oldClass = el.getAttribute("class")?.split(" ") || [];
      el.setAttribute(
        "class",
        oldClass.filter((c: string) => !removeClassList.includes(c)).join(" ")
      );
    } else {
      const target = document.querySelector(el as any);
      if (target) {
        const oldClass = target.getAttribute("class")?.split(" ") || [];
        target.setAttribute(
          "class",
          oldClass.filter((c: string) => !removeClassList.includes(c)).join(" ")
        );
      }
    }
  }

  public static currentHref() {
    return window.location.href;
  }
}

export const currentHref = Browser.currentHref;
export const addClass = Browser.addClass;
export const removeClass = Browser.removeClass;

export default Browser;
