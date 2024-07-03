import type { CampaignConfig } from './campaign.model'
import type { FormItem } from './formItem.model'

export type FormResponse = {
	previous: boolean
	next: true | Record<string, string | FormDataEntryValue>
	form: FormItem[]
	options?: Options
	theme?: Theme | null,
	conversionLabel?: string
	trackers?: CampaignConfig
}

export type Options = {
	eventName?: string
	disablePrevious?: boolean
	disableClose?: boolean
	action?: {
		previous?: { label: string; path: string }
		next?: { label: string; path: string }
	}
	requirePayment?: boolean
	returnProps?: Record<string, string>
	serverActions?: ServerAction[]
}

type ServerAction = UpdateStatus | SmsLinkedSession | SendEmail | CreateMember | sendCustomEmail

type UpdateStatus = {
	actionName: 'updateStatus'
	status: string
}

type SmsLinkedSession = {
	actionName: 'smsLinkedSession'
	formId: string
	templateString: string
}

type SendEmail = {
	actionName: 'sendEmail'
	templateId: string
	replyTo?: string
}

type CreateMember = {
	actionName: 'createMember'
}

type sendCustomEmail = {
	actionName: 'sendCustomEmail'
	addresses: string[]
	dependentStepId: string
	csvValues: { field: string, title: string }[]
}

export type GlobalOptions = {
	contribution?: {
		mainMember?: {
			lookupStepId: string
			label: string
		}
		dependants?: {
			lookupStepId: string
			label: string
		}
		total: {
			label: string
		}
	}
	principalStepId?: string
	dependentStepId?: string
	posthogPublicKey?: string
}

export type Theme = {
	borderRadius: string
	fontFamily: string
	colours: {
		'custom-primary': string
		'custom-btn-text': string
		'custom-icon-danger': string
		'custom-icon-stroke': string
	}
}
