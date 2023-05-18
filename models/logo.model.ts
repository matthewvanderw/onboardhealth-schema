export type Logos = TextWithSubText

type Logo = {
	type: 'logo'
}

type TextWithSubText = Logo & {
	logoType: 'text-with-subtext'
	text: string
	bold: string
	subText: string
}
