const getAdvertentieById = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/advertentie/${id}`, {
        cache: 'no-store',
    })

    if (!res.ok) {
        throw new Error('Ошибка получения публикаций');
    }

    return res.json();
}

const getTeamsById = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/teams/${id}`, {
        cache: 'no-store',
    })

    if (!res.ok) {
        throw new Error('Ошибка получения команд');
    }

    return res.json();
}

const getPaymentsById = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/payments/${id}`, {
        cache: 'no-store',
    })

    if (!res.ok) {
        throw new Error('Ошибка получения статистики оплат');
    }

    return res.json();
}

const getPaymentsHistoryById = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/payments/history/${id}`, {
        cache: 'no-store',
    })

    if (!res.ok) {
        throw new Error('Ошибка получения истории оплат');
    }

    return res.json();
}

const getTeam = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/team/${id}`, {
        cache: 'no-store',
    })

    if (!res.ok) {
        throw new Error('Ошибка получения истории оплат');
    }

    return res.json();
}

const getTeamUsers = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/team/users/${id}`, {
        cache: 'no-store',
    })

    if (!res.ok) {
        throw new Error('Ошибка получения истории оплат');
    }

    return res.json();
}

const getUserById = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/${id}`, {
        cache: 'no-store',
    })

    if (!res.ok) {
        throw new Error('Ошибка получения истории оплат');
    }

    return res.json();
}

const getPublicateById = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/publicate/${id}`, {
        cache: 'no-store',
    })

    if (!res.ok) {
        throw new Error('Ошибка получения истории оплат');
    }

    return res.json();
}

export {getAdvertentieById, getTeamsById, getPaymentsById, getPaymentsHistoryById, getTeam, getTeamUsers, getUserById, getPublicateById}