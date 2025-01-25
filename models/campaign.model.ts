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
	androidPrimaryColor?: string
	buttonTextColor: string
	borderRadius: string
	androidBorderRadius?: string
	fontFamily: string
	imageUrl: string
	logoMaxWidth?: string
}

export type CampaignConfig = {
	facebook?: {
		trackingId: string
	},
	google?: {
		trackingId: string
		conversionLabel?: string
	},
	sms?: {
		expiredCard?: string
		failedCollection?: string
	}
}

