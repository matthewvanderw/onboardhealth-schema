import type { FormItem } from './formItem.model'

export type FormResponse = {
	previous: boolean
	next: true | Record<string, string | FormDataEntryValue>
	form: FormItem[]
	options?: Options
	theme?: Theme | null
}

export type Options = {
	disablePrevious?: boolean
	action?: {
		previous?: { label: string; path: string }
		next?: { label: string; path: string }
	}
	returnProps?: Record<string, string>
	serverActions?: ServerAction[]
}

type ServerAction = UpdateStatus | SmsLinkedSession | SendEmail

type UpdateStatus = {
	status: string
}

type SmsLinkedSession = {
	formId: string
}

type SendEmail = {
	templateId: string
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
