export type Gateways = PayGate

export type Gateway = {
	type: 'gateway'
}

export type PayGate = Gateway & {
	gatewayType: 'paygate'
	requestId: string
	checkSum: string
}
