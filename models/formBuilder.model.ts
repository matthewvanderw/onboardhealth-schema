import type { Logos } from './logo.model'
import type { Headers } from './header.model'
import type { Sections } from './section.model'
import type { Inputs } from './input.model'
import type { Buttons } from './button.model'

export type FormItem = Logos | Headers | Sections | Inputs | Buttons

export type StoredForms = {
	previousForm: FormItem[] | false
	activeForm: FormItem[]
	nextForm: FormItem[] | false
}

export type StoredValues = {
	[key: string]: unknown
}
