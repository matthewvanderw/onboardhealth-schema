export type Lists = UserList

type List = {
	type: 'card'
	placeholder: string
}

export type UserList = List & {
	listType: 'user-list'
	listAction: {
		stepId: string
		label: string
	}
	query: {
		name: string
		props: {
			stepId: string
		}
	}
	results: {
		id: string
		name: string
		dateOfBirth: string
	}[]
}
