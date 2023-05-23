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
		}
	}

	listAction: {
		stepId: string
		label: string
	}
	results?: {
		id: number
		name: string
		dateOfBirth: string
	}[]
}
