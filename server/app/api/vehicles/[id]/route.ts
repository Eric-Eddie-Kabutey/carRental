import { NextResponse } from 'next/server'
import prisma from '../../../lib/prisma'

export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
        const vehicle = await prisma.vehicle.findUnique({
            where: { id: params.id },
            include: {
                images: true,
                blocks: true,
                bookings: { where: { status: 'confirmed' } }
            }
        })

        if (!vehicle) {
            return NextResponse.json({ error: 'Not found' }, { status: 404 })
        }

        return NextResponse.json(vehicle)
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
