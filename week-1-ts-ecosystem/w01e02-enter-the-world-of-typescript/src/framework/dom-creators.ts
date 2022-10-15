function createElement<TTag extends keyof HTMLElementTagNameMap = 'div'>(tagName: TTag, className = ''): HTMLElementTagNameMap[TTag]  {
  const element = document.createElement(tagName)
  if (className.length) {
    element.className = className
  }
  return element
}

export const p = (className = '') => createElement('p', className)
export const div = (className = '') => createElement('div', className)
export const section = (className = '') => createElement('section', className)
export const article = (className = '') => createElement('article', className)
