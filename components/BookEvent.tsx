'use client'

import { createBooking } from "@/lib/actions/booking.actions"
import { useState } from "react"

const BookEvent = ({ eventId }: { eventId: string }) => {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const { success } = await createBooking({ eventId, email })

        if(success) {
            setSubmitted(true)
        } else {
            console.error('Error creating booking: ')
        }
    } 

    return (
        <div className="book-event">
            {submitted ? (
            <p className="text-sm">Thanks for signing up!</p>
        ): (
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        placeholder="Enter your email address"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit" className="button-submit">Book Your Spot</button>
            </form>
        )}
        </div>
        
    )
}

export default BookEvent