import { NextResponse } from 'next/server';

export async function GET(request, { params: { id } }) {
    const team = {
        id: 1,
        name: '4rth_team',
        author: '4rth',
        balance: '1000'
    }

    return NextResponse.json(team)
}