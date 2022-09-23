function createElement(tagName = "div", className = ""): HTMLElement {
  const element: HTMLElement = document.createElement(tagName)

  if (className.length) {
    element.className = className
  }

  return element
}

export const p = (className = ""): HTMLElement => createElement("p", className)
export const div = (className = ""): HTMLElement => createElement("div", className)
export const section = (className = ""): HTMLElement => createElement("section", className)
export const article = (className = ""): HTMLElement => createElement("article", className)
