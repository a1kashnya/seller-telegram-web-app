import { NextResponse } from 'next/server';

export async function GET(request, { params: {id} }) {
    const publications = [ 
        { id: 1, status: 'Разрешена', action_name: 'Акция Одежды',   product_name: 'Куртка', market_name: 'OZON', cashback: '20', team_name: '4rth', request: 'Синие куртки бесплатно' },
        { id: 2, status: 'Модерация', action_name: 'Крутые штаны', product_name: 'Штаны', market_name: 'OZON', cashback: '20', team_name: '4rth', request: 'Длинные штаны онлайн' },
        { id: 3, status: 'Модерация', action_name: 'Модные кепки', product_name: 'Кепки', market_name: 'WB', cashback: '20', team_name: '4rth', request: 'Синие купки бесплатно' },
        { id: 4, status: 'Модерация', action_name: 'Новинки недели', product_name: 'Шапки', market_name: 'OZON', cashback: '20', team_name: '4rth', request: 'Синие шапки бесплатно' },
        { id: 5, status: 'Модерация', action_name: 'Новинки недели', product_name: 'Майки', market_name: 'OZON', cashback: '20', team_name: '4rth', request: 'Синие майки бесплатно' },
    ]

    return NextResponse.json(publications)
}