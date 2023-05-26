import type { FormItem } from './formItem.model'

export type FormResponse = {
	previous: boolean
	next: boolean
	form: FormItem[]
	options?: Options
}

export type Options = {
	disablePrevious?: boolean
	action?: {
		previous?: { label: string; path: string }
		next?: { label: string; path: string }
	}
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
	fontFamily: string
	fontUrl: string
}
