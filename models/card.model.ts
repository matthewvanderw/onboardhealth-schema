export type Cards = ContributionCard | TermsCard

type Card = {
	type: 'card'
	header: string
	subHeader: string
	hiddenOnValue?:
	{
		inputName: string
		value: string
	}
}

export type TermsCard = Card & {
	cardType: 'terms-card'
	name?: string
	label: string
	description: string
	markdown?: {
		documentId: string
		data: unknown
	}
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
