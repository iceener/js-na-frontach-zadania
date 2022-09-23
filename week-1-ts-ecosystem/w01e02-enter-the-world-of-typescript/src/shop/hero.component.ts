import { div, p, section } from "@/framework/dom-creators"

interface Hero {
  title: string;
  subtitle: string;
}

export function hero({ title, subtitle }: Hero): HTMLElement {
  const $heroSection = section("hero is-link")
  const $heroBody = div("hero-body")
  const $title = p("title")
  const $subTitle = p("subtitle")

  $title.innerText = title
  $subTitle.innerText = subtitle

  $heroBody.append($title, $subTitle)
  $heroSection.append($heroBody)

  return $heroSection
}
