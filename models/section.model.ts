export type Sections = BasicSectionWithUnderline

type Section = {
	type: 'section'
}

type BasicSectionWithUnderline = Section & {
	sectionType: 'basic-with-underline'
	title?: string
}
