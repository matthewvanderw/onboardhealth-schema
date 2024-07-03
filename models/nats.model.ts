import type { JsMsg, NatsConnection } from "nats"

export type StreamConfig = {
    nc: NatsConnection,
    streams: {
        subjects: string[],
        filterSubjects?: string[]
        streamName: string
        consumerName: string
        maxMessages?: number,
        backoff?: number[]
        maxDeliveries?: number
        consumerFunc: (message: JsMsg) => Promise<void>
    }[]
}