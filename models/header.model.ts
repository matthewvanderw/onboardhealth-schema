export type Headers = BasicHeaderWithSubText

type Header = {
	type: 'header'
}

type BasicHeaderWithSubText = Header & {
	headerType: 'basic-with-subtext'
	header: string
	subText: string
}
