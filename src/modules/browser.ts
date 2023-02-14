export const currentHref = () => window.location.href;

/**添加class 名称 */
export const addClass = (el: string | HTMLElement, className = "") => {
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
};
/**删除元素上的class 名称 */
export const removeClass = (el: string | HTMLElement, className: string) => {
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
};

export default {
  currentHref,
  addClass,
  removeClass,
};
