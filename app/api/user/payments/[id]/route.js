import { NextResponse } from 'next/server';

export async function GET(request, { params: {id} }) {
    const payments = [
        {
            id: 1,
            request_name: 'Оплата 2000 рублей',
            action_name: 'Скидки на куртки',
            public_id: '1',
            request_date: '01.01.1999',
            amount: '2000',
            status: 'Успешно',
        },
        {
            id: 2,
            request_name: 'Оплата 3000 рублей',
            action_name: 'Скидки на обувь',
            public_id: '1',
            request_date: '01.01.1999',
            amount: '3000',
            status: 'Успешно',
        }
    ]

    return NextResponse.json(payments)
}