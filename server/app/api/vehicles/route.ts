import { NextResponse } from 'next/server'
import prisma from '../../lib/prisma'
import { Prisma } from '@prisma/client'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const brand = searchParams.get('brand')
    const maxPrice = searchParams.get('maxPrice')

    const where: Prisma.VehicleWhereInput = { isActive: true }

    if (brand) where.brand = brand
    if (maxPrice) where.pricePerDay = { lte: parseFloat(maxPrice) }

    try {
        const vehicles = await prisma.vehicle.findMany({
            where,
            include: { images: true },
            orderBy: { createdAt: 'desc' }
        })
        return NextResponse.json(vehicles)
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch vehicles' }, { status: 500 })
    }
}
