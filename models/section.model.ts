export type Sections = BasicSection

type Section = {
	type: 'section'
	header?: string
	subHeader?: string
}

type BasicSection = Section & {
	sectionType: 'basic-section'
}
