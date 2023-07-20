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
	state?: InputState

	value?: string
}

type InputState = {
	touched?: boolean
	errorMessage?: string
}

export type BasicInput = Input & {
	inputType: 'text' | 'email' | 'tel' | 'date' | 'password' | 'search' | 'number'
}

export type BasicCheckbox = Input & {
	inputType: 'checkbox'
	markdown?: {
		documentId: string
		data: unknown
	}
	otp?: {
		label: string
		formStepId: string
		contactNumberField: string
		contactNumber: string
		contactNameField: string
		contactName: string
	}
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

export type Validator = {
	validator: string
	props: Record<string, string | number>
}

export type Validators = Validator[]

export type Filters = {
	filter: string
	props: Record<string, string | number>
}[]

export type Handlers = {
	handler: string
	props: Record<string, string | number>
}[]
