export type Sections = BasicSection

type Section = {
	type: 'section'
}

type BasicSection = Section & {
	sectionType: 'basic-section'
	header?: string
	subHeader?: string
}
