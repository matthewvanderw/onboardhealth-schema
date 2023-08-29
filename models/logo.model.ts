export type Logos = TextWithSubText | SvgLogo

type Logo = {
	type: 'logo'
}

export type TextWithSubText = Logo & {
	logoType: 'text-with-subtext'
	text: string
	bold: string
	subText: string
}

export type SvgLogo = Logo & {
	logoType: 'svg-logo'
	url: string
	subText: string
}
