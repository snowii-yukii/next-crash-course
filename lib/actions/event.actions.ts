'use server'

import connectDB from "@/lib/mongodb"
import Event from "@/database/event.model"
import type { EventData } from "@/database/event.model"

export const getEventBySlug = async (slug: string): Promise<EventData | null> => {
    try {
        await connectDB()
        const event = await Event.findOne({ slug }).lean()
        if (!event) return null

        return JSON.parse(JSON.stringify(event))
    } catch (e) {
        console.error('getEventBySlug failed:', e)
        return null
    }
}

export const getSimilarEventsBySlug = async (slug: string): Promise<EventData[]> => {
    try {
        await connectDB()

        const event = await Event.findOne({ slug })
        if (!event) return []

        const similar = await Event.find({
            _id: { $ne: event._id },
            tags: { $in: event.tags }
        }).lean()

        return JSON.parse(JSON.stringify(similar))
    } catch (e) {
        console.error('getSimilarEventsBySlug failed:', e)
        return []
    }
}