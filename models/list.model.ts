export type Lists = UserList

type List = {
	type: 'list'
	placeholder: string
}

export type UserList = List & {
	listType: 'user-list'
	query: {
		name: string
		props: {
			stepId: string
			mappings: {
				[Property in keyof Results]: string
			}
		}
	}
	maxUsers: number
	listAction: {
		stepId: string
		label: string
		disabled: boolean
	}
	results?: Results[]
}

type Results = {
	id: string
	firstNames: string
	lastName: string
	dateOfBirth: string
}
