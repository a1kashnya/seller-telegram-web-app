import { NextResponse } from 'next/server';

export async function GET(request, { params: {id} }) {
    const payments = [
        {
            id: 1,
            date: '01.01.1994',
            amount: '2000',
            method: 'Наличными'
        },
        {
            id: 2,
            date: '01.01.2024',
            amount: '2000',
            method: 'Безналичными'
        }
    ]

    return NextResponse.json(payments)
}