export type Inputs = BasicInput | BasicSelect | BasicCheckbox

type Input = {
	type: 'input'
	name: string

	label?: string
	placeholder?: string
	disabled?: boolean
	required?: boolean
	query?: string
	handler?: string
	filter?: string

	description?: {
		beforeInput: string
		afterInput: string
	}

	value: string | null
}

export type BasicInput = Input & {
	inputType: 'text' | 'email' | 'tel' | 'date' | 'password' | 'search' | 'number'
}

export type BasicCheckbox = Input & {
	inputType: 'checkbox'
}

export type BasicSelect = Input & {
	inputType: 'select'
	options: Option[]
}

export type Option = {
	label: string
	filter: string
	value: string
}
