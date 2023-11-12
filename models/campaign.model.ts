export type CampaignTemplate = {
	imageUrl: string
	header: string
	subHeader: string
	cards: {
		header: string
		subHeader: string
		list: {
			listType: 'ol' | 'ul'
			items: string[]
		}
	}[]
	disclaimer?: string
}

export type CampaignTheme = {
	primaryColor: string
	secondaryColor: string
	buttonTextColor: string
	borderRadius: string
	fontFamily: string
	imageUrl: string
	logoMaxWidth?: string
}
