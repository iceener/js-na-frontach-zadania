import { div } from "../framework/dom-creators";
import type { Item } from "./types";

export function cartItemSum({ value, currency = "PLN" }: Item["price"]) {
  const $panelBlock = div("panel-block is-justify-content-end");
  $panelBlock.innerHTML = `Total price: ${value} ${currency}`;
  return $panelBlock;
}
