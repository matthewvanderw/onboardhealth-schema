export type Cards = ContributionCard

type Card = {
	type: 'card'
	header: string
	subHeader: string
}

export type ContributionCard = Card & {
	cardType: 'contribution-card'
	query: {
		name: string
		props: {
			count: {
				stepId: string
				label: string
			}[]
			total: {
				label: string
			}
		}
	}
	results: {
		counts: {
			label: string
			count: number
			value: number
		}[]
		total: {
			label: string
			value: number
		}
	}
}
export type Cards = ContributionCard

type Card = {
	type: 'card'
	header?: string
	subHeader?: string
}

export type ContributionCard = Card & {
	cardType: 'contribution-card'
	query: {
		name: string
		props: {
			counts: {
				stepId: string
				label: string
			}[]
			total: {
				label: string
			}
		}
	}
	results: {
		counts: {
			label: string
			count: number
			value: number
		}[]
		total: { label: string; value: number }
	}
}
