export type Inputs = BasicInput | BasicSelect | BasicCheckbox

type Input = {
	type: 'input'
	name: string

	label?: string
	description?: {
		beforeInput?: string
		afterInput?: string
	}
	placeholder?: string

	required?: boolean
	disabled?: boolean

	handler?: Handlers
	validators?: Validators
	filter?: Filters

	value?: string
}

type InputState = {
	touched: boolean
	// dirty: boolean
	validity: { valid: true } | { valid: false; message: string }
}

export type BasicInput = Input & {
	inputType: 'text' | 'email' | 'tel' | 'date' | 'password' | 'search' | 'number'
}

export type BasicCheckbox = Input & {
	inputType: 'checkbox'
	markdown?: string
}

export type BasicSelect = Input & {
	inputType: 'select'
	optionsLookup:
		| 'genders'
		| 'identity-types'
		| 'martial-statuses'
		| 'provinces'
		| 'bank-names'
		| 'account-types'
		| 'relationships'
	options: Option[]
}

export type Option = {
	label: string
	filterValue?: string
	value: string
}

export type Validators = {
	validator: string
	props: Record<string, string | number>
}[]

export type Filters = {
	filter: string
	props: Record<string, string | number>
}[]

export type Handlers = {
	handler: string
	props: Record<string, string | number>
}[]
