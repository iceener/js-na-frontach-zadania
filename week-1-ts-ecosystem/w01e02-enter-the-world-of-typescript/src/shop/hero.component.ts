import { Div, P, Section } from "../framework/dom-creators"
import { HeroData } from "../framework/interfaces/HeroData"

export function hero(heroData: HeroData): HTMLElement {
	const heroSection = Section("hero is-link")
	const heroBody = Div("hero-body")
	const title = P("title")
	title.innerText = heroData.title
	const subTitle = P("subtitle")
	subTitle.innerText = heroData.subTitle
	heroBody.append(title, subTitle)
	heroSection.append(heroBody)
	return heroSection
}
