import { IEvent } from "@/database/event.model";
import EventCard from "@/components/EventCard"

export default async function EventsPage() {

    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

    const response = await fetch(`${BASE_URL}/api/events`)
    const { events } = await response.json()
    
    return (
        <section className="px-40">
            <div className="mt-20 space-y-7">
                <h3>Events</h3>

            <ul className="events list-none">
                {events && events.length > 0 && events.map((event: IEvent) => (
                <li key={event.title}>
                    <EventCard {...event} />
                </li>
                ))}
            </ul>
            </div>
        </section>
    )
}