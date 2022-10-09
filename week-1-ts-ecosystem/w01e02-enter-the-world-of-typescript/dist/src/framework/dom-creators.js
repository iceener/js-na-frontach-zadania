function createElement(tagName = "div", className = "") {
    const element = document.createElement(tagName);
    if (className.length) {
        element.className = className;
    }
    return element;
}
export const P = (className = "") => createElement("p", className);
export const Div = (className = "") => createElement("div", className);
export const Section = (className = "") => createElement("section", className);
export const Article = (className = "") => createElement("article", className);
