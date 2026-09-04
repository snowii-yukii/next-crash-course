'use server'
import connectDB from "../mongodb";
import Booking from "@/database/booking.model";
import { revalidatePath } from "next/cache";

export const createBooking = async ({ eventId, email }: { eventId: string; email: string }) => {
    try {
        await connectDB()

        await Booking.create({
            eventId,
            email
        })

        revalidatePath(`/events`)

        return { success: true }
    } catch (e) {
        console.error('create booking failed: ', e)
        return { success: false }
    }
}