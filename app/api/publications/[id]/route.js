import { NextResponse } from 'next/server';

export async function GET(request, { params: {id} }) {
    const publications = [
        { id: 1, status: 'Модерация', publish_name: 'Акция Одежды', product_name: 'Куртка', market_name: 'OZON', cashback: '20', team_name: '4rth', request: 'Синие куртки бесплатно' },
        { id: 2, status: 'Модерация', publish_name: 'Акция Одежды', product_name: 'Куртка', market_name: 'OZON', cashback: '20', team_name: '4rth', request: 'Синие куртки бесплатно' }
    ]

    return NextResponse.json(publications)
}