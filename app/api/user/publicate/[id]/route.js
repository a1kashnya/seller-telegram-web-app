import { NextResponse } from 'next/server';

export async function GET(request, { params: { id } }) {
    const publications = [
        { id: 1, status: 'Активная', public_date: '05.11.2004', public_time: '21:00', public_slots: 2 },
        { id: 2, status: 'Завершено', public_date: '05.11.2014', public_time: '21:00', public_slots: 2 }
    ]

    return NextResponse.json(publications)
}