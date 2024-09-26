import { NextResponse } from 'next/server';

export async function GET(request, { params: { id } }) {
    const users = [ 
        {
            id: 1,
            name: '4rth',
            role: 'author'
        },
        {
            id: 2,
            name: 'alkashnya',
            role: 'admin'
        },
        {
            id: 3,
            name: 'RUSO',
            role: 'manager'
        }
    ]

    return NextResponse.json(users)
}