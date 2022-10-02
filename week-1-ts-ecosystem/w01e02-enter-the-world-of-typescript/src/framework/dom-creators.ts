function createElement<TElement extends keyof HTMLElementTagNameMap>({
  tagName = "div" as TElement,
  className = "",
}: {
  tagName: TElement;
  className?: string;
}) {
  const element = document.createElement(tagName);
  if (className.length) {
    element.className = className;
  }
  return element;
}

export const p = (className?: string) =>
  createElement({
    tagName: "p",
    className,
  });
export const div = (className?: string) =>
  createElement({
    tagName: "div",
    className,
  });
export const section = (className?: string) =>
  createElement({
    tagName: "section",
    className,
  });
export const article = (className?: string) =>
  createElement({
    tagName: "article",
    className,
  });
