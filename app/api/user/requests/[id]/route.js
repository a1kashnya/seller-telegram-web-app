import { NextResponse } from 'next/server';

export async function GET(request, { params: { id } }) {
    const requests = [
        { id: 1, status: 'Новый', type: 'Создание заказа', action_id: 1, action_name: 'Куртки и майки' },
        { id: 2, status: 'Подтвержден', type: 'Забор товара с ПВЗ/курьера', action_id: 1, action_name: 'Куртки и майки' },
        { id: 3, status: 'Отклонен', type: 'Отзыв на проверку', action_id: 1, action_name: 'Куртки и майки' },
        { id: 4, status: 'Подтвержден', type: 'Скриншот опубликованного отзыва', action_id: 1, action_name: 'Куртки и майки' },
        { id: 5, status: 'Новый', type: 'Запрос выплаты', action_id: 1, action_name: 'Куртки и майки' },
    ]

    return NextResponse.json(requests)
}