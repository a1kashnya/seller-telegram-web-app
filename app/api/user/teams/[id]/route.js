import { NextResponse } from 'next/server';

export async function GET(request, { params: {id} }) {
    const teams = [
        {
            id: 1,
            name: 'Команда 1'
        },
        {
            id: 2,
            name: 'Команда 2'
        }
    ]

    return NextResponse.json(teams)
}