import { article, p } from "@/framework/dom-creators"
import { cartItemSum } from "@/shop/cart-item-sum.component"
import { cartItem } from "@/shop/cart-item.component"
import { Item } from "@/models/Item";

interface Panel {
  items: Item[];
  heading?: string;
}

export function cartPanel({ items, heading = "Cart Items" }: Panel): HTMLElement {
  const $article = article("panel is-primary my-6 w-75 mx-auto")
  const $heading = p("panel-heading")

  $heading.textContent = heading
  $article.append($heading)

  let value = 0

  items.forEach((item) => {
    value += item.price.value
    $article.appendChild(cartItem(item))
  })

  $article.append(cartItemSum({ value, currency: "PLN" }))

  return $article
}
