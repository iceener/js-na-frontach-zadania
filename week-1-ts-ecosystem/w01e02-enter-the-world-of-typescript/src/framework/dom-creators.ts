function createElement(tagName = "div", className = ""): HTMLElement {
	const element: HTMLElement = document.createElement(tagName)
	if (className.length) {
		element.className = className
	}
	return element
}

export const P = <HTMLEParagraphlement>(className = "") => createElement("p", className)
export const Div = <HTMLElDivement>(className = "") => createElement("div", className)
export const Section = <HTMLElement>(className = "") => createElement("section", className)
export const Article = <HTMLElement>(className = "") => createElement("article", className)
