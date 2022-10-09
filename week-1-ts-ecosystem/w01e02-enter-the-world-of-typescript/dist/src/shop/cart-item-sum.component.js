import { Div } from "../framework/dom-creators";
export function cartItemSum(basketSum) {
    const panelBlock = Div("panel-block is-justify-content-end");
    panelBlock.innerHTML = `Total price: ${basketSum.value} ${basketSum.currency === undefined ? "PLN" : basketSum.currency}`;
    return panelBlock;
}
