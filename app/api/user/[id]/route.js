import Statistics from '@/_components/statistics/Statistics';
import { NextResponse } from 'next/server';

export async function GET(request, { params: { id } }) {
    const user = {
        id: 1,
        name: 'Александр',
        nickname: '@alkashnya',
        balance: '1000',
        statistics: {
            complited: 103,
            clients: 24,
            cost: 20140
        },
        teams: [
            {
                id: 1,
                name: '4rth_team'
            },
            {
                id: 2,
                name: 'alkashnya_team'
            }
        ]
    }

    return NextResponse.json(user)
}