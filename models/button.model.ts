export type Buttons = GotoNewForm

type Button = {
	type: 'button'
}

type GotoNewForm = Button & {
	buttonType: 'goto-new-form'
	label: string
}

//adding a test comment
