export type Cards = ContributionCard

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
