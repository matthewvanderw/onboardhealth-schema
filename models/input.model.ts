export type Inputs = BasicInput | BasicSelect | BasicCheckbox

type Input = {
	type: 'input'

	name: string
	label?: string
	required: boolean
	disabled?: boolean

	query?: string
	handler?: string
	filter?: string

	value: string | null
}

export type BasicInput = Input & {
	inputType: 'basic-input'
	fieldType: 'text' | 'email' | 'tel' | 'date' | 'password' | 'search' | 'number'
}

export type BasicCheckbox = Input & {
	inputType: 'basic-checkbox'
}

export type BasicSelect = Input & {
	inputType: 'basic-select'
	options: Option[]
}

export type Option = {
	label: string
	value: unknown
}
