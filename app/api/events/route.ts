import connectDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Event from "@/database/event.model"
import { v2 as cloudinary } from "cloudinary";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
    try {
        await connectDB()

        const formData = await req.formData()

        const event = Object.fromEntries(formData.entries())
        
        const file = formData.get('image') as File

        if(!file) return NextResponse.json({ message: 'Image file is required'}, { status: 400 })

        let tags: string[]
        let agenda: string[]

        try {
            tags = JSON.parse(formData.get('tags') as string)
            agenda = JSON.parse(formData.get('agenda') as string)
        } catch {
            return NextResponse.json({ message: 'Invalid tags or agenda format — expected JSON arrays'}, { status: 400 })
        }

        const arrayBuffer = await file.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)

        const uploadResult = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream({ resource_type: 'image', folder: 'DevEvent'}, (error, results) => {
                if(error) return reject(error);

                resolve(results)
            }).end(buffer)
        })

        event.image = (uploadResult as { secure_url: string}).secure_url
        
        const createdEvent = await Event.create({...event, tags, agenda})

        revalidatePath('/')

        return NextResponse.json({ message: 'Event created successfully', event: createdEvent }, { status: 201 })
    } catch (e) {
        console.error(e)
        return NextResponse.json({ message: 'Event Creation Failed', error: e instanceof Error ? e.message : 'Unknown error' }, { status: 500 })
    }
}

export async function GET() {
    try {
        await connectDB()

        const events = await Event.find().sort({ createdAt: -1 })

        return NextResponse.json({ message: 'Event list successfully', events}, { status: 200})
    } catch (error) {
        console.error(error)    
        return NextResponse.json({ message: 'Failed to fetch events', error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 })
    }
}