export type Sections = BasicSectionWithUnderline

type Section = {
	type: 'section'
	header?: string
	subHeader?: string
}

type BasicSectionWithUnderline = Section & {
	sectionType: 'basic-section'
}
