export type Cards = ContributionCard | InfoCard

type Card = {
	type: 'card'
	header: string
	subHeader: string
}

export type ContributionCard = Card & {
	cardType: 'contribution-card'
	values: {
		label: string
		count: number
		value: number
	}[]
	total: {
		label: string
		value: number
	}
}

export type InfoCard = Card & {
	cardType: 'info-card'
}
