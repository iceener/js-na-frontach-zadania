import { root } from "./shop/root.component"

const app: HTMLElement = <HTMLElement>document.querySelector("#app")

app?.appendChild(root())
